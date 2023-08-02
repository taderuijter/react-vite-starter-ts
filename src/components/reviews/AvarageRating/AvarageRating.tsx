// Import components
import { AiAvatar } from "components/users/AiAvatar/AiAvatar";
import { Stars } from "components/reviews/Stars/Stars";

export interface AvarageRatingProps {
  title: string;
  rating: number;
  text?: string;
}

export const AvarageRating = ({
  title,
  rating,
  text = "out of",
}: AvarageRatingProps) => (
  <div className="lg:flex lg:items-center space-x-4">
    <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
      <AiAvatar />
      <AiAvatar />
      <AiAvatar />
    </div>
    <div className="text-sm space-y-1">
      <div>{title}</div>
      <Stars rating={rating} text={text} />
    </div>
  </div>
);
