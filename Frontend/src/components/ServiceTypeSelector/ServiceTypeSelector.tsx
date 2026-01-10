interface ServiceTypeSelectorProps {
  value: "DELIVERY" | "LOCAL";
  onChange: (value: "DELIVERY" | "LOCAL") => void;
}

export function ServiceTypeSelector({
  value,
  onChange,
}: ServiceTypeSelectorProps) {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => onChange("DELIVERY")}
        className={`flex-1 rounded-lg border px-4 py-3 font-medium transition cursor-pointer  
          ${
            value === "DELIVERY"
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
          }`}
      >
        Delivery
      </button>

      <button
        type="button"
        onClick={() => onChange("LOCAL")}
        className={`flex-1 rounded-lg border px-4 py-3 font-medium transition cursor-pointer
          ${
            value === "LOCAL"
              ? "border-green-600 bg-blue-600 text-white"
              : "border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
          }`}
      >
        Consumo no local
      </button>
    </div>
  );
}
