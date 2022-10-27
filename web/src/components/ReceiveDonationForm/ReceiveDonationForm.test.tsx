import { render } from '@redwoodjs/testing/web'

import ReceiveDonationForm from './ReceiveDonationForm'

describe('ReceiveDonationForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReceiveDonationForm />)
    }).not.toThrow()
  })
})
