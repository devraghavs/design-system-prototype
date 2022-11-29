import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Progressbar from './Progressbar';

expect.extend(toHaveNoViolations);
describe('Progress component test', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Progressbar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Progressbar value={10} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Progressbar max={100} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Progress component render test', () => {
    render(
      <Progressbar className='progressbarclassname' dataTestId='xt-ui-kit-progressbar-component' />,
    );
    const dataTestid = screen.getByTestId('xt-ui-kit-progressbar-component');
    expect(dataTestid).toBeInTheDocument();
  });
  test('Progress component external classname test', () => {
    const { container } = render(<Progressbar dataTestId='xt-ui-kit-progressbar-component' />);
    expect(container.getElementsByClassName('progressbar').length).toBe(1);
  });
});
