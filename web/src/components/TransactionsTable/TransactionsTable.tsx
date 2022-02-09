import type { CellSuccessProps } from '@redwoodjs/web'
import type { TransactionsQuery } from 'types/graphql'
import { Card } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

interface TransactionsTableProps extends CellSuccessProps<TransactionsQuery> {
  showFromAndTo: boolean
}

const TransactionsTable = ({
  transactions,
  showFromAndTo = true,
}: TransactionsTableProps) => {
  const columns = [
    { field: 'date', headerName: 'DATE', width: 250 },
    { field: 'ref', headerName: 'REF', width: 280 },

    {
      field: 'amount',
      headerName: 'AMOUNT',
      width: 120,
    },
  ]

  if (showFromAndTo) {
    columns.push(
      { field: 'from', headerName: 'FROM', width: 250 },
      {
        field: 'to',
        headerName: 'TO',
        width: 250,
      }
    )
  }

  const rows = transactions.map((transaction) => ({
    id: transaction.id,
    amount: transaction.amount,
    date: new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'medium',
    }).format(new Date(transaction.createdAt)),
    ref: transaction.ref,
    from: transaction.admin.firstName + ' ' + transaction.admin.lastName,
    to:
      transaction.transactionType === 'ADMIN_TO_SECTION'
        ? `Section ${transaction.Section.code}`
        : `${transaction.refugee.firstName} ${transaction.refugee.lastName}`,
  }))
  console.log('refugee')
  console.log(transactions[0])
  return (
    <Card>
      <DataGrid
        rowsPerPageOptions={[15]}
        autoHeight
        rows={rows}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        componentProps={{
          toolbar: {
            printOptions: {
              fileName: showFromAndTo
                ? `Refugee Transactions`
                : `${transactions[0].refugee.firstName} ${transactions[0].refugee.lastName} Transactions`,
            },
          },
        }}
      />
    </Card>
  )
}

export default TransactionsTable
