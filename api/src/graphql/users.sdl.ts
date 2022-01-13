export const schema = gql`
  type User {
    id: Int!
    email: String!
    phone: String!
    firstName: String!
    lastName: String!
    photo: String!
    role: Role!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    section: Section
    Transaction: [Transaction]!
  }

  enum Role {
    CAMP_ADMIN
    SECTION_ADMIN
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    phone: String!
    firstName: String!
    lastName: String!
    photo: String!
    role: Role!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    email: String
    phone: String
    firstName: String
    lastName: String
    photo: String
    role: Role
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
