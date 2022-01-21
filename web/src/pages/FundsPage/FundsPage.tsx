import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FundsPage = () => {
  return (
    <>
      <MetaTags title="Funds" description="Funds page" />

      <h1>FundsPage</h1>
      <p>
        Find me in <code>./web/src/pages/FundsPage/FundsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>funds</code>, link to me with `
        <Link to={routes.funds()}>Funds</Link>`
      </p>
    </>
  )
}

export default FundsPage
