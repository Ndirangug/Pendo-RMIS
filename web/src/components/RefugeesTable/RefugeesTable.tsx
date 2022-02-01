//import MUIDataTable from 'mui-datatables'
import { DataGrid } from '@mui/x-data-grid'
import type { RefugeesQuery } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'

const RefugeesTable = ({ refugees }: CellSuccessProps<RefugeesQuery>) => {
  const columns = [
    { field: 'name', headerName: 'NAME', width: 130 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 130 },
    {
      field: 'sex',
      headerName: 'SEX',
      width: 90,
    },
    {
      field: 'section',
      headerName: 'SECTION',
      width: 160,
    },
    { field: 'dateRegistered', headerName: 'Date Registered', width: 130 },
  ]

  const rows = refugees.map((refugee) => ({
    id: refugee.id,
    name: `${refugee.firstName} ${refugee.lastName}`,
    dateOfBirth: refugee.dateOfBirth,
    sex: refugee.sex,
    section: refugee.Tent.Section.code,
    dateRegistered: refugee.createdAt,
  }))

  return <DataGrid rows={rows} columns={columns} checkboxSelection />
}

export default RefugeesTable
