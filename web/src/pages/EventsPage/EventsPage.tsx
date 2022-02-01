import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { ArrowBack } from '@mui/icons-material'
import PageHeader from 'src/components/PageHeader/PageHeader'

const EventsPage = () => {
  return (
    <>
      <MetaTags title="Events" description="Events page" />

      <PageHeader title="Events" />

      <article className="page-content"></article>
    </>
  )
}

export default EventsPage
