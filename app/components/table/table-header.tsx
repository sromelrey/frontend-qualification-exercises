import React from "react";

export default function TableHeader() {
  return (
    <thead className='rounded-lg text-left text-sm font-normal'>
      <tr>
        <th
          scope='col'
          className='px-4 py-5 font-medium sm:pl-6 text-[#667085]'
        >
          Name
        </th>
        <th
          scope='col'
          className='px-4 py-5 font-medium sm:pl-6 text-[#667085]'
        >
          Verification Status
        </th>
        <th
          scope='col'
          className='px-4 py-5 font-medium sm:pl-6 text-[#667085]'
        >
          Balance
        </th>
        <th
          scope='col'
          className='px-4 py-5 font-medium sm:pl-6 text-[#667085]'
        >
          Email Address
        </th>
        <th
          scope='col'
          className='px-4 py-5 font-medium sm:pl-6 text-[#667085]'
        >
          Mobile number
        </th>
        <th
          scope='col'
          className='px-4 py-5 font-medium sm:pl-6 text-[#667085]'
        >
          Domain
        </th>
        <th
          scope='col'
          className='px-4 py-5 font-medium sm:pl-6 text-[#667085]'
        >
          Date Registered
        </th>
        <th
          scope='col'
          className='px-4 py-5 font-medium sm:pl-6 text-[#667085]'
        >
          Status
        </th>
        <th
          scope='col'
          className='px-4 py-5 font-medium sm:pl-6 text-[#667085]'
        >
          Date And Time Last Active
        </th>
      </tr>
    </thead>
  );
}
