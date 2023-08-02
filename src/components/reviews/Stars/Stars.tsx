// import Icons
import StarIconOutline from "@heroicons/react/24/outline/StarIcon";
import StarIconSolid from "@heroicons/react/24/solid/StarIcon";

export interface StarsProps {
  rating: number;
  text?: string;
}

export const Stars = ({ rating, text = "out of" }: StarsProps) => {
  // Render star icons.
  const renderStars = () => {
    if (rating <= 5 && rating > 4) {
      return (
        <>
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
        </>
      );
    } else if (rating <= 4 && rating > 3) {
      return (
        <>
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
        </>
      );
    } else if (rating <= 3 && rating > 2) {
      return (
        <>
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
        </>
      );
    } else if (rating <= 2 && rating > 1) {
      return (
        <>
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
        </>
      );
    } else if (rating <= 1 && rating > 0) {
      return (
        <>
          <StarIconSolid className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
        </>
      );
    } else if (rating === 0) {
      return (
        <>
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
          <StarIconOutline className="w-[18px] h-[18px] text-yellow-400" />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex">{renderStars()}</div>
      <div className="text-sm">
        {rating} {text} 5
      </div>
    </div>
  );
};
