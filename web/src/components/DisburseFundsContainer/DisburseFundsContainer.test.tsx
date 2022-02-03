import { render } from '@redwoodjs/testing/web'

import DisburseFundsContainer from './DisburseFundsContainer'

describe('DisburseFundsContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisburseFundsContainer />)
    }).not.toThrow()
  })
})
