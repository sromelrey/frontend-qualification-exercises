/*
 * @ComboBox Specs - Display a list of arrays,
 *             can search through that array,
 *             have a spit display if textbox is being used,
 *             a checkbox for multiple selection.
 */

import React, { useState, useRef, FC, useEffect } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

interface Option {
  type: string;
  id: any;
  value: string;
  label: string;
}

const MultiSelectComboBox: FC<Props> = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as any)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside as any);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside as any);
  }, []);

  const handleOpen = () => setIsOpen(!isOpen);

  const handleSelectOption = (option: Option) => {
    const isSelected = selectedOptions.includes(option);
    setSelectedOptions(
      isSelected
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option]
    );
    onChange([...selectedOptions, option], option?.type); // Update parent component with selected options
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dropdownContent = (
    <div className='dropdown-content z-10 absolute flex flex-col gap-2 bg-regal-blue-950  p-2 left-190  ml-[-1rem] mt-2'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleInputChange}
          className='search-input p-1 bg-regal-blue-950 peer block w-full rounded-md border border-regal-blue-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        />
        <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-500' />
      </div>

      {filteredOptions.map((option) => (
        <div key={option.value} className='option-item gap-2 flex flex-row'>
          <input
            type='checkbox'
            id={option.value}
            checked={selectedOptions.some((slctfd) => slctfd.id === option.id)}
            onChange={() => handleSelectOption(option)}
          />
          <label htmlFor={option.value} className='text-yellow-400'>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );

  const selectedOptionsText =
    selectedOptions.length > 0
      ? selectedOptions
          .map((option) => option.label)
          .join(", ")
          .slice(0, 15) + "..."
      : placeholder;

  return (
    <div
      className='multi-select-combo-box relative bg-regal-blue-950 border-2 border-regal-blue-200 p-2 rounded-lg gap-2'
      ref={dropdownRef}
    >
      <button
        type='button'
        onClick={handleOpen}
        className='combo-box-button flex flex-row items-center'
      >
        {selectedOptionsText}
        {/* {String(selectedOptionsText).slice(0, 6) + "..."} */}
        <ChevronDownIcon className='h-5 w-5' />
      </button>

      {isOpen && dropdownContent}
    </div>
  );
};

type Props = {
  options: Option[];
  placeholder?: string;
  onChange: (selectedOptions: Option[], type: string) => void;
};

export default MultiSelectComboBox;
