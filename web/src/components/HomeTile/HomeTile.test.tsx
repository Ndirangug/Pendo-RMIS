import { render } from '@redwoodjs/testing/web'

import HomeTile from './HomeTile'

describe('HomeTile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeTile />)
    }).not.toThrow()
  })
})
