import { Star } from "lucide-react";

const Rating = ({ rating = 0, size = 24 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1 justify-center">
      {stars.map((star) => {
        const fillPercentage =
          Math.min(Math.max(rating - (star - 1), 0), 1) * 100;

        return (
          <div
            key={star}
            className="relative"
            style={{ width: size, height: size }}
          >
            <Star size={size} className="text-gray-300 absolute top-0 left-0" />

            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star
                size={size}
                className="text-yellow-400 fill-yellow-400 drop-shadow-xl"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
