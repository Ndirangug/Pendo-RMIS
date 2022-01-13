export const schema = gql`
  type Section {
    id: Int!
    code: String!
    tens: [Tent]!
    admin: User!
    adminId: Int!
    Transaction: [Transaction]!
  }

  type Query {
    sections: [Section!]! @requireAuth
    section(id: Int!): Section @requireAuth
  }

  input CreateSectionInput {
    code: String!
    adminId: Int!
  }

  input UpdateSectionInput {
    code: String
    adminId: Int
  }

  type Mutation {
    createSection(input: CreateSectionInput!): Section! @requireAuth
    updateSection(id: Int!, input: UpdateSectionInput!): Section! @requireAuth
    deleteSection(id: Int!): Section! @requireAuth
  }
`
