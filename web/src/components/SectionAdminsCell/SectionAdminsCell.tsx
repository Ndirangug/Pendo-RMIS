import type { SectionAdminsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query SectionAdminsQuery {
    sectionAdmins {
      id
      firstName
      lastName
      role
      section {
        id
        code
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
  sectionAdmins,
  setRecepients,
}: CellSuccessProps<SectionAdminsQuery>) => {
  setRecepients(sectionAdmins)
  return <></>
}
