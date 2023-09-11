import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';

describe('Sidebar', function() {
  test('with only first param', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar', () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId('toggle-button');
    expect(screen.getByTestId('toggle-button'));
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
