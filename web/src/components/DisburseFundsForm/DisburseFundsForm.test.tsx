import { render } from '@redwoodjs/testing/web'

import DisburseFundsForm from './DisburseFundsForm'

describe('DisburseFundsForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisburseFundsForm />)
    }).not.toThrow()
  })
})
