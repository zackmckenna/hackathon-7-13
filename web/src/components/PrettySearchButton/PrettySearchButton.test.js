import { render } from '@redwoodjs/testing'

import PrettySearchButton from './PrettySearchButton'

describe('PrettySearchButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrettySearchButton />)
    }).not.toThrow()
  })
})
