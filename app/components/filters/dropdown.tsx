import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useState } from "react";

export interface Option {
  label?: string;
  value?: any;
}

const Dropdown = ({
  options,
  onSelect,
  onClick,
  isOpen,
  setIsOpen,
  placeHolder,
  className,
  selectedOption,
  type,
  setSelectedOption,
}: {
  options: Option[];
  onSelect: (option: Option) => void;
  onClick: () => void;
  isOpen: boolean;
  placeHolder: string;
  setIsOpen: any;
  className?: string;
  type?: string;
  selectedOption?: Option | any;
  setSelectedOption?: ((option: Option) => void) | any;
}) => {
  const handleSelect = (option: any) => {
    option.type = type;
    setSelectedOption && setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className='multi-select-combo-box  cursor-pointer relative bg-regal-blue-950 border-2 border-regal-blue-200 p-2 rounded-lg gap-2'>
      <button
        onClick={onClick}
        className=' flex flex-row items-center gap-2 justify-between'
      >
        {selectedOption ? selectedOption?.label : placeHolder}
        <ChevronDownIcon className='h-5 w-5' />
      </button>
      {isOpen && (
        <ul
          className={clsx(
            `z-10 absolute w-28 flex flex-col gap-2 bg-regal-blue-950  p-2 left-250 ml-[-0.5rem] mt-2`,
            className
          )}
        >
          {options.map((option: any) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
