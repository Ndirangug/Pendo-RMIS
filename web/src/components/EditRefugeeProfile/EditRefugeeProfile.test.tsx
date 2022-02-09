import { render } from '@redwoodjs/testing/web'

import EditRefugeeProfile from './EditRefugeeProfile'

describe('EditRefugeeProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditRefugeeProfile />)
    }).not.toThrow()
  })
})
