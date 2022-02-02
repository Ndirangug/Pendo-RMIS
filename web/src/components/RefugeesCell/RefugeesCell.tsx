import type { RefugeesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import RefugeesTable from '../RefugeesTable/RefugeesTable'

export const QUERY = gql`
  query RefugeesQuery {
    refugees {
      id
      phone
      firstName
      lastName
      dateOfBirth
      createdAt
      sex
      Tent {
        id
        code
        Section {
          code
          id
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ refugees }: CellSuccessProps<RefugeesQuery>) => {
  return (
    <>
      <RefugeesTable refugees={refugees} />
    </>
  )
}
