import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Filecard from './Filecard';

expect.extend(toHaveNoViolations);

describe('Filecard component test', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Filecard />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Filecard fileName='navya' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Filecard fileSize='40kb' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Filecard variant='failed' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Filecard variant='uploading' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Filecard variant='uploaded' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Filecard variant='existing' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Filecard value={50} max={100} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('Filecard copmponent render test', () => {
    render(
      <Filecard
        dataTestId='xt-ui-kit-filecard-component'
        fileName='soumya'
        fileSize='40kb'
        value={50}
        max={100}
        className='filecard'
      />,
    );
    const dataTestId = screen.getByTestId('xt-ui-kit-filecard-component');
    expect(dataTestId).toBeInTheDocument();
  });
  test('Filecard copmponent uploading class test', () => {
    const { container } = render(<Filecard variant='uploading' />);
    expect(container.getElementsByClassName('progressbarcontainer').length).toBe(1);
  });
  test('Filecard copmponent failed class test', () => {
    const { container } = render(<Filecard variant='failed' />);
    expect(container.getElementsByClassName('retrybuttoncontainer').length).toBe(1);
    const button = screen.queryByText('Button');
    expect(button).not.toBeInTheDocument();
  });
  test('Filecard copmponent uploaded button test', () => {
    render(<Filecard variant='uploaded' />);
    const button = screen.queryByText('Button');
    expect(button).not.toBeInTheDocument();
  });
});
