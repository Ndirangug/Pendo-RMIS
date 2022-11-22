import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { ArrowBack } from '@mui/icons-material'
import PageHeader from 'src/components/PageHeader/PageHeader'

const EventsPage = () => {
  return (
    <>
      <MetaTags title="Events" description="Events page" />

      <PageHeader title="Events" />

      <article className="page-content flex justify-center items-center z-10">
        <iframe
          title="events"
          src="https://calendar.google.com/calendar/embed?src=5a89c0061962d6943bbf2cf8319ed2f0ba7334b84622ee0bf84bcaab752f77c6%40group.calendar.google.com&ctz=Africa%2FNairobi"
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </article>
    </>
  )
}

export default EventsPage
