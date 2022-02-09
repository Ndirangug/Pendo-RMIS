import { Box, Button } from '@mui/material'
import { Refugee } from 'types/graphql'
import { Person, Print } from '@mui/icons-material'
import { fontSize } from '@mui/system'
import TransactionsCell from 'src/components/TransactionsCell/TransactionsCell'

const RefugeeFundsAllocationHistory = ({ refugee }: { refugee: Refugee }) => {
  return (
    <Box sx={{ width: 'max-content' }}>
      <div className="px-10 pt-16">
        <h1 className="prose prose-xl prose-headings:h-16 text-center font-bold">
          Funds Alocation History
        </h1>

        <div className="flex justify-between mt-6">
          <div className="profile flex content-start items-center mr-9">
            <Person className="prose" sx={{ fontSize: '3rem' }} />
            <div className="flex flex-col">
              <h4 className="prose prose-p font-semibold">{`${refugee.firstName} ${refugee.lastName}`}</h4>
              <p className="prose prose-sm italic"># {refugee.id}</p>
            </div>
          </div>
        </div>

        <div className="transactions mt-8">
          <TransactionsCell refugeeId={refugee.id} showFromAndTo={false} />
        </div>
      </div>
    </Box>
  )
}

export default RefugeeFundsAllocationHistory
