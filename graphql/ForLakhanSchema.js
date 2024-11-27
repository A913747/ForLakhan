import { gql } from 'apollo-server';

const typeDefs = gql`
type CreditUnion {
    id: ID!
    contractNumber: String!
    creditUnionName: String!
    premiumReports: [PremiumReport]
    premiumAdjustments: [PremiumAdjustment]
    singlePremiumCertificateReturns: [SinglePremiumCertificateReturn]
  }

  type PremiumReport {
    id: ID!
    productName: String!
    reportPeriod: String!
    status: String!
    lastUpdate: String!
    periodEnding: String!
    adjustmentTypeToTheCreditUnion: String!
    comment: String!
    totalBorrowerFees: Float!
    cuRetailRate: Float!
    protectedLoanAmount: Float!
    payRate: Float!
    premiumDue: Float!
    totalAmount: Float!
  }

  type PremiumAdjustment {
    id: ID!
    productName: String!
    reportPeriod: String!
    status: String!
    lastUpdate: String!
    periodEnding: String!
    adjustmentTypeToTheCreditUnion: String!
    comment: String!
    totalBorrowerFees: Float!
    cuRetailRate: Float!
    protectedLoanAmount: Float!
    payRate: Float!
    premiumDue: Float!
    totalAmount: Float!
  }

  type SinglePremiumCertificateReturn {
    id: ID!
    # Define additional fields here
  }

  input CreditUnionInput {
    contractNumber: String!
    creditUnionName: String!
  }

  input PremiumReportInput {
    productName: String!
    reportPeriod: String!
    status: String!
    lastUpdate: String!
    periodEnding: String!
    adjustmentTypeToTheCreditUnion: String!
    comment: String!
    totalBorrowerFees: Float!
    cuRetailRate: Float!
    protectedLoanAmount: Float!
    payRate: Float!
    premiumDue: Float!
    totalAmount: Float!
  }

  type Query {
    creditUnions: [CreditUnion]
    premiumReports: [PremiumReport]
    premiumAdjustments: [PremiumAdjustment]
  }

  type Mutation {
    addCreditUnion(input: CreditUnionInput!): CreditUnion
    addPremiumReport(input: PremiumReportInput!): PremiumReport
  }
`;
export default typeDefs;