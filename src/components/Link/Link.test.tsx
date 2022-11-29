import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Link from './Link';

expect.extend(toHaveNoViolations);

describe('Test LinkElement component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Link />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Link>hello</Link>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Link href='https://stackoverflow.com/questions/62382324/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type'>
        hello
      </Link>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Link
        target='open'
        title='open'
        type='html'
        href='https://stackoverflow.com/questions/62382324/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type'
      >
        hello
      </Link>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Link
        target='open'
        title='open'
        type='html'
        hrefLang='en'
        disable={false}
        href='https://stackoverflow.com/questions/62382324/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type'
      >
        hello
      </Link>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('Infostrip component  render className  test', () => {
    render(<Link />);
    const linkelement = screen.getByTestId('xt-ui-kit-LinkElement-component');

    expect(linkelement).toBeInTheDocument();
  });
  test('Infostrip component  render className  test', () => {
    render(
      <Link
        target='open'
        title='open'
        type='html'
        hrefLang='en'
        disable={false}
        href='https://stackoverflow.com/questions/62382324/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type'
      />,
    );
    const linkelement = screen.getByTestId('xt-ui-kit-LinkElement-component');

    expect(linkelement).toBeInTheDocument();
  });
  test('Infostrip component  render className  test', () => {
    render(
      <Link
        target='open'
        title='open'
        type='html'
        hrefLang='en'
        disable={true}
        className='className'
        href='https://stackoverflow.com/questions/62382324/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type'
      />,
    );
    const linkelement = screen.getByTestId('xt-ui-kit-LinkElement-component');

    expect(linkelement).toBeInTheDocument();
    expect(linkelement).toHaveClass('className');
  });
  test('Infostrip component  render className  test', () => {
    render(
      <Link
        target='open'
        title='open'
        type='html'
        hrefLang='en'
        disable={true}
        className='className'
        dataTestId='xt-ui-kit-LinkElement-component'
        href='https://stackoverflow.com/questions/62382324/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type'
      />,
    );
    const linkelement = screen.getByTestId('xt-ui-kit-LinkElement-component');

    expect(linkelement).toBeInTheDocument();
    expect(linkelement).toHaveClass('className');
    expect(linkelement).not.toBe(null);
  });
});
