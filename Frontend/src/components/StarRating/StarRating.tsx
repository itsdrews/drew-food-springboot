interface StarRatingProps {
  rating: number;
  setRating: (value: number) => void;
}

export function StarRating({ rating, setRating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          onClick={() => setRating(star)}
          className={`text-2xl transition cursor-pointer ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}
