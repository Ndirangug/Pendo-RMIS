import type { FindRefugeesInSectionQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindRefugeesInSectionQuery($sectionId: Int!) {
    refugeesInSection(sectionId: $sectionId) {
      id
      firstName
      lastName
      Tent {
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
  refugeesInSection,
  setRecepients,
}: CellSuccessProps<FindRefugeesInSectionQuery>) => {
  setRecepients(refugeesInSection)

  return <></>
}
