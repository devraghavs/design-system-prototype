import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import InfoStrip from './Infostrip';

expect.extend(toHaveNoViolations);

describe('Test InfoStrip component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<InfoStrip />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<InfoStrip infostripcontent='hello' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Infostrip component render test', () => {
    render(<InfoStrip className='className' infostripcontent='hello' />);
    const infostrip = screen.getByTestId('xt-ui-kit-infostrip-component');

    expect(infostrip).toBeInTheDocument();
    expect(infostrip).toHaveClass('className');
    expect(infostrip).not.toBe('null');
  });
  test('Infostrip component  render className  test', () => {
    render(<InfoStrip />);
    const infostrip = screen.getByTestId('xt-ui-kit-infostrip-component');

    expect(infostrip).toBeInTheDocument();
  });
  test('Infostrip component  render className  test', () => {
    render(
      <InfoStrip
        infostripcontent='hi'
        className='className'
        dataTestId='xt-ui-kit-infostrip-component'
      />,
    );
    const infostrip = screen.getByTestId('xt-ui-kit-infostrip-component');

    expect(infostrip).toBeInTheDocument();
    expect(infostrip).not.toBe(null);
  });
});
