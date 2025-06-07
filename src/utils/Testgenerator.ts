import { anthropic } from "./Antropic";

export default async function TestGenerator({
  question,
  code,
  language,
}: {
  question: string;
  language: string;
  code:string;
}) {
  const prompt = `
    You are a test engineer. Write 3 test cases for this question along with edge cases in 1 of them:

    "${question}"
    ${code} 
    Each should call take functionName from ${code} with inputs and expected output using:
    assertEqual(functionName(...), ...);
    Only return ${language} test cases.
`;

const response = await anthropic.messages.create({
  model: "claude-opus-4-20250514",
  max_tokens: 300,
  messages: [{ role: "user", content: prompt }],
});
  console.log(response)
  return typeof response.content[0] === "string"
    ? response.content[0]
    : (response.content[0] as any)?.text || "";
}
