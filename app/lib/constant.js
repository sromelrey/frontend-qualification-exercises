const VERIFY_STATUS_OPTS = [
  { value: "pending", label: "Pending" },
  { value: "verified", label: "Verified" },
  { value: "unverified", label: "Unverified" },
];

const STATUS_OPTS = [
  { value: "active", label: "Active" },
  { value: "disabled", label: "Disabled" },
  { value: "blacklisted", label: "Blacklisted" },
];

module.exports = { VERIFY_STATUS_OPTS, STATUS_OPTS };
