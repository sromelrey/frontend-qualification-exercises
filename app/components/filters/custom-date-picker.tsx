import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./custom-date-picker.css";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { addDays } from "date-fns";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function CustomDateRangePicker({
  isOpen,
  placeHolder,
  selectedOption,
  onClick,
}: {
  isOpen: boolean;
  placeHolder: string;
  selectedOption: any;
  onClick: any;
}) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className='multi-select-combo-box  cursor-pointer relative bg-regal-blue-950 border-2 border-regal-blue-200 p-2 rounded-lg gap-2'>
      <button
        onClick={() => onClick(state)}
        className=' flex flex-row items-center gap-2 justify-between'
      >
        {selectedOption ? selectedOption?.label : placeHolder}
        <ChevronDownIcon className='h-5 w-5' />
      </button>
      {isOpen && (
        <div className='flex flex-col w-full'>
          <div className='relative right-[500px] top-4 z-50'>
            <DateRangePicker
              onChange={(item: any) => setState([item.selection as any])}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction='horizontal'
              className='absolute'
            />

            <div className='relative gap-2 w-[300px] bottom-[-430px] left-[500px] justify-end flex-row'>
              <button
                onClick={() => onClick(state)}
                className='border-2 rounded-2xl text-[#FBBD2D] border-[#FBBD2D] p-2 items-center gap-2 justify-between mr-2'
              >
                Cancel
              </button>
              <button
                onClick={() => onClick(state)}
                className=' border-2 rounded-2xl items-center bg-[#FBBD2D] p-2 text-regal-blue-950 gap-2 justify-between'
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
