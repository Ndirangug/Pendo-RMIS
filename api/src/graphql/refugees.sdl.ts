export const schema = gql`
  type Refugee {
    id: Int!
    email: String
    phone: String
    firstName: String!
    lastName: String!
    photo: String!
    sex: Sex!
    dateOfBirh: DateTime!
    Tent: Tent
    tentId: Int
    Transaction: [Transaction]!
  }

  enum Sex {
    MALE
    FEMALE
  }

  type Query {
    refugees: [Refugee!]! @requireAuth
    refugee(id: Int!): Refugee @requireAuth
  }

  input CreateRefugeeInput {
    email: String
    phone: String
    firstName: String!
    lastName: String!
    photo: String!
    sex: Sex!
    dateOfBirh: DateTime!
    tentId: Int
  }

  input UpdateRefugeeInput {
    email: String
    phone: String
    firstName: String
    lastName: String
    photo: String
    sex: Sex
    dateOfBirh: DateTime
    tentId: Int
  }

  type Mutation {
    createRefugee(input: CreateRefugeeInput!): Refugee! @requireAuth
    updateRefugee(id: Int!, input: UpdateRefugeeInput!): Refugee! @requireAuth
    deleteRefugee(id: Int!): Refugee! @requireAuth
  }
`
