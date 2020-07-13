import { render } from '@redwoodjs/testing'

import PrettyHeader from './PrettyHeader'

describe('PrettyHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrettyHeader />)
    }).not.toThrow()
  })
})
