/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import TableBody from "./table-body";
import TableHeader from "./table-header";
import Dropdown, { Option } from "../filters/dropdown";
import MultiSelectComboBox from "../filters/combo-box";
import CustomDateRangePicker from "../filters/custom-date-picker";
import Pagination from "./pagination";
import { comboBoxOptions, transformedMembers } from "@/app/lib/utils";
import { VERIFY_STATUS_OPTS, STATUS_OPTS } from "@/app/lib/constant";
import Filters from "../filters";
const {
  MEMBERS_QUERY,
  MEMBERS_BY_NAME_QUERY,
} = require("@/app/lib/graphql/queries");

export type Members = {
  id: any;
  name: any;
  verificationStatus: any;
  emailAddress: any;
  mobileNumber: any;
  domain: any;
  dateTimeCreated: any;
  dateTimeLastActive: any;
  status: any;
};

export default function index() {
  const { loading, error, data } = useQuery(MEMBERS_QUERY);
  const [dateRegistered, setDateRegistered] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const [selectedOption, setSelectedOption] = useState<Option | any>(null);
  const [dateSelected, setDateSelected] = useState([]);

  let members: any[] = [];
  let filterMembers: any[] = [];
  let nameOptions: any;
  let emailOptions: any;
  let mobileNoOptions: any;
  let domainOptions: any;
  let options: any;

  if (data?.members) {
    members = transformedMembers(data.members.edges);
    nameOptions = transformedMembers(data.members.edges, "name");
    emailOptions = transformedMembers(data.members.edges, "emailAddress");
    mobileNoOptions = transformedMembers(data.members.edges, "mobileNumber");
    domainOptions = transformedMembers(data.members.edges, "domain");
    options = transformedMembers(data.members.edges, "verificationStatus");
    options = transformedMembers(data.members.edges, "status");
    if (filterData.length > 0 && members.length > 0) {
      const dataSelected = filterData.map((data: any) => data.id);

      filterMembers = members
        .map((member: any) => {
          if (dataSelected.includes(member.id)) {
            return member;
          }
        })
        .filter((member) => member !== undefined);
    }
    if (filterMembers.length > 0) members = filterMembers;
    if (options.length > 0 && selectedOption) {
      members = members
        .map((member: any) => {
          if (
            member[`${selectedOption.type}`] ===
            String(selectedOption.value).toUpperCase()
          ) {
            return member;
          }
        })
        .filter((member) => member !== undefined);
    }
    if (dateSelected.length > 0) {
      const startDate = new Date(dateSelected[0].startDate);
      const endDate = new Date(dateSelected[0].endDate);
      const filteredMembers = members.filter((member) => {
        const memberDate = new Date(member.dateTimeCreated);
        return memberDate >= startDate && memberDate <= endDate;
      });
      members = filteredMembers;
    }
  }

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-regal-blue-950 justify-center  md:pt-0'>
          <Filters
            setFilterData={setFilterData}
            nameData={nameOptions}
            emailData={emailOptions}
            mobileNoData={mobileNoOptions}
            domainData={domainOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            dateSelected={dateSelected}
            setDateSelected={setDateSelected}
          />
          <table className='hidden min-w-full max-h-96 text-gray-900 md:table'>
            <TableHeader />

            <TableBody members={members || []} />
          </table>
          <div className='mt-5 flex w-full justify-end'>
            <Pagination totalPages={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
