export default function OutputBox() {
  return (
    <div className="relative z-10 p-4 space-y-4 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-gray-800">Output</h3>

      <button
        type="button"
        className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md text-sm px-4 py-2 transition duration-200"
      >
        Run Code
      </button>

      <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md p-3 text-sm text-gray-800 whitespace-pre-wrap overflow-y-auto">
        {/* Output will appear here */}
      </div>
    </div>
  );
}
