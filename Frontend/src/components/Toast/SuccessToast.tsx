import { Toast } from "./Toast";

interface SuccessToastProps {
  message: string;
}

export function SuccessToast({ message }: SuccessToastProps) {
  return (
    <Toast>
      <div className="flex items-center gap-3 p-4">
        <span className="text-green-600">✔</span>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </Toast>
  );
}
