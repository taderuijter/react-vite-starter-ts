import { PhoneIcon } from "@heroicons/react/24/solid";

export interface PhonenumberProps {
  PhoneNumber: string;
  style?: string;
}

export const PhoneNumber = ({
  PhoneNumber,
  style = "bg-slate-100",
}: PhonenumberProps) => (
  <div className={`inline-flex items-center px-6 py-4 rounded-full ${style}`}>
    <PhoneIcon className="block h-5 w-5 mr-2" />
    <div className="text-sm">{PhoneNumber}</div>
  </div>
);
