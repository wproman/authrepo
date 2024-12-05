import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface LoginErrorProps {
  message?: string; // Make message optional
}

export const FormErron = ({ message }: LoginErrorProps) => {
  // Render nothing if message is falsy (null, undefined, or empty string)
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 text-sm text-red-600">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
