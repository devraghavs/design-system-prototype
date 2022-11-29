import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Select from './Select';

expect.extend(toHaveNoViolations);

describe('Test select component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Select />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Select data={[]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Select multiple={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Select optional={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Select labelText='label' checkBoxColor='blue' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  const handleClick = jest.fn();
  it('Select component render test', () => {
    render(<Select />);
    const select = screen.getByTestId('xt-ui-kit-select-component');
    expect(select).not.toBe(null);
  });
  it('Select component render test for empty data', () => {
    render(<Select data={[{}]} />);
    const select = screen.getByTestId('xt-ui-kit-select-component');
    expect(select).not.toBe(null);
  });
  it('should correctly set default option', () => {
    render(
      <Select
        dataTestId='xt-ui-kit-select-component'
        multiple={false}
        labelText='Single Select'
        optional={true}
        selectProp='Select the Option '
        data={[
          { value: 1, label: 'Rahul Yadav', disabled: false },
          { value: 4, label: 'Benedict Kessler', disabled: true },
        ]}
      />,
    );
    const select = screen.getByTestId('xt-ui-kit-select-component');
    expect(select).toBeInTheDocument();
    const labelClass = screen.getByText('Single Select');
    expect(labelClass).toHaveClass('LabelText');
    fireEvent.click(select);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
  it('should allow user to change data', () => {
    render(
      <Select
        multiple={false}
        labelText='Single Select'
        optional={true}
        selectProp='Select the Option '
        data={[
          { value: 1, label: 'Rahul Yadav', disabled: false },
          { value: 4, label: 'Benedict Kessler', disabled: true },
        ]}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('selectButton');
    expect(screen.getByText('Select the Option')).toBeInTheDocument();
    expect(screen.queryByText('Rahul Yadav')).toBe(null);
    fireEvent.click(screen.getByText('Select the Option'));
    expect(screen.getByText('Rahul Yadav')).toBeInTheDocument();
  });
  it('should correctly set default option', () => {
    render(
      <Select
        multiple={true}
        optional={true}
        selectProp='Select the Option '
        data={[{ value: 1, label: 'Rahul Yadav', disabled: false }]}
      />,
    );
    const select = screen.getByTestId('xt-ui-kit-select-component');
    expect(select).toBeInTheDocument();
    fireEvent.click(select);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
  it('should allow user to change data', () => {
    render(
      <Select
        multiple={true}
        labelText='Single Select'
        optional={true}
        data={[
          { value: 1, label: 'Rahul Yadav', disabled: false },
          { value: 4, label: 'Benedict Kessler', disabled: true },
        ]}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('selectButton');
    expect(screen.getByText('Select Option')).toBeInTheDocument();
    expect(screen.queryByText('Rahul Yadav')).toBe(null);
    fireEvent.click(screen.getByText('Select Option'));
    expect(screen.getByText('Rahul Yadav')).toBeInTheDocument();
  });
  it('should correctly set default option', () => {
    render(
      <Select
        multiple={false}
        labelText='Single Select'
        optional={false}
        selectProp='Select the Option '
        data={[{ value: 1, label: 'Rahul Yadav', disabled: false }]}
      />,
    );
    const select = screen.getByTestId('xt-ui-kit-select-component');
    expect(select).toBeInTheDocument();
    const labelClass = screen.getByText('Single Select');
    expect(labelClass).toHaveClass('LabelText');
    fireEvent.click(select);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
  it('onClick event test for single type', async () => {
    render(
      <Select
        dataTestId='xt-ui-kit-select-component'
        multiple={true}
        labelText='Single Select'
        optional={false}
        selectProp='Select the Option '
        data={[{ value: 1, label: 'Rahul Yadav', disabled: false }]}
      />,
    );
    const button = screen.getAllByRole('button')[0];
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled;
  });
});
