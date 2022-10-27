import type { TransactionsQuery, TransactionType } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import TransactionsTable from 'src/components/TransactionsTable/TransactionsTable'
import { Box } from '@mui/material'

let transactionType: TransactionType

export const beforeQuery = (props) => {
  console.log('before query props: ', props)
  transactionType = props.transactionType

  QUERY = transactionType === 'DONATION' ? donationsQuery : tranactionsQuery

  return {
    variables: props,
  }
}

const tranactionsQuery = gql`
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
      donor
    }
  }
`

const donationsQuery = gql`
  query DonationsQuery {
    donations {
      id
      donor
      transactionType
      amount
      createdAt
      ref
    }
  }
`

export let QUERY = tranactionsQuery //=
//transactionType === 'DONATION' ? donationsQuery : tranactionsQuery

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

interface TransactionsCellSuccesseProps
  extends CellSuccessProps<TransactionsQuery> {
  showFromAndTo: boolean
  transactionType: string
}

export const Success = ({
  transactions,
  showFromAndTo = true,
  transactionType = '',
}: TransactionsCellSuccesseProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <TransactionsTable
        showFromAndTo={showFromAndTo}
        transactions={transactions}
        transactionType={transactionType}
      />
    </Box>
  )
}
