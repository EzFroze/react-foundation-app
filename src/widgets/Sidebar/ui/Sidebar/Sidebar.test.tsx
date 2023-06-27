import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation'

describe('Sidebar', function() {
  test('with only first param', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle sidebar', () => {
    renderWithTranslation(<Sidebar />)
    const toggleButton = screen.getByTestId('toggle-button')
    expect(screen.getByTestId('toggle-button'))
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
