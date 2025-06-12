import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  FileCode2,
  FileText,
  FileType,
  FileTerminal,
  FileCodeIcon,
} from "lucide-react";

interface DropzoneProps {
  className?: string;
  onFileContent: (content: string) => void; 
}

const getIconByExtension = (ext: string) => {
  switch (ext) {
    case "js":
    case "jsx":
      return <FileCode2 className="w-5 h-5 text-yellow-600" />;
    case "ts":
    case "tsx":
      return <FileCode2 className="w-5 h-5 text-blue-600" />;
    case "py":
      return <FileText className="w-5 h-5 text-green-600" />;
    case "java":
      return <FileCode2 className="w-5 h-5 text-red-600" />;
    case "c":
      return <FileCodeIcon className="w-5 h-5 text-violet-500" />
    case "cpp":
      return <FileTerminal className="w-5 h-5 text-gray-600" />;
    default:
      return <FileType className="w-5 h-5 text-gray-500" />;
  }
};

export default function MyDropzone({ className = "", onFileContent}: DropzoneProps) {
  const [file, setFile] = useState<File | undefined>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const codeFile = acceptedFiles[0];
    setFile(codeFile);

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      // console.log(text);
      onFileContent(text);
    };
    reader.readAsText(codeFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/javascript": [".js"],
      "text/typescript": [".ts"],
      "text/jsx": [".jsx"],
      "text/tsx": [".tsx"],
      "text/x-python": [".py"],
      "text/x-java-source": [".java"],
      "text/x-c++src": [".cpp"],
      "text/x-csrc": [".c"],
    },
    multiple: false,
    autoFocus:true
  });

  const fileExtension = file?.name.split(".").pop() || "";

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      {/* <h3 className="text-lg font-semibold">The Files must be code files only !</h3> */}
      <div
        {...getRootProps()}
        className={`flex items-center justify-center gap-2 bg-blue-50 text-blue-800 font-medium px-4 py-2 rounded-md hover:bg-blue-100 transition border border-dashed border-blue-300 cursor-pointer ${className}`}
      >
        
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the code file here ...</p>
        ) : (
          <div>
            
            <p>Drag & drop a code file here, or click to select</p>
          </div>
        )}
      </div>

      {file && (
            <div className="w-[350px] bg-gray-100 p-3 rounded-md shadow-sm border border-gray-400 space-y-2">
              <div className="flex items-center gap-2">
                {getIconByExtension(fileExtension)}
                <span className="text-sm font-medium text-gray-900 truncate">
                  {file.name}
                </span>
              </div>
            </div>  
      )}
    </div>
  );
}
