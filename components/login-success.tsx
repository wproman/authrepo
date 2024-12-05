import { CheckCircledIcon } from "@radix-ui/react-icons";

interface LoginSuccessProps {
  message: string;
}

export const FormSuccess = ({ message }: LoginSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-green-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-green-600">
      <CheckCircledIcon className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
};
