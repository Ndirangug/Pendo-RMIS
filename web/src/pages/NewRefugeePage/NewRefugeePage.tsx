import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import NewRefugeeForm from 'src/components/NewRefugeeForm/NewRefugeeForm'
import PageHeader from 'src/components/PageHeader/PageHeader'

const NewRefugeePage = () => {
  return (
    <>
      <MetaTags title="NewRefugee" description="NewRefugee page" />

      <PageHeader title="New Refugee" />

      <article className="page-content">
        <NewRefugeeForm/>
      </article>
    </>
  )
}

export default NewRefugeePage
