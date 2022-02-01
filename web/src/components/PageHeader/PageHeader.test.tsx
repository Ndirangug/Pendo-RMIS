import { render } from '@redwoodjs/testing/web'

import PageHeader from './PageHeader'

describe('PageHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageHeader />)
    }).not.toThrow()
  })
})
