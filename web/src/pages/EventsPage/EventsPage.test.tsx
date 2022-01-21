import { render } from '@redwoodjs/testing/web'

import EventsPage from './EventsPage'

describe('EventsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventsPage />)
    }).not.toThrow()
  })
})
