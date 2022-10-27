import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { ArrowBack } from '@mui/icons-material'
import PageHeader from 'src/components/PageHeader/PageHeader'
import FundsContainer from 'src/components/DisburseFundsContainer/FundsContainer'

const FundsPage = () => {
  return (
    <>
      <MetaTags title="Funds" description="Funds page" />

      <PageHeader title="Funds" />

      <article className="page-content">
        <FundsContainer />
      </article>
    </>
  )
}

export default FundsPage
