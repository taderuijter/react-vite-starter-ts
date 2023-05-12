import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

// Input type
export interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  title: string;
  description: string;
}

const alertStyles = {
  success: {
    bg: "rounded-md p-4 bg-green-50",
    title: "text-sm font-medium text-green-800",
    text: "mt-2 text-sm text-green-700",
    icon: CheckCircleIcon,
    iconColor: "h-6 w-6 text-green-400",
  },
  error: {
    bg: "rounded-md p-4 bg-red-50",
    title: "text-sm font-medium text-red-800",
    text: "mt-2 text-sm text-red-700",
    icon: XCircleIcon,
    iconColor: "h-6 w-6 text-red-400",
  },
  warning: {
    bg: "rounded-md p-4 bg-yellow-50",
    title: "text-sm font-medium text-yellow-800",
    text: "mt-2 text-sm text-yellow-700",
    icon: ExclamationTriangleIcon,
    iconColor: "h-6 w-6 text-orange-400",
  },
  info: {
    bg: "rounded-md p-4 bg-blue-50",
    title: "text-sm font-medium text-blue-800",
    text: "mt-2 text-sm text-blue-700",
    icon: InformationCircleIcon,
    iconColor: "h-6 w-6 text-blue-400",
  },
};

export const Alert = ({ type, title, description }: AlertProps) => {
  const IconComponent = alertStyles[type].icon;

  return (
    <div className={alertStyles[type].bg}>
      <div className="flex">
        <div className="flex-shrink-0">
          <IconComponent
            className={alertStyles[type].iconColor}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className={alertStyles[type].title}>{title}</h3>
          <div className={alertStyles[type].text}>{description}</div>
        </div>
      </div>
    </div>
  );
};
