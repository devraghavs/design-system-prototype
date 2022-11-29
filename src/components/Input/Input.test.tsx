import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Input from './Input';

expect.extend(toHaveNoViolations);

describe('Test Input component', () => {
  test('render Input', () => {
    render(<Input />);
    const testid = screen.getByTestId('xt-ui-kit-input-component');
    expect(testid).toBeInTheDocument();
    expect(testid).toHaveAttribute('type', 'text');
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Input />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Input placeholder='input' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Input required={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Input disabled={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Input
        name='hello'
        type='search'
        label='label'
        error='error'
        arialabel='search'
        defaultValue='defaultValue'
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('pass classname,name as prop test', () => {
    const { container } = render(<Input className='inputclass' error='Error' name='input' />);
    expect(container.getElementsByClassName('inputclass').length).toBe(1);
    expect(container.getElementsByClassName('error').length).toBe(1);
    expect(container.getElementsByTagName('input').length).toBe(1);
  });
  test('pass text as prop to test text type input', async () => {
    render(<Input />);
    const testid = screen.getByTestId('xt-ui-kit-input-component');
    await userEvent.type(testid, 'soumya');
    expect(testid).toHaveValue('soumya');
  });
  test('date type input test', () => {
    render(<Input type='date' />);
    const testid = screen.getByTestId('xt-ui-kit-input-component');
    expect(testid).toBeInTheDocument();
    expect(testid).toHaveAttribute('type', 'date');
  });

  test('number type input test', async () => {
    render(<Input type='number' />);
    const testid = screen.getByTestId('xt-ui-kit-input-component');
    expect(testid).toBeInTheDocument();
    expect(testid).toHaveAttribute('type', 'number');
    await userEvent.type(testid, '456');
    expect(testid).toHaveValue(parseInt('456'));
  });
  test('search type input test', async () => {
    const { container } = render(
      <Input
        type='search'
        disabled={false}
        dataTestId='xt-ui-kit-input-component'
        arialabel='arialabel '
        error='error'
        defaultValue='defaultValue'
      />,
    );
    expect(container.getElementsByClassName('searchcontainer').length).toBe(1);
    expect(container.getElementsByClassName('error').length).toBe(1);
  });
  test('input component external classname test', () => {
    const { container } = render(<Input error='error' />);
    expect(container.getElementsByClassName('error').length).toBe(1);
    expect(container.getElementsByClassName('').length).toBe(0);
  });
});
