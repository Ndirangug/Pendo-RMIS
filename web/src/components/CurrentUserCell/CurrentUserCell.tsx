import type { FindCurrentUserQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCurrentUserQuery($id: Int!) {
    user(id: $id) {
      id
      firstName
      lastName
      role
      accountBalance
      section {
        id
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  user,
  setUser,
  setBalance,
}: CellSuccessProps<FindCurrentUserQuery>) => {
  setUser(user)

  if (typeof setBalance === 'function') {
    setBalance(user.accountBalance)
  }
  return <></>
}
