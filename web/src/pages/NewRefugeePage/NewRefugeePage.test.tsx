import { render } from '@redwoodjs/testing/web'

import NewRefugeePage from './NewRefugeePage'

describe('NewRefugeePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewRefugeePage />)
    }).not.toThrow()
  })
})
