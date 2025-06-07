import { useState } from "react";
import runWithJudge0 from "../../utils/judge0";
import TestGenerator from "../../utils/Testgenerator";
import wrapWithTests from "../../utils/wrapWithTests";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Schema {
  language: string;
  langId: number;
  question: string;
  code: string;
}

export default function LeetcodeBox({
  code,
  langId,
  language,
  question,
}: Schema) {
  const [output, setOutput] = useState("");
  const [graphData, setGraphData] = useState<{ run: number; time: number }[]>(
    []
  );
  const [runCount, setRunCount] = useState(1);
  const [testResult, setTestResult] = useState<"pass" | "fail" | null>(null);

  const handleRun = async () => {
    try {
      const tests = await TestGenerator({ question, language, code });
      const finalCode = wrapWithTests(code, tests);
      const result = await runWithJudge0(finalCode, langId);

      setOutput(result.output);
      const out = result.output.toLowerCase();
      if (
        out.includes("assert") ||
        out.includes("error") ||
        out.includes("fail") ||
        out.includes("exception")
      ) {
        setTestResult("fail");
      } else {
        setTestResult("pass");
      }

      setGraphData((prev) => [...prev, { run: runCount, time: result.time }]);
      setRunCount((prev) => prev + 1);
    } catch (err) {
      console.error("Error running code:", err);
      setTestResult("fail");
    }
  };

  return (
    <div className="relative z-10 p-4 space-y-4 h-full flex flex-col">

      <div className="flex-1 bg-gray-100 rounded-xl shadow-inner p-4 overflow-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Performance Graph</h2>
        {graphData.length > 0 ? (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="run" label={{ value: "Run", position: "insideBottomRight", offset: -5 }} />
              <YAxis label={{ value: "Time (s)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Line type="monotone" dataKey="time" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-[200px] w-full flex items-center justify-center text-gray-400 italic">
            Run some tests to see the performance graph.
          </div>
        )}
      </div>

      <div className="bg-white border border-gray-300 rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Test Result</h2>
        {testResult === "pass" ? (
          <div className="text-green-600 font-bold text-xl">✅ Passed All Test Cases</div>
        ) : testResult === "fail" ? (
          <div className="text-red-600 font-bold text-xl">❌ Failed Some Test Cases</div>
        ) : (
          <div className="text-gray-500 italic">No test run yet.</div>
        )}
        {output && (
          <pre className="mt-3 p-3 bg-gray-50 rounded text-sm text-gray-700 overflow-x-auto">
            {output}
          </pre>
        )}
        <button
          onClick={handleRun}
          className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Run Tests
        </button>
      </div>
    </div>
  );
}
