import { render } from '@redwoodjs/testing/web'

import UserInfoTile from './UserInfoTile'

describe('UserInfoTile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserInfoTile />)
    }).not.toThrow()
  })
})
