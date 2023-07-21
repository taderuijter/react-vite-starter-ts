export interface BadgeProps {
  style?: string;
  children: React.ReactNode;
  size?: "sm" | "lg";
}

const sizeStyles = {
  sm: "text-xs px-2.5 py-0.5",
  lg: "text-sm px-3 py-0.5",
};

export const Badge = ({
  style = "bg-gray-100 text-gray-800",
  size = "sm",
  children,
}: BadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full font-medium ${sizeStyles[size]} ${style}`}>
    {children}
  </span>
);
