import type { TransactionsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import TransactionsTable from 'src/components/TransactionsTable/TransactionsTable'
import { Box } from '@mui/material'

export const QUERY = gql`
  query TransactionsQuery($adminId: Int, $refugeeId: Int) {
    transactions(adminId: $adminId, refugeeId: $refugeeId) {
      id
      admin {
        id
        firstName
        lastName
      }
      refugee {
        id
        firstName
        lastName
      }
      Section {
        id
        code
        admin {
          id
          firstName
          lastName
        }
      }
      transactionType
      amount
      createdAt
      ref
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

interface TransactionsCellSuccesseProps
  extends CellSuccessProps<TransactionsQuery> {
  showFromAndTo: boolean
}

export const Success = ({
  transactions,
  showFromAndTo = true,
}: TransactionsCellSuccesseProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <TransactionsTable
        showFromAndTo={showFromAndTo}
        transactions={transactions}
      />
    </Box>
  )
}
