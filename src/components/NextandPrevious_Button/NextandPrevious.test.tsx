import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import NextandPreviousButton from './NextandPrevious';

expect.extend(toHaveNoViolations);

describe('To test next and previous button', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<NextandPreviousButton />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<NextandPreviousButton icon={''} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<NextandPreviousButton Iconcolor='' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<NextandPreviousButton size='11' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Button component render test', () => {
    const { container } = render(
      <NextandPreviousButton
        icon={'left'}
        Iconcolor={'white'}
        disabled={false}
        className='className'
      />,
    );
    const nextandpreviousbutton = screen.getByTestId('xt-ui-kit-nextandprevious-component');

    expect(nextandpreviousbutton).toBeInTheDocument();
    expect(container.getElementsByClassName('className').length).toBe(1);
  });
  test('Button component render test', () => {
    render(
      <NextandPreviousButton
        icon={'right'}
        Iconcolor={'white'}
        disabled={false}
        className='className'
        size='11'
      />,
    );
    const nextandpreviousbutton = screen.getByTestId('xt-ui-kit-nextandprevious-component');

    expect(nextandpreviousbutton).toBeInTheDocument();
  });
  test('Button component render  className test', () => {
    render(
      <NextandPreviousButton
        icon={'left'}
        Iconcolor={'white'}
        disabled={true}
        className='className'
        size='11'
        dataTestId='xt-ui-kit-nextandprevious-component'
      />,
    );
    const nextandpreviousbutton = screen.getByTestId('xt-ui-kit-nextandprevious-component');
    expect(nextandpreviousbutton).toHaveClass('className');
    expect(nextandpreviousbutton).not.toBe(null);
  });
  test('Button component render test', () => {
    render(<NextandPreviousButton />);
    const nextandpreviousbutton = screen.getByTestId('xt-ui-kit-nextandprevious-component');
    expect(nextandpreviousbutton).toBeInTheDocument();
  });
  test('Button component render test', () => {
    render(<NextandPreviousButton />);
    const nextandpreviousbutton = screen.getByTestId('xt-ui-kit-nextandprevious-component');
    expect(nextandpreviousbutton).toBeInTheDocument();
  });
});
