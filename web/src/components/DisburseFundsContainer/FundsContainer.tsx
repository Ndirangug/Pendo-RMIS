import { Card, Box, Typography, Tabs, Tab } from '@mui/material'
import DisburseFundsForm from '../DisburseFundsForm/DisburseFundsForm'
import TransactionsCell from 'src/components/TransactionsCell/TransactionsCell'
import { useAuth } from '@redwoodjs/auth'
import ReceiveDonationForm from '../ReceiveDonationForm/ReceiveDonationForm'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          className="flex flex-col justify-center items-center"
          sx={{ p: 3 }}
        >
          {children}{' '}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const FundsContainer = () => {
  const [value, setValue] = React.useState(0)
  const { currentUser } = useAuth()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  console.log('current user: ', currentUser)

  return (
    <Card className="flex flex-col justify-center items-center px-16 py-10 mt-10">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Disburse Funds" {...a11yProps(0)} />
            <Tab label="Disbursement History" {...a11yProps(1)} />

            {currentUser.id == 1 && (
              <Tab label="Receive Donation" {...a11yProps(2)} />
            )}
            {currentUser.id == 1 && (
              <Tab label="Donation History" {...a11yProps(3)} />
            )}
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <DisburseFundsForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TransactionsCell adminId={currentUser.id} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ReceiveDonationForm />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TransactionsCell
            adminId={currentUser.id}
            transactionType="DONATION"
            showFromAndTo={false}
          />
        </TabPanel>
      </Box>
    </Card>
  )
}

export default FundsContainer
