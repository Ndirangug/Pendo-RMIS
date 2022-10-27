export const schema = gql`
  type Transaction {
    id: Int!
    amount: Int!
    transactionType: TransactionType!
    createdAt: DateTime!
    refugee: Refugee
    refugeeId: Int
    admin: User
    adminId: Int
    Section: Section
    sectionId: Int
    ref: String
    donor: String
  }

  enum TransactionType {
    ADMIN_TO_SECTION
    ADMIN_TO_INDIVIDUAL
    DONATION
  }

  type Query {
    transactions(adminId: Int, refugeeId: Int): [Transaction!]! @skipAuth #@requireAuth
    transaction(id: Int!): Transaction @skipAuth #@requireAuth
    donations: [Transaction!]! @skipAuth #@requireAuth
  }

  input CreateTransactionInput {
    amount: Int!
    transactionType: TransactionType!
    refugeeId: Int
    adminId: Int
    sectionId: Int
    donor: String
  }

  input ReceiveDonationInput {
    amount: Int!
    donor: String
    adminId: Int
  }

  input UpdateTransactionInput {
    amount: Int
    transactionType: TransactionType
    refugeeId: Int
    adminId: Int
    sectionId: Int
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction! @skipAuth #@requireAuth
    updateTransaction(id: Int!, input: UpdateTransactionInput!): Transaction!
      @requireAuth
    deleteTransaction(id: Int!): Transaction! @requireAuth
    receiveDonation(input: ReceiveDonationInput!): Transaction! @skipAuth
  }
`
