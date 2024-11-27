const resolvers = {
Query: {
    creditUnions: () => [
      {
        id: "1",
        contractNumber: "CU001",
        creditUnionName: "Credit Union One",
        premiumReports: [],
        premiumAdjustments: [],
        singlePremiumCertificateReturns: [],
      },
    ],
    premiumReports: () => [
      {
        id: "1",
        productName: "Product1",
        reportPeriod: "Q1 2023",
        status: "Pending",
        lastUpdate: "2023-02-15",
        periodEnding: "2023-03-31",
        adjustmentTypeToTheCreditUnion: "Type A",
        comment: "Sample comment",
        totalBorrowerFees: 1000.0,
        cuRetailRate: 1.5,
        protectedLoanAmount: 50000.0,
        payRate: 2.5,
        premiumDue: 500.0,
        totalAmount: 1050.0,
      },
    ],
    premiumAdjustments: () => [],
  },
  Mutation: {
    addCreditUnion: (parent, { input }) => {
      const newCU = {
        id: Date.now().toString(),
        ...input,
        premiumReports: [],
        premiumAdjustments: [],
        singlePremiumCertificateReturns: [],
      };
      return newCU;
    },
    addPremiumReport: (parent, { input }) => {
      const newPR = {
        id: Date.now().toString(),
        ...input,
      };
      return newPR;
    },
  },
};
export default resolvers;