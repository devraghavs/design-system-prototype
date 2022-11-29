import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Label from './Label';

expect.extend(toHaveNoViolations);

describe('Test Label component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Label value={''} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Label value={''} required={true} htmlFor='label' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Label component render test', () => {
    render(
      <Label
        value='test lable'
        htmlFor='label'
        id='labelid'
        dataTestId='xt-ui-kit-label-component'
      />,
    );
    const testid = screen.getByTestId('xt-ui-kit-label-component');
    expect(testid).toBeInTheDocument();
  });
  test('Label value test', () => {
    render(<Label value='label' />);
    expect(screen.getByText('label')).toBeInTheDocument();
  });
  test('class as a prop test', () => {
    const { container } = render(<Label value='label' className='labelClass1234' />);
    expect(container.getElementsByClassName('labelClass1234').length).toBe(1);
  });
  test('required as a prop test', () => {
    const { container } = render(
      <Label value='label' required={true} className='labelClass1234' />,
    );
    expect(container.getElementsByClassName('labelClass1234').length).toBe(1);
    expect(container.getElementsByClassName('required').length).toBe(1);
  });
});
