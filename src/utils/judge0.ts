import axios from "axios";
import { key, URL } from "./utils";

function base64EncodeUnicode(str: string): string {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_match, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
}

export default async function runWithJudge0(
  code: string,
  language_id: number,
  stdin: string = "Judge0"
): Promise<{ output: string; time: number }> {
  try {
    const encodedCode = base64EncodeUnicode(code);
    const encodedStdin = base64EncodeUnicode(stdin);

    const res = await axios.post(
      URL,
      {
        language_id,
        source_code: encodedCode,
        stdin: encodedStdin,
      },
      {
        params: {
          base64_encoded: "true",
          wait: "true",
          fields: "*",
        },
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
      }
    );

    const data = res.data;
    const output =
      data.stdout
        ? atob(data.stdout)
        : data.stderr
        ? atob(data.stderr)
        : data.compile_output
        ? atob(data.compile_output)
        : data.message
        ? atob(data.message)
        : "No output";

    const time = parseFloat(data.time) || 0;

    return { output: output.trim(), time };
  } catch (error: any) {
    console.error("Judge0 error:", error.response?.data || error.message);
    return { output: "Error occurred", time: 0 };
  }
}
