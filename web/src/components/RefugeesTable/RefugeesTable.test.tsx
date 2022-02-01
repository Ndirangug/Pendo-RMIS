import { render } from '@redwoodjs/testing/web'

import RefugeesTable from './RefugeesTable'

describe('RefugeesTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RefugeesTable />)
    }).not.toThrow()
  })
})
