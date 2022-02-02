import { ArrowBack } from '@mui/icons-material'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageHeader from 'src/components/PageHeader/PageHeader'
import RefugeesCell from 'src/components/RefugeesCell/RefugeesCell'

const AllRefugeesPage = () => {
  return (
    <>
      <MetaTags title="AllRefugees" description="AllRefugees page" />

      <PageHeader title="All Refugees" />

      <article className="page-content mt-10">
        <RefugeesCell />
      </article>
    </>
  )
}

export default AllRefugeesPage
