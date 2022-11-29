import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Chips from './Chips';

expect.extend(toHaveNoViolations);

describe('chip component test', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Chips chipVariant='success' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Chips chipVariant='warning' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Chips chipVariant='danger' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues with remove icon', async () => {
    const { container } = render(<Chips chipVariant='danger' isRemoveable={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues with label', async () => {
    const { container } = render(<Chips chipVariant={'info'} label='label' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues with disable', async () => {
    const { container } = render(<Chips chipVariant={'info'} disabled={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues with isselected', async () => {
    const { container } = render(<Chips chipVariant={'info'} isSelected={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Chip component render test', () => {
    render(<Chips chipVariant='success' />);
    const dataTestId = screen.getByTestId('xt-ui-kit-chip-component');
    expect(dataTestId).toBeInTheDocument();
  });
  test('Chip component class name change as prop test', () => {
    const { container } = render(
      <Chips
        chipVariant='success'
        dataTestId='xt-ui-kit-chip-component'
        isSelected={true}
        disabled={true}
        isRemoveable={true}
        label='Label'
      />,
    );
    expect(container.getElementsByClassName('selected').length).toBe(1);
    expect(container.getElementsByClassName('disabled').length).toBe(1);
    expect(container.getElementsByClassName('removeicon').length).toBe(1);
  });
  test('onClick event test', async () => {
    const onClickMock = jest.fn();
    render(
      <Chips
        isRemoveable={false}
        chipVariant='success'
        dataTestId='xt-ui-kit-chip-component'
        onClick={onClickMock}
      />,
    );
    const chip = screen.getByTestId('xt-ui-kit-chip-component');
    await userEvent.click(chip);
    expect(onClickMock).toHaveBeenCalled();
    const nospace = screen.queryByText(' ');
    expect(nospace).not.toBeInTheDocument();
  });
  test('onChange function test', () => {
    const onDeleteMock = jest.fn();
    const { getByTestId } = render(<Chips chipVariant='info' onDelete={onDeleteMock} />);
    fireEvent.click(getByTestId('deletebtn'));
    fireEvent.click(getByTestId('deletebtn'));
    expect(onDeleteMock).toHaveBeenCalled();
  });
});
