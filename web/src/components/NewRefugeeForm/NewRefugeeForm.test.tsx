import { render } from '@redwoodjs/testing/web'

import NewRefugeeForm from './NewRefugeeForm'

describe('NewRefugeeForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewRefugeeForm />)
    }).not.toThrow()
  })
})
