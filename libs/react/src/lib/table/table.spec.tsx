import { render, screen } from '@testing-library/react'
import Table from './table'

describe('Component: Table', () => {
  it('Should render', () => {
    render(<Table />)

    expect(screen.getByRole('table')).tobeVisible()
  })
})
