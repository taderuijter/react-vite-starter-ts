// Modal types
export interface IconProps {
  icon: React.ReactNode;
  className?: string;
}

export const Icon = ({ icon, className }: IconProps) => (
  <div
    className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${className}`}>
    {icon}
  </div>
);
