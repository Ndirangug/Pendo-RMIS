import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { ArrowBack } from '@mui/icons-material'
import PageHeader from 'src/components/PageHeader/PageHeader'
import DisburseFundsContainer from 'src/components/DisburseFundsContainer/DisburseFundsContainer'

const FundsPage = () => {
  return (
    <>
      <MetaTags title="Funds" description="Funds page" />

      <PageHeader title="Disburse Funds" />

      <article className="page-content">
        <DisburseFundsContainer/>
      </article>
    </>
  )
}

export default FundsPage
