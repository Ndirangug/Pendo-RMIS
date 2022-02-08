import type { CellSuccessProps } from '@redwoodjs/web'
import type { TransactionsQuery } from 'types/graphql'
import { Card } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const TransactionsTable = ({
  transactions,
}: CellSuccessProps<TransactionsQuery>) => {
  const columns = [
    { field: 'date', headerName: 'DATE', width: 280 },
    { field: 'from', headerName: 'FROM', width: 250 },
    {
      field: 'to',
      headerName: 'TO',
      width: 250,
    },
    {
      field: 'amount',
      headerName: 'AMOUNT',
      width: 120,
    },
  ]

  const rows = transactions.map((transaction) => ({
    id: transaction.id,
    amount: transaction.amount,
    date: transaction.createdAt,
    from: transaction.admin.firstName + ' ' + transaction.admin.lastName,
    to:
      transaction.transactionType === 'ADMIN_TO_SECTION'
        ? `Section ${transaction.Section.code}`
        : `${transaction.refugee.firstName} ${transaction.refugee.lastName}`,
  }))

  return (
    <Card>
      <DataGrid
        rowsPerPageOptions={[15]}
        autoHeight
        rows={rows}
        columns={columns}

      />
    </Card>
  )
}

export default TransactionsTable
