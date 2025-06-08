import axios from "axios";
import { Piston } from "./utils";

export async function getLatestVersion(language: string): Promise<string> {
  const res = await axios.get(`${Piston}/runtimes`);
  const runtime = res.data.find((r: any) => r.language === language);

  if (!runtime) {
    throw new Error(`Runtime not found for language: ${language}`);
  }

  return runtime.version;
}

export default async function runcode({
  language,
  code,
}: {
  language: string;
  code: string;
}): Promise<{
  output: { stdout?: string; stderr?: string; output?: string; message?: string };
}> {
  try {
    const version = await getLatestVersion(language); 

    const response = await axios.post(`${Piston}/execute`, {
      language,
      version,
      files: [{ name: "main", content: code }],
      stdin: "",
    });

    return { output: {
        stdout: response.data.run.stdout,
        stderr: response.data.run.stderr,
        output: response.data.run.output
      }, };
  } catch (error: any) {
    console.error("Execution error:", error?.response?.data || error.message);
    return {
      output: {
        stderr: error?.response?.data?.message || "Execution failed. Please try again.",
      },
    };
  }
}
