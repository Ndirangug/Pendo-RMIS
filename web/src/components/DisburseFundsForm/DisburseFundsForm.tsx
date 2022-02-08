import { Box, Typography, TextField, MenuItem } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React, { useState, useEffect, useRef, useReducer } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { User } from 'types/graphql'
import CurrentUserCell from '../CurrentUserCell/CurrentUserCell'
import SectionAdminsCell from '../SectionAdminsCell/SectionAdminsCell'
import RefugeesInSectionCell from '../RefugeesInSectionCell/RefugeesInSectionCell'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { CREATE_TRANSACTION } from 'src/graphql/mutations'

const DisburseFundsForm = () => {
  const [amount, setAmount] = useState(0)
  const [recepientId, setRecepientId] = useState(null)
  const [recepients, setRecepients] = useState([])
  const [user, setUser] = useState({})
  const [balance, setBalance] = useState(0)
  const [_, forceUpdate] = useReducer((x) => x + 1, 0)

  const [createTransaction, { loading, error }] = useMutation(
    CREATE_TRANSACTION,
    {
      onCompleted: () => {
        setBalance(balance - amount)
        forceUpdate()
        toast.success(`Kshs ${amount} successfully disbursed`)
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

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

  const initiateTransaction = async () => {
    console.log('init transaction')
    console.log('recepientId ' + recepientId)

    console.log('adminId ' + user.id)

    const result = await createTransaction({
      variables: {
        createTransactionInput: {
          amount,
          transactionType:
            user.role == 'CAMP_ADMIN'
              ? 'ADMIN_TO_SECTION'
              : 'ADMIN_TO_INDIVIDUAL',
          adminId: user.id,
          sectionId: user.role === 'CAMP_ADMIN' ? recepientId : null,
          refugeeId: user.role === 'CAMP_ADMIN' ? null : recepientId,
        },
      },
    })

    console.log(result)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Toaster />
      <CurrentUserCell
        id={currentUser.id}
        setUser={setUser}
        setBalance={setBalance}
      />

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
        {balance}
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
          error={amount > user.accountBalance}
          helperText={
            amount > user.accountBalance
              ? 'Account Balance has to be greater than amount to send'
              : null
          }
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
            <MenuItem
              key={recepient.id}
              value={
                recepient.role === 'SECTION_ADMIN'
                  ? recepient.section.id
                  : recepient.id
              }
            >
              {recepient.firstName} {recepient.lastName}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <LoadingButton
        loading={loading}
        onClick={initiateTransaction}
        disabled={amount > user.accountBalance}
        variant="contained"
      >
        SEND
      </LoadingButton>
    </div>
  )
}

export default DisburseFundsForm
