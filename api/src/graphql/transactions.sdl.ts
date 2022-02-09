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
  }

  enum TransactionType {
    ADMIN_TO_SECTION
    ADMIN_TO_INDIVIDUAL
  }

  type Query {
    transactions(adminId: Int, refugeeId: Int): [Transaction!]! @skipAuth #@requireAuth
    transaction(id: Int!): Transaction @skipAuth #@requireAuth
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
    createTransaction(input: CreateTransactionInput!): Transaction! @skipAuth #@requireAuth
    updateTransaction(id: Int!, input: UpdateTransactionInput!): Transaction!
      @requireAuth
    deleteTransaction(id: Int!): Transaction! @requireAuth
  }
`
