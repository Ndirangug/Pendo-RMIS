import { Box, Typography, TextField, MenuItem, Button } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { User } from 'types/graphql'
import CurrentUserCell from '../CurrentUserCell/CurrentUserCell'
import SectionAdminsCell from '../SectionAdminsCell/SectionAdminsCell'
import RefugeesInSectionCell from '../RefugeesInSectionCell/RefugeesInSectionCell'

const DisburseFundsForm = () => {
  const [amount, setAmount] = useState(0)
  const [recepientId, setRecepientId] = useState(null)
  const [recepients, setRecepients] = useState([])
  const [user, setUser] = useState({})

  const { currentUser } = useAuth()
  console.log('current user')
  console.log(currentUser)

  const [formState, setFormState] = useState({
    selectedRecepients: [],
  })

  const handleFieldChange = (event) => {
    console.log(event)
    event.persist()
    setFormState((formState) => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    }))
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <CurrentUserCell id={currentUser.id} setUser={setUser} />

      {user.role === 'CAMP_ADMIN' ? (
        <SectionAdminsCell setRecepients={setRecepients} />
      ) : (
        <RefugeesInSectionCell
          sectionId={user.section === undefined ? 0 : user.section.id}
          setRecepients={setRecepients}
        />
      )}

      <Typography fontWeight={600} sx={{ fontSize: '3rem' }}>
        <span className="prose prose-sm">Kshs</span>
        1,000,000
      </Typography>
      <Typography fontSize="0.9rem" fontWeight={500}>
        Available
      </Typography>

      <div className="flex mt-16 mb-8">
        <TextField
          sx={{ margin: '6px 8px' }}
          label="Amount"
          type="number"
          variant="outlined"
          onChange={(event) => {
            setAmount(parseFloat(event.target.value))
          }}
        />

        <TextField
          select
          value={recepientId}
          sx={{ margin: '6px 8px' }}
          label="Recepient"
          variant="outlined"
          onChange={(event) => setRecepientId(event.target.value)}
          // SelectProps={{
          //   multiple: true,
          //   value: formState.selectedRecepients,
          //   onChange: handleFieldChange,
          // }}
        >
          {recepients.map((recepient) => (
            <MenuItem key={recepient.id} value={recepient.id}>
              {recepient.firstName} {recepient.lastName}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button variant="contained">SEND</Button>
    </div>
  )
}

export default DisburseFundsForm
