import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('sidebar render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar', () => {
    componentRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('toggle_button');

    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(toggleButton);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
