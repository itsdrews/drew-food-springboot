import { useEffect, useRef, useState } from "react";
import type { FoodData } from "../../interface/FoodData";
import { useFoodDataEdit } from "../../hooks/useFoodDataEdit";
import { StarRating } from "../StarRating/StarRating";
import { ServiceTypeSelector } from "../ServiceTypeSelector/ServiceTypeSelector";

interface EditModalProps {
  food: FoodData;
  closeModal(): void;
}

export function EditModal({ food, closeModal }: EditModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState(food.title);
  const [restaurant, setRestaurant] = useState(food.restaurant);
  const [rating, setRating] = useState(food.rating);
  const [price, setPrice] = useState(food.price);
  const [imageUrl, setImageUrl] = useState(food.imageUrl);
  const [type, setType] =
    useState<FoodData["type"]>(food.type);

  const { mutate, isPending, isSuccess } = useFoodDataEdit();

  const submit = () => {
    mutate({
      id: food.id,
      title,
      restaurant,
      type,
      rating,
      price,
      imageUrl
    });
  };

  /* Fechar ao clicar fora */
  function handleOverlayClick(e: React.MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  }

  /* Fechar com ESC */
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (isSuccess) closeModal();
  }, [isSuccess]);

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        ref={modalRef}
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
      >
        <h2 className="mb-4 text-xl font-bold">Editar prato</h2>

        <div className="grid gap-4">
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="input"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          />
          <input
            className="input"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <div>
            <label className="text-sm font-medium">Avaliação</label>
            <StarRating rating={rating} setRating={setRating} />
          </div>

          <div>
            <label className="text-sm font-medium">Tipo de atendimento</label>
            <ServiceTypeSelector
              value={type}
              onChange={setType}
            />
          </div>

          <input
            type="number"
            className="input"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={closeModal}
            disabled={isPending}
            className="rounded px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          >
            Cancelar
          </button>

          <button
            onClick={submit}
            disabled={isPending}
            className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-70"
          >
            {isPending && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            )}
            {isPending ? "Salvando..." : "Salvar alterações"}
          </button>
        </div>
      </div>
    </div>
  );
}
