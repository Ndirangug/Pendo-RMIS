//import MUIDataTable from 'mui-datatables'
import { DataGrid } from '@mui/x-data-grid'
import type { RefugeesQuery } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'
import { Card } from '@mui/material'

const RefugeesTable = ({ refugees }: CellSuccessProps<RefugeesQuery>) => {
  const columns = [
    { field: 'name', headerName: 'NAME', width: 280 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 250 },
    {
      field: 'sex',
      headerName: 'SEX',
      width: 90,
    },
    {
      field: 'section',
      headerName: 'SECTION',
      width: 120,
    },
    {
      field: 'tent',
      headerName: 'TENT',
      width: 120,
    },
    { field: 'dateRegistered', headerName: 'Date Registered', width: 250 },
  ]

  const rows = refugees.map((refugee) => ({
    id: refugee.id,
    name: `${refugee.firstName} ${refugee.lastName}`,
    dateOfBirth: refugee.dateOfBirth,
    sex: refugee.sex,
    section: refugee.Tent.Section.code,
    tent: refugee.Tent.code,
    dateRegistered: refugee.createdAt,

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

export default RefugeesTable
