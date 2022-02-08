export const schema = gql`
  type User {
    id: Int!
    email: String!
    phone: String!
    firstName: String!
    lastName: String!
    photo: String!
    role: Role!
    accountBalance: Float!
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

  union TransactionRecepient = User | Refugee

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
    # eligibleRecepients(adminId: Int!): [TransactionRecepient!] @skipAuth
    sectionAdmins: [User!]! @skipAuth
  }

  input CreateUserInput {
    email: String!
    phone: String!
    firstName: String!
    lastName: String!
    photo: String!
    role: Role!
    accountBalance: Float
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
    accountBalance: Float
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth #@requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
