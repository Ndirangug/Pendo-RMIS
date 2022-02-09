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
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FNairobi&title=Pendo%20Refugee%20Camp%20Events&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%230B8043"
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
