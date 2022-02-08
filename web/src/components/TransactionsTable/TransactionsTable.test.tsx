import { render } from '@redwoodjs/testing/web'

import TransactionsTable from './TransactionsTable'

describe('TransactionsTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TransactionsTable />)
    }).not.toThrow()
  })
})
