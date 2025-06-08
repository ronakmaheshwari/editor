import { useState } from "react";
import { Language } from "../../utils/utils";

type LanguageValue = { id: number; version: string };

export default function Dropdown({
  onClick,
}: {
  onClick: (lang: { name: string; id: number; version: string }) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const languages = Object.entries(Language); 
  function handleSelect(name: string, lang: LanguageValue) {
    setSelected(name);
    setOpen(false);
    onClick({ name, id: lang.id, version: lang.version });
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {selected ?? "Languages"}
        <svg
          className="w-2.5 h-2.5 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-2 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {languages.map(([name, lang]) => (
              <li key={lang.id}>
                <button
                  onClick={() => handleSelect(name, lang)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  type="button"
                >
                  {name} ({lang.version})
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
