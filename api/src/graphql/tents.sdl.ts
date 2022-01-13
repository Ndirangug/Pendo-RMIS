export const schema = gql`
  type Tent {
    id: Int!
    code: String!
    refugees: [Refugee]!
    Section: Section
    sectionId: Int
  }

  type Query {
    tents: [Tent!]! @requireAuth
    tent(id: Int!): Tent @requireAuth
  }

  input CreateTentInput {
    code: String!
    sectionId: Int
  }

  input UpdateTentInput {
    code: String
    sectionId: Int
  }

  type Mutation {
    createTent(input: CreateTentInput!): Tent! @requireAuth
    updateTent(id: Int!, input: UpdateTentInput!): Tent! @requireAuth
    deleteTent(id: Int!): Tent! @requireAuth
  }
`
