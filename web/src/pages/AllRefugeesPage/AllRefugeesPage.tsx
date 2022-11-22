import { ArrowBack } from '@mui/icons-material'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageHeader from 'src/components/PageHeader/PageHeader'
import RefugeesCell from 'src/components/RefugeesCell/RefugeesCell'

const AllRefugeesPage = () => {
  return (
    <>
      <MetaTags title="PendoRefugees" description="PendoRefugees page" />

      <PageHeader title="Pendo Refugees" />

      <article className="page-content mt-10">
        <RefugeesCell />
      </article>
    </>
  )
}

export default AllRefugeesPage
