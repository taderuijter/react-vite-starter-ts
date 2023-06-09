export interface BadgeProps {
  type:
    | "gray"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "purple"
    | "pink";
  text: string;
  size: "sm" | "lg";
}

const colorStyles = {
  gray: {
    bg: "bg-gray-100",
    text: "text-gray-800",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-800",
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-800",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-800",
  },
  indigo: {
    bg: "bg-indigo-100",
    text: "text-indigo-800",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-800",
  },
  pink: {
    bg: "bg-pink-100",
    text: "text-pink-800",
  },
};

const sizeStyles = {
  sm: {
    text: "text-xs",
    padding: "px-2.5 py-0.5",
  },
  lg: {
    text: "text-sm",
    padding: "px-3 py-0.5",
  },
};

export const Badge = ({ type, size, text }: BadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full font-medium ${colorStyles[type].bg} ${colorStyles[type].text} ${sizeStyles[size].text} ${sizeStyles[size].padding}`}>
    {text}
  </span>
);
