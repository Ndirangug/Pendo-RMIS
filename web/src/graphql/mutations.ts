// web/src/pages/ContactPage/ContactPage.js

export const CREATE_REFUGEE = gql`
  mutation CreateRefugeeMutation($newRefugee: CreateRefugeeInput!) {
    createRefugee(input: $newRefugee) {
      id
      firstName
      lastName
      Tent {
        id
        code
        Section {
          id
          code
        }
      }
    }
  }
`

export const CREATE_TRANSACTION = gql`
  mutation CreateTransactionMutation(
    $createTransactionInput: CreateTransactionInput!
  ) {
    createTransaction(input: $createTransactionInput) {
      id
      amount
      transactionType
    }
  }
`
// ...
