import { render } from '@redwoodjs/testing'

import PrettyInput from './PrettyInput'

describe('PrettyInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrettyInput />)
    }).not.toThrow()
  })
})
