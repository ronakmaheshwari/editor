import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneProps {
  className?: string;
}

export default function MyDropzone({ className = "" }: DropzoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`flex items-center justify-center gap-2 bg-blue-50 text-blue-800 font-medium px-4 py-2 rounded-md hover:bg-blue-100 transition border border-dashed border-blue-300 cursor-pointer ${className}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag & drop some files here, or click to select</p>
      )}
    </div>
  );
}
