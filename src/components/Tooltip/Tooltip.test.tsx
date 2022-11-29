import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Tooltip from './Tooltip';

expect.extend(toHaveNoViolations);

describe('Test tooltip component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Tooltip text={''} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Tooltip text='hi' trigger='hi' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('tooltip component render test', () => {
    render(<Tooltip text='Testing' dataTestId='xt-ui-kit-tooltip-component' />);
    const tooltip = screen.getByTestId('xt-ui-kit-tooltip-component');
    expect(tooltip).toBeInTheDocument();
  });
  test('tooltip component not to be render', () => {
    render(<Tooltip text='Testing' />);
    const tooltip = screen.getByTestId('xt-ui-kit-tooltip-component');
    expect(tooltip).not.toBe(null);
  });
  test('tooltip component render on click', async () => {
    render(
      <Tooltip
        text='Message goes here'
        dataTestId='xt-ui-kit-tooltip-component'
        trigger='Click me'
        clickAble={true}
      />,
    );

    const tooltip = screen.getByTestId('xt-ui-kit-tooltip-component');
    screen.debug(tooltip);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument;
    await userEvent.click(button);
    screen.debug(button);
  });
});
