export const schema = gql`
  type Refugee {
    id: Int!
    email: String
    phone: String
    firstName: String!
    lastName: String!
    photo: String!
    code: String!
    country: String!
    sex: Sex!
    dateOfBirth: DateTime!
    Tent: Tent
    createdAt: DateTime!
    tentId: Int
    Transaction: [Transaction]!
  }

  enum Sex {
    MALE
    FEMALE
  }

  type Query {
    refugees: [Refugee!]! @skipAuth #@requireAuth
    refugee(id: Int!): Refugee @skipAuth #@requireAuth
    refugeesInSection(sectionId: Int!): [Refugee!]! @skipAuth
  }

  input CreateRefugeeInput {
    email: String
    phone: String
    firstName: String!
    lastName: String!
    photo: String!
    sex: Sex!
    code: String!
    country: String!
    dateOfBirth: DateTime!
    tentId: Int
  }

  input UpdateRefugeeInput {
    email: String
    phone: String
    firstName: String
    lastName: String
    code: String!
    country: String!
    photo: String
    sex: Sex
    dateOfBirth: DateTime
    tentId: Int
  }

  type Mutation {
    createRefugee(input: CreateRefugeeInput!): Refugee! @skipAuth #@requireAuth
    updateRefugee(id: Int!, input: UpdateRefugeeInput!): Refugee! @requireAuth
    deleteRefugee(id: Int!): Refugee! @requireAuth
  }
`
