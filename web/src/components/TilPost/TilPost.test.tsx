import { render } from '@redwoodjs/testing/web'

import TilPost from './TilPost'

describe('TilPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TilPost />)
    }).not.toThrow()
  })
})
