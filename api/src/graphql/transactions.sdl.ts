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
  }

  enum TransactionType {
    ADMIN_TO_SECTION
    ADMIN_TO_INDIVIDUAL
  }

  type Query {
    transactions: [Transaction!]! @requireAuth
    transaction(id: Int!): Transaction @requireAuth
  }

  input CreateTransactionInput {
    amount: Int!
    transactionType: TransactionType!
    refugeeId: Int
    adminId: Int
    sectionId: Int
  }

  input UpdateTransactionInput {
    amount: Int
    transactionType: TransactionType
    refugeeId: Int
    adminId: Int
    sectionId: Int
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction! @requireAuth
    updateTransaction(id: Int!, input: UpdateTransactionInput!): Transaction!
      @requireAuth
    deleteTransaction(id: Int!): Transaction! @requireAuth
  }
`
