//import MUIDataTable from 'mui-datatables'
import {
  DataGrid,
  GridToolbar,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarContainer,
} from '@mui/x-data-grid'
import type { RefugeesQuery } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'
import { Card, Box, IconButton, Drawer } from '@mui/material'
import { History } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import RefugeeFundsAllocationHistory from 'src/components/RefugeeFundsAllocationHistory/RefugeeFundsAllocationHistory'
import EditRefugeeProfile from 'src/components/EditRefugeeProfile/EditRefugeeProfile'

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
      <Box sx={{ ml: '8em', fontWeight: 600 }}>Pendo Refugee Camp Refugees</Box>
    </GridToolbarContainer>
  )
}

const RefugeesTable = ({ refugees }: CellSuccessProps<RefugeesQuery>) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerComponent, setDrawerComponent] = useState(<h1>drawer</h1>)

  const openEditor = (refugee) => {
    console.log('open editor', refugee.id)
    setDrawerComponent(<EditRefugeeProfile refugee={refugee} />)
    setDrawerOpen(true)
  }
  const openTransactionsHistoryView = (refugee) => {
    console.log('open transactions history view', refugee.id)
    setDrawerComponent(<RefugeeFundsAllocationHistory refugee={refugee} />)
    setDrawerOpen(true)
  }

  const columns = [
    { field: 'name', headerName: 'NAME', width: 240 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 200 },
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
    {
      field: 'code',
      headerName: 'REFUGEE CODE',
      width: 150,
    },
    {
      field: 'country',
      headerName: 'COUNTRY',
      width: 150,
    },
    { field: 'dateRegistered', headerName: 'Date Registered', width: 200 },

    {
      field: 'history',
      headerName: 'Transactions History',
      width: 200,
      renderCell: (params) => (
        <Box>
          <IconButton onClick={() => openTransactionsHistoryView(params.value)}>
            <History />
          </IconButton>
        </Box>
      ),
    },
  ]

  const rows = refugees.map((refugee) => ({
    id: refugee.id,
    name: `${refugee.firstName} ${refugee.lastName}`,
    dateOfBirth: new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
    }).format(new Date(refugee.dateOfBirth)),
    sex: refugee.sex,
    code: refugee.code,
    country: refugee.country,
    section: refugee.Tent.Section.code,
    tent: refugee.Tent.code,
    dateRegistered: new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
    }).format(new Date(refugee.createdAt)),
    history: refugee,
  }))

  return (
    <>
      <React.Fragment key={'right'}>
        <Drawer
          anchor={'right'}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          {drawerComponent}
        </Drawer>
      </React.Fragment>

      <Card>
        <DataGrid
          rowsPerPageOptions={[15]}
          autoHeight
          rows={rows}
          columns={columns}
          components={{ Toolbar: CustomToolbar }}
          componentsProps={{ toolbar: { printOptions: { hideHeader: true } } }}
          sx={{
            '@media print': {
              body: { backgroundColor: 'rgba(0, 0, 0, 0.87)' },
            },
          }}
        />
      </Card>
    </>
  )
}

export default RefugeesTable
