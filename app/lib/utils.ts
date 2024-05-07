import { Members } from "../components/table";

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export function formatDateToLocal(dateStr: string, locale: string = "en-US") {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);

  return formatter.format(date);
}

export const transformedMembers = (members: any[], type?: string) => {
  let transform;
  transform = members.map((member: any) => {
    return {
      id: member.node.id,
      name: member.node.name,
      verificationStatus: member.node.verificationStatus,
      emailAddress: member.node.emailAddress,
      mobileNumber: member.node.mobileNumber,
      balance: member?.node?.wallet?.balance,
      domain: member.node.domain,
      dateTimeCreated: formatDateToLocal(member.node.dateTimeCreated),
      dateTimeLastActive: formatDateToLocal(member.node.dateTimeLastActive),
      status: member.node.status,
    };
  });
  if (!!type) {
    transform = transform
      .map((member: any) => {
        if (member[type] && member[type] !== null)
          return {
            id: member?.id || "",
            value: member[type],
            label: member[type],
          };
      })
      .filter((member) => member !== undefined);
  }

  return transform.length > 0 ? transform : [];
};

export const comboBoxOptions = (members: any, optionType: string) => {
  return members
    .filter((data: any) => data[optionType] !== null)
    .map((data: any) => ({
      id: data.id,
      label: data.emailAddress,
      value: data.emailAddress,
    }));
};
