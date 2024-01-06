import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button Tests', () => {
  test('button render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('clear button render', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    const button = screen.getByText('Test');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('clear');

    screen.debug();
  });
});
