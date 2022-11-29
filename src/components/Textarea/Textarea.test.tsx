import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Textarea from './Textarea';

expect.extend(toHaveNoViolations);

describe('Test textarea component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Textarea />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Textarea placeholder='placeholder' minLength={5} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Textarea
        placeholder='placeholder'
        minLength={5}
        label='label'
        required={true}
        disabled={true}
        rows={2}
        cols={2}
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('textarea component render test', () => {
    render(
      <Textarea
        placeholder='placeholder'
        disabled={false}
        dataTestId='xt-ui-kit-textarea-component'
        arialabel='enter text here'
        resizable={false}
      />,
    );
    const testid = screen.getByTestId('xt-ui-kit-textarea-component');
    expect(testid).toBeInTheDocument();
  });
  test('class as a prop test', () => {
    const { container } = render(
      <Textarea className='textareaclassname' label='label' resizable={true} />,
    );
    expect(container.getElementsByClassName('textareaclassname').length).toBe(1);
  });
});
