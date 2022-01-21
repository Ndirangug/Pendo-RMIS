import { render } from '@redwoodjs/testing/web'

import AllRefugeesPage from './AllRefugeesPage'

describe('AllRefugeesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllRefugeesPage />)
    }).not.toThrow()
  })
})
