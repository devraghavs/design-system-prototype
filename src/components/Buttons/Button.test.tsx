import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Icons } from '../Iconography/iconsEnum';
import Button from './Button';

expect.extend(toHaveNoViolations);

describe('Test Button component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Button />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Button>test</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Button icon='' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Button disabled={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Button size='small' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Button type='button' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Button iconSize='12' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Button ariaLabel='button' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('Button component render test', () => {
    render(
      <Button variant='solid' size='small' disabled={false}>
        test button
      </Button>,
    );
    const button = screen.getByTestId('xt-ui-kit-button-component');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('solid');
  });
  test('Button component render type test', () => {
    render(
      <Button
        variant='iconbutton'
        size='medium'
        disabled={true}
        type='button'
        icon={Icons.cross}
        iconcolor='black'
        iconSize='11'
      >
        test button
      </Button>,
    );
    const button = screen.getByTestId('xt-ui-kit-button-component');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('iconbutton');
  });
  test('Button component render null test', () => {
    render(
      <Button
        variant='iconbutton'
        size='medium'
        disabled={true}
        type='button'
        icon={Icons.cross}
        isSpaceRequired={true}
        iconcolor='black'
        iconSize='11'
        dataTestId=''
      >
        test button
      </Button>,
    );
    const button = screen.getByTestId('');

    expect(button).not.toBe(null);
    expect(button).toHaveClass('iconbutton');
  });
  test('Button component render hollow test', () => {
    render(<Button variant='hollow'>test button</Button>);
    const button = screen.getByTestId('xt-ui-kit-button-component');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('hollow');
  });
  test('Button component render nothing test', () => {
    render(<Button />);
    const button = screen.queryByTestId('xt-ui-kit-button-component');
    expect(button).not.toBeInTheDocument();
  });
  test('Button component render className test', () => {
    render(<Button className='className'>test button</Button>);
    const button = screen.getByTestId('xt-ui-kit-button-component');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('className');
  });
});
