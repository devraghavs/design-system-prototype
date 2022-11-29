import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Radio from './Radio';

expect.extend(toHaveNoViolations);

describe('To test radio', () => {
  test('Radio component render test', () => {
    render(
      <Radio
        label='label'
        id='radio'
        name='radio'
        disable={false}
        value='radio'
        ariaLabel='radio button'
      />,
    );
    const radio = screen.getByTestId('xt-ui-kit-Radio-component');

    expect(radio).toBeInTheDocument();
  });
  test('Radio component render test not to be null', () => {
    render(
      <Radio
        label='label'
        id='radio'
        name='radio'
        disable={false}
        value='radio'
        ariaLabel='radio button'
        dataTestId='xt-ui-kit-Radio-component'
      />,
    );
    const radio = screen.getByTestId('xt-ui-kit-Radio-component');

    expect(radio).not.toBe(null);
  });
  test('Radio component render test to have className', () => {
    render(
      <Radio
        label='label'
        id='radio'
        name='radio'
        disable={false}
        value='radio'
        ariaLabel='radio button'
        dataTestId='xt-ui-kit-Radio-component'
        className='radioparent'
      />,
    );
    const radio = screen.getByTestId('xt-ui-kit-Radio-component');
    expect(radio).toHaveClass('radioparent');

    expect(radio).not.toBe(null);
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Radio label={''} id={''} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Radio label='radio' id='radio' name='radio' ariaLabel='radioButton' />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
