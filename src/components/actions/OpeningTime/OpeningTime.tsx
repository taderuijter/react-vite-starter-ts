import { useState, useEffect } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

export interface ClockProps {
  openHours: string;
  closingHours: string;
  open: string;
  closed: string;
  style?: string;
}

export const OpeningTime = ({
  openHours,
  closingHours,
  open,
  closed,
  style = "text-black",
}: ClockProps) => {
  const [close, setClose] = useState(false);

  useEffect(() => {
    // Specify opening hours
    const startTime = parseInt(openHours, 10);
    const endTime = parseInt(closingHours, 10);

    // Get date and time
    const today = new Date();
    const time = today.getHours();
    const day = today.getDay();

    // Conditional statement changes open to true of false
    if (day > 0 && day < 6 && time > startTime && time < endTime) {
      setClose(true);
    } else {
      setClose(false);
    }
  }, [openHours, closingHours]);

  if (close) {
    return (
      <div className={`flex flex-row items-center ${style}`}>
        <div className="relative mr-[14px]">
          <ClockIcon className="block h-5 w-5 mr-2" />
          <div className="w-[5px] h-[5px] bg-green-500 rounded-full absolute -top-[1px] right-[2px]"></div>
        </div>
        <div className="flex flex-col">
          <p className="p-0 m-0 text-xs uppercase">{open}</p>
          <p className="p-0 m-0 text-xs font-semibold">
            {openHours}:00 - {closingHours}:00
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-row items-center ${style}`}>
      <div className="relative mr-[14px]">
        <ClockIcon className="block h-5 w-5 mr-2" />
        <div className="w-[5px] h-[5px] bg-red-500 rounded-full absolute -top-[1px] right-[2px]"></div>
      </div>
      <div className="flex flex-col">
        <p className="p-0 m-0 text-xs uppercase">{closed}</p>
        <p className="p-0 m-0 text-xs font-semibold">
          {openHours}:00 - {closingHours}:00
        </p>
      </div>
    </div>
  );
};
