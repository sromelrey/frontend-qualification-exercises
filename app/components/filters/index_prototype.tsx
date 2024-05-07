/* eslint-disable react-hooks/rules-of-hooks */
/*
 * * This is a prototype component
 */
"use client";
// import React, { useState } from "react";
// import Dropdown from "./dropdown";
// import { VERIFY_STATUS_OPTS, STATUS_OPTS } from "@/app/lib/constant";
// import MultiSelectComboBox from "./combo-box";

// import { useQuery } from "@apollo/client";
// const {
//   MEMBERS_BY_NAME_QUERY,
//   MEMBERS_BY_EMAIL_QUERY,
//   MEMBERS_BY_MOBILE_QUERY,
//   MEMBERS_BY_DOMAIN_QUERY,
// } = require("@/app/lib/graphql/queries");

// export default function Filters({
//   nameOptions,
//   mobileNoOptions,
//   emailOptions,
//   domainOptions,
// }: {
//   nameOptions: any[];
//   mobileNoOptions: any[];
//   emailOptions: any[];
//   domainOptions: any[];
// }) {
//   const QUERY_CONSTANTS = (type: string) => {
//     if (type === "byName") return MEMBERS_BY_NAME_QUERY;
//     if (type === "byEmail") return MEMBERS_BY_NAME_QUERY;
//     if (type === "byMobileNo") return MEMBERS_BY_MOBILE_QUERY;
//     if (type === "byDomain") return MEMBERS_BY_DOMAIN_QUERY;
//   };
//   const fetchData = (filter: string) => {
//     return useQuery(MEMBERS_BY_NAME_QUERY, {
//       variables: { search: filter },
//     });
//   };

//   const [searchByFilter, setSearchByFilter] = useState({});

//   const { loading, error, data, refetch } = useQuery(
//     QUERY_CONSTANTS(searchByFilter.type),
//     {
//       variables: { search: searchByFilter.value },
//     }
//   );
//   //   const [multiSelectOptions, setMultiSelectOptions] = useState([]);

//   //   const multiSelectHandler = (data: any, type: string) => {
//   //     const selectedOption = data.reduce(
//   //       (acc: string, current: any) =>
//   //         acc === "" ? current.value : `${acc},${current.value}`,
//   //       ""
//   //     );
//   //     setSearchByFilter(selectedOption);
//   //   };

//   return (
//     <div className='bg-regal-blue-900 p-2 border-2 border-regal-blue-200 rounded-t-lg flex flex-row gap-2'>
//       <h1 className='text-2xl'>Filters</h1>
//       {/* {multiSelectOptions && (
//         <MultiSelectComboBox
//           placeholder='Name'
//           options={multiSelectOptions}
//           onChange={multiSelectHandler}
//         />
//       )} */}
//       {/* <Dropdown
//         setIsOpen={setIsOpen}
//         isOpen={isOpen}
//         options={options}
//         onSelect={handleSelect}
//         onClick={() =>
//           toggleDropdown(VERIFY_STATUS_OPTS, "virification-status")
//         }
//         placeHolder='Verification Status'
//         className='bottom-full'
//       />
//       <Dropdown
//         setIsOpen={setIsOpen}
//         isOpen={isOpenStatus}
//         options={options}
//         onSelect={handleSelect}
//         onClick={() => toggleDropdown(STATUS_OPTS)}
//         placeHolder='Status'
//       /> */}
//       {/* {emailOptions && (
//         <MultiSelectComboBox
//           placeholder='Email Address'
//           options={emailOptions}
//           onChange={multiSelectHandler}
//         />
//       )} */}
//     </div>
//   );
// }
