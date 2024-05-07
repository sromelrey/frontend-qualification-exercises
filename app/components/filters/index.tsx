/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Dropdown, { Option } from "./dropdown";
import { VERIFY_STATUS_OPTS, STATUS_OPTS } from "@/app/lib/constant";
import MultiSelectComboBox from "./combo-box";
import { useQuery } from "@apollo/client";
import CustomDateRangePicker from "./custom-date-picker";
import { formatDateToLocal } from "@/app/lib/utils";
const {
  MEMBERS_BY_NAME_QUERY,
  MEMBERS_BY_EMAIL_QUERY,
  MEMBERS_BY_MOBILE_QUERY,
  MEMBERS_BY_DOMAIN_QUERY,
} = require("@/app/lib/graphql/queries");

export default function Filters({
  nameData,
  emailData,
  mobileNoData,
  domainData,
  setFilterData,
  selectedOption,
  setSelectedOption,
  dateSelected,
  setDateSelected,
}: {
  nameData: any;
  emailData: any;
  mobileNoData: any;
  domainData: any;
  setFilterData: any;
  selectedOption: any;
  setSelectedOption: any;
  dateSelected: any;
  setDateSelected: any;
}) {
  const [filterType, setFilterType] = useState({
    type: "",
    options: [],
    isOpen: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (dropdownOptions: any, type?: string) => {
    setFilterData(dropdownOptions);
    setFilterType({
      options: dropdownOptions,
      type: type || "",
      isOpen: !filterType.isOpen,
    });
  };

  const handleSelect = () => {
    setFilterType({
      ...filterType,
      isOpen: false,
    });
  };

  const multiSelectHandler = (datas: any) => {
    const selectedName = datas.reduce(
      (acc: string, current: any) =>
        acc === "" ? current.value : `${acc},${current.value}`,
      ""
    );
    // const dataSelected = datas.map((data: any) => data.id);
    // let filterData: any = [];
    // nameData.map((data: any) => {
    //   if (dataSelected.includes(data.id)) {
    //     filterData.push({ ...data });
    //   }
    // });
    setFilterData(datas);
  };

  const datePickerHandler = (datas?: any) => {
    setIsOpen(!isOpen);
    datas && setDateSelected(datas.map((data: any) => data));
  };

  return (
    <div className='bg-regal-blue-900 p-2 border-2 border-regal-blue-200 rounded-t-lg flex flex-row gap-2'>
      <h1 className='text-2xl'>Filters</h1>
      <Dropdown
        setIsOpen={setFilterType}
        isOpen={
          filterType?.type === "virification-status" ? filterType.isOpen : false
        }
        options={filterType.options}
        onSelect={handleSelect}
        onClick={() =>
          toggleDropdown(VERIFY_STATUS_OPTS, "virification-status")
        }
        selectedOption={
          filterType?.type === "virification-status" &&
          (selectedOption as Option)
        }
        setSelectedOption={
          filterType?.type === "virification-status" && setSelectedOption
        }
        type={"verificationStatus"}
        placeHolder='Verification Status'
        // className='bottom-full'
      />

      {nameData && (
        <MultiSelectComboBox
          placeholder='Search Username'
          options={nameData || []}
          onChange={multiSelectHandler}
        />
      )}
      {emailData && (
        <MultiSelectComboBox
          placeholder='Search Email Address'
          options={emailData || []}
          onChange={multiSelectHandler}
        />
      )}
      {mobileNoData && (
        <MultiSelectComboBox
          placeholder='Search Mobile Number'
          options={mobileNoData || []}
          onChange={multiSelectHandler}
        />
      )}
      {domainData && (
        <MultiSelectComboBox
          placeholder='Search Domain'
          options={domainData || []}
          onChange={multiSelectHandler}
        />
      )}
      <CustomDateRangePicker
        isOpen={isOpen}
        selectedOption={selectedOption}
        onClick={datePickerHandler}
        placeHolder='Date Registered'
      />

      <Dropdown
        setIsOpen={setFilterType}
        isOpen={filterType?.type === "status" ? filterType.isOpen : false}
        options={filterType.options}
        onSelect={handleSelect}
        onClick={() => toggleDropdown(STATUS_OPTS, "status")}
        selectedOption={
          filterType?.type === "status" && (selectedOption as Option)
        }
        setSelectedOption={filterType?.type === "status" && setSelectedOption}
        type={"status"}
        placeHolder='Status'
      />
      <CustomDateRangePicker
        isOpen={filterType?.type === "status" ? isOpen : false}
        selectedOption={selectedOption}
        onClick={datePickerHandler}
        placeHolder='Date and Time Last Active'
      />
    </div>
  );
}
