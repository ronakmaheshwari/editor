interface OutputResponse {
  stdout?: string;
  stderr?: string;
  output?: string;
  message?: string;
  compile_output?: string;
}

export default function OutputBox({ title, output }: { title:string,output: OutputResponse | null }) {
  return (
    <div className="relative z-10 p-4 space-y-4 h-full flex flex-col ">
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>

      <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md p-3 text-sm text-gray-800 whitespace-pre-wrap overflow-y-auto">
        {output ? (
          <pre>
            {output.stdout && `✅ Your Code output is:\n${output.stdout}`}
            {output.stderr && `❌ Error:\n${output.stderr}`}
            {output.compile_output && `🛠 Compile Output:\n${output.compile_output}`}
            {output.message && `ℹ️ Message:\n${output.message}`}
            {!output.stdout && !output.stderr && !output.compile_output && !output.message && "No output"}
          </pre>
        ) : (
          <span className="text-gray-500 text-center">Run your code to see the output.</span>
        )}
      </div>
    </div>
  );
}
