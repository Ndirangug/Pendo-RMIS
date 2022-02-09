import { render } from '@redwoodjs/testing/web'

import RefugeeFundsAllocationHistory from './RefugeeFundsAllocationHistory'

describe('RefugeeFundsAllocationHistory', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RefugeeFundsAllocationHistory />)
    }).not.toThrow()
  })
})
