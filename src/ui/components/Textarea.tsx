import type { ChangeEvent, MouseEvent } from "react";

interface TextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Textarea({ onChange, value, onClick }: TextareaProps) {
  return (
    <div className="flex flex-col w-full bg-blue-50 p-4 rounded-lg shadow-lg">
      <label
        htmlFor="message"
        className="mb-2 text-sm font-semibold text-gray-900"
      >
        Your Question:
      </label>
      <textarea
        id="message"
        rows={8}
        onChange={onChange}
        className="resize-none p-3 w-full text-sm text-black bg-white placeholder:text-gray-400 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 overflow-y-scroll"
        placeholder={value}
      ></textarea>

      <button
        type="button"
        className="mt-4 self-start bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
}
