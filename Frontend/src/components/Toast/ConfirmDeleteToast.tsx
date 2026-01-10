import { Toast } from "./Toast";

interface ConfirmDeleteToastProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDeleteToast({
  title,
  onConfirm,
  onCancel,
}: ConfirmDeleteToastProps) {
  return (
    <Toast>
      <div className="p-4">
        <p className="text-sm text-gray-700">
          Tem certeza que deseja excluir{" "}
          <span className="font-semibold">{title}</span>?
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
          >
            Excluir
          </button>
        </div>
      </div>
    </Toast>
  );
}
