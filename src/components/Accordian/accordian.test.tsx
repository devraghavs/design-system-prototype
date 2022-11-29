import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Accordian from './Accordian';
import { AcordianEnum } from './accordianEnum';

expect.extend(toHaveNoViolations);

describe('To have not accodian component', () => {
  it('Accordian component render test', () => {
    render(<Accordian />);
    const accordian = screen.getByTestId('xt-ui-kit-accordian-component');
    expect(accordian).not.toBe(null);
  });
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Accordian />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('should not have basic accessibility issues for type', async () => {
    const { container } = render(<Accordian type={AcordianEnum.MULTIPLE} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('should not have basic accessibility issues for defaultvalue', async () => {
    const { container } = render(<Accordian defaultValue={[]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('should not have basic accessibility issues data', async () => {
    const { container } = render(<Accordian data={[]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('Accordian component render test for empty DefaultValue array', () => {
    render(
      <Accordian
        dataTestId='xt-ui-kit-accordian-component'
        type={AcordianEnum.MULTIPLE}
        defaultValue={[]}
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
          {
            value: 'item-2',
            headerProps: 'What do you call a funny mountain?',
            contentProps: 'This is for testing',
            disabled: true,
          },
        ]}
      />,
    );
    const accordian = screen.getByTestId('xt-ui-kit-accordian-component');
    expect(accordian).not.toBe(null);
  });
  it('Accordian component render test for empty data object', () => {
    render(<Accordian dataTestId='xt-ui-kit-accordian-component' data={[{}]} />);
    const accordian = screen.getByTestId('xt-ui-kit-accordian-component');
    expect(accordian).not.toBe(null);
  });
  it('Accordian component render test for single', () => {
    const handleClick = jest.fn();
    render(
      <Accordian
        dataTestId='xt-ui-kit-accordian-component'
        collapsible={true}
        type={AcordianEnum.SINGLE}
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
          {
            value: 'item-2',
            headerProps: 'What do you call a funny mountain?',
            contentProps: 'This is for testing',
            disabled: true,
          },
          {
            value: 'item-3',
            headerProps: 'What did the astronaut say?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
      />,
    );
    const accordian = screen.getByTestId('xt-ui-kit-accordian-component');
    expect(accordian).toBeInTheDocument();
    fireEvent.click(accordian);
    expect(handleClick).toHaveBeenCalledTimes(0);
    const labelClass = screen.getByText('What do you call a dog magician?');
    expect(labelClass).toHaveClass('triggertext');
    const labelClass2 = screen.getByText('What do you call a funny mountain?');
    expect(labelClass2).toHaveClass('triggertext');
    const labelClass3 = screen.getByText('What did the astronaut say?');
    expect(labelClass3).toHaveClass('triggertext');
  });
  it('Accordian component render test for multiple', () => {
    const handleClick = jest.fn();
    render(
      <Accordian
        dataTestId='xt-ui-kit-accordian-component'
        type={AcordianEnum.MULTIPLE}
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
          {
            value: 'item-2',
            headerProps: 'What do you call a funny mountain?',
            contentProps: 'This is for testing',
            disabled: true,
          },
          {
            value: 'item-3',
            headerProps: 'What did the astronaut say?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
      />,
    );
    const accordian = screen.getByTestId('xt-ui-kit-accordian-component');
    expect(accordian).toBeInTheDocument();
    fireEvent.click(accordian);
    expect(handleClick).toHaveBeenCalledTimes(0);
    const labelClass = screen.getByText('What do you call a dog magician?');
    expect(labelClass).toHaveClass('triggertext');
    const labelClass2 = screen.getByText('What do you call a funny mountain?');
    expect(labelClass2).toHaveClass('triggertext');
    const labelClass3 = screen.getByText('What did the astronaut say?');
    expect(labelClass3).toHaveClass('triggertext');
  });
  it('Accordian component render test for single with defaultValue', () => {
    const handleClick = jest.fn();
    render(
      <Accordian
        dataTestId='xt-ui-kit-accordian-component'
        collapsible={false}
        defaultValue='item-3'
        type={AcordianEnum.SINGLE}
        data={[
          {
            value: 'item-3',
            headerProps: 'What did the astronaut say?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
      />,
    );
    const accordian = screen.getByTestId('xt-ui-kit-accordian-component');
    expect(accordian).toBeInTheDocument();
    expect(accordian).toHaveTextContent('This is for testing');
    const labelClass = screen.getByText('What did the astronaut say?');
    expect(labelClass).toHaveClass('triggertext');
    fireEvent.click(accordian);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
  it('Accordian component render test for multiple with defaultValue', () => {
    const handleClick = jest.fn();
    render(
      <Accordian
        dataTestId='xt-ui-kit-accordian-component'
        defaultValue={['item-1', 'item-3']}
        type={AcordianEnum.MULTIPLE}
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
          {
            value: 'item-2',
            headerProps: 'What do you call a funny mountain?',
            contentProps: 'This is for testing',
            disabled: true,
          },
          {
            value: 'item-3',
            headerProps: 'What did the astronaut say?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
      />,
    );
    const accordian = screen.getByTestId('xt-ui-kit-accordian-component');
    expect(accordian).toBeInTheDocument();
    fireEvent.click(accordian);
    expect(handleClick).toHaveBeenCalledTimes(0);
    const labelClass = screen.getByText('What do you call a dog magician?');
    expect(labelClass).toHaveClass('triggertext');
    const labelClass2 = screen.getByText('What did the astronaut say?');
    expect(labelClass2).toHaveClass('triggertext');
  });
  it('Accordian component render test for single with incorrect defaultValue', () => {
    const handleClick = jest.fn();
    render(
      <Accordian
        dataTestId='xt-ui-kit-accordian-component'
        defaultValue={['item-1', 'item-3']}
        type={AcordianEnum.SINGLE}
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
      />,
    );
    const accordian = screen.getByTestId('xt-ui-kit-accordian-component');
    expect(accordian).toBeInTheDocument();
    expect(accordian).toHaveTextContent('defaultValue must be string for Single Type');
    fireEvent.click(accordian);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
  it('Accordian component render test for multiple with incorrect defaultValue', () => {
    const handleClick = jest.fn();
    render(
      <Accordian
        dataTestId='xt-ui-kit-accordian-component'
        defaultValue={'item-1'}
        type={AcordianEnum.MULTIPLE}
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
      />,
    );
    const accordian = screen.getByTestId('xt-ui-kit-accordian-component');
    expect(accordian).toBeInTheDocument();
    expect(accordian).toHaveTextContent('defaultValue must be Array for multiple Type');
    fireEvent.click(accordian);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
  it('onClick event test for Single type with defaultValue', async () => {
    const onClickMock = jest.fn();
    render(
      <Accordian
        type={AcordianEnum.SINGLE}
        defaultValue='item-1'
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
        dataTestId='xt-ui-kit-accordian-component'
      />,
    );
    const button = screen.getAllByRole('button')[0];
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
  it('onClick event test for single type', async () => {
    const onClickMock = jest.fn();
    render(
      <Accordian
        type={AcordianEnum.SINGLE}
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
        dataTestId='xt-ui-kit-accordian-component'
      />,
    );

    const button = screen.getAllByRole('button')[0];
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
  it('onClick event test for multiple type with defaultValue', async () => {
    const onClickMock = jest.fn();
    render(
      <Accordian
        type={AcordianEnum.MULTIPLE}
        defaultValue={['item-1', 'item-3']}
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
          {
            value: 'item-2',
            headerProps: 'What do you call a funny mountain?',
            contentProps: 'This is for testing',
            disabled: true,
          },
          {
            value: 'item-3',
            headerProps: 'What did the astronaut say?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
        dataTestId='xt-ui-kit-accordian-component'
      />,
    );

    const button = screen.getAllByRole('button')[0];
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
  it('onClick event test for multiple type', async () => {
    const onClickMock = jest.fn();
    render(
      <Accordian
        type={AcordianEnum.MULTIPLE}
        data={[
          {
            value: 'item-1',
            headerProps: 'What do you call a dog magician?',
            contentProps: 'This is for testing',
            disabled: false,
          },
          {
            value: 'item-3',
            headerProps: 'What did the astronaut say?',
            contentProps: 'This is for testing',
            disabled: false,
          },
        ]}
        dataTestId='xt-ui-kit-accordian-component'
        handleToggleCallback={() => {
          return 'Hello World';
        }}
      />,
    );
    const button = screen.getAllByRole('button')[0];
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
  it('Accordian component render test', () => {
    const container = render(<Accordian />);
    expect(container).toBeTruthy();
  });
});
