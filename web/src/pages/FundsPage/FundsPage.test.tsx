import { render } from '@redwoodjs/testing/web'

import FundsPage from './FundsPage'

describe('FundsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FundsPage />)
    }).not.toThrow()
  })
})
