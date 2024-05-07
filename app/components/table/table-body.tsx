// @ts-nocheck
import React from "react";

import "@/app/components/table/index.module.css";
import { Members } from ".";

export default function TableBody({ members }: { members: Array<Members> }) {
  const getStatusColor = (status: string) => {
    const statusColors = {
      verified: "#027A48",
      pending: "#ffc107",
      unverified: "#dc3545",
    };
    return statusColors[status.toLowerCase()] || "#000"; // Default color if status not found
  };
  return (
    <>
      <tbody className=' overflow-x-auto'>
        {members.length > 0 &&
          members.map((member: any) => {
            const statusColor = getStatusColor(member.verificationStatus);

            return (
              <tr
                key={member.id}
                className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
              >
                <td className='whitespace-nowrap py-3 pl-6 pr-3 text-[#FBBD2C]'>
                  {member.name}
                </td>
                <td
                  className={`flex flex-row gap-2 relative whitespace-nowrap py-3 pl-6 pr-3`}
                  style={{ color: statusColor }}
                >
                  <button
                    type='button'
                    className={`relative inline-flex gap-2 items-center px-3 py-1.5 text-sm font-medium text-center text-[${statusColor}] border-2 rounded-full`}
                  >
                    <span
                      className={`inline-flex items-center justify-center w-3 h-3 ms-2 text-xs font-semibold  bg-[${statusColor}] rounded-full`}
                    ></span>

                    {String(member.verificationStatus).toLowerCase()}
                  </button>
                </td>
                <td className='whitespace-nowrap py-3 pl-6 pr-3 text-[#667085]'>
                  {member.balance}
                </td>
                <td className='whitespace-nowrap py-3 pl-6 pr-3 text-[#667085]'>
                  {member.emailAddress || "N/A"}
                </td>
                <td className='whitespace-nowrap py-3 pl-6 pr-3 text-[#667085]'>
                  {member.mobileNumber}
                </td>
                <td className='whitespace-nowrap py-3 pl-6 pr-3 text-[#667085]'>
                  {member.domain || "N/A"}
                </td>
                <td className='whitespace-nowrap py-3 pl-6 pr-3 text-[#667085]'>
                  {member.dateTimeCreated}
                </td>
                <td className='whitespace-nowrap py-3 pl-6 pr-3 text-[#667085]'>
                  {member.status}
                </td>
                <td className='whitespace-nowrap py-3 pl-6 pr-3 text-[#667085]'>
                  {member.dateTimeLastActive}
                </td>
              </tr>
            );
          })}
      </tbody>
      {members.length === 0 && (
        <div className='mt-5 flex w-full justify-items-center content-center justify-center text-white'>
          <h1 className='text-2xl'>No Data Found</h1>
        </div>
      )}
    </>
  );
}
