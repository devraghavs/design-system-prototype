import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import CheckboxMain from './Checkbox';

expect.extend(toHaveNoViolations);

describe('Test Checkbox component', () => {
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<CheckboxMain />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<CheckboxMain label='label' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<CheckboxMain disabled={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<CheckboxMain Checked={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<CheckboxMain Indeterminate={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('checkbox component render test', () => {
    render(<CheckboxMain disabled={false} label='Label' />);
    const checkbox = screen.getByTestId('xt-ui-kit-checkbox-component');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('checkboxstyle');
  });
  test('checkbox component render test', () => {
    render(<CheckboxMain disabled={false} label='Label' Checked={true} />);
    const checkbox = screen.getByTestId('xt-ui-kit-checkbox-component');

    expect(checkbox).toBeInTheDocument();
  });
  test('checkbox component render test', () => {
    render(<CheckboxMain disabled={false} label='Label' Indeterminate={true} />);
    const checkbox = screen.getByTestId('xt-ui-kit-checkbox-component');

    expect(checkbox).toBeInTheDocument();
  });
  test('checkbox component render test', () => {
    render(
      <CheckboxMain
        disabled={false}
        label='Label'
        Indeterminate={true}
        className='checkboxstyle'
        Checked={true}
      />,
    );
    const checkbox = screen.getByTestId('xt-ui-kit-checkbox-component');

    expect(checkbox).toBeInTheDocument();
  });
  test('onChange event test', async () => {
    const onChangeMock = jest.fn();
    render(<CheckboxMain onChange={onChangeMock} />);
    const check = screen.getByTestId('xt-ui-kit-checkbox-component');
    await userEvent.click(check);
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('onChange event test', async () => {
    const onChangeMock = jest.fn();
    render(<CheckboxMain onChange={onChangeMock} Checked={true} Indeterminate={true} />);
    const check = screen.getByTestId('xt-ui-kit-checkbox-component');
    await userEvent.click(check);
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('onChange event test', async () => {
    const onChangeMock = jest.fn();
    render(<CheckboxMain onChange={onChangeMock} Checked={false} Indeterminate={true} />);
    const check = screen.getByTestId('xt-ui-kit-checkbox-component');
    await userEvent.click(check);
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('checkbox component nothing test', () => {
    render(<CheckboxMain />);
    const checkbox = screen.getByTestId('xt-ui-kit-checkbox-component');
    expect(checkbox).not.toBe(null);
  });
});
