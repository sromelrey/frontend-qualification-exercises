import { gql } from "@apollo/client";

const MEMBERS_QUERY = gql`
  query {
    members(first: 10) {
      edges {
        node {
          id
          ... on Member {
            name
            verificationStatus
            emailAddress
            mobileNumber
            domain
            dateTimeCreated
            dateTimeLastActive
            status
            wallet {
              balance
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const MEMBERS_BY_NAME_QUERY = gql`
  query ($search: String, $first: Int) {
    membersByName(search: $search, first: $first) {
      name
      verificationStatus
      emailAddress
      mobileNumber
      domain
      dateTimeCreated
      dateTimeLastActive
      status
      wallet {
        balance
      }
    }
  }
`;
const MEMBERS_BY_EMAIL_QUERY = gql`
  query ($search: String!, $first: Int) {
    membersByEmailAddress(search: $search, first: $first) {
      name
      verificationStatus
      emailAddress
      mobileNumber
      domain
      dateTimeCreated
      dateTimeLastActive
      status
      wallet {
        balance
      }
    }
  }
`;
const MEMBERS_BY_MOBILE_QUERY = gql`
  query ($search: String!, $first: Int) {
    membersByMobileNumber(search: $search, first: $first) {
      name
      verificationStatus
      emailAddress
      mobileNumber
      domain
      dateTimeCreated
      dateTimeLastActive
      status
      wallet {
        balance
      }
    }
  }
`;
const MEMBERS_BY_DOMAIN_QUERY = gql`
  query ($search: String!, $first: Int) {
    membersByDomain(search: $search, first: $first) {
      name
      verificationStatus
      emailAddress
      mobileNumber
      domain
      dateTimeCreated
      dateTimeLastActive
      status
      wallet {
        balance
      }
    }
  }
`;

module.exports = {
  MEMBERS_QUERY,
  MEMBERS_BY_NAME_QUERY,
  MEMBERS_BY_EMAIL_QUERY,
  MEMBERS_BY_MOBILE_QUERY,
  MEMBERS_BY_DOMAIN_QUERY,
};
