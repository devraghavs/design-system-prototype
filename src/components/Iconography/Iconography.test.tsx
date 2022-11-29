import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Iconography from './Iconography';
import { Icons } from './iconsEnum';

expect.extend(toHaveNoViolations);

describe('Test Icon component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.addplus} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.alert} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.attachments} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.calender} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.checkboxChecked} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.checkboxUnchecked} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.cicle} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.cross} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.downarrow} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.download} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.ellipse} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.filter} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.history} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.left} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.more} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.play} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.remove} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.right} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.success} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.tick} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.tickthick} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.uparrow} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.user} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.vector} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.vectorone} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.addplus} size='11' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Iconography icon={Icons.addplus} color='red' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.addplus} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.attachments} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.calender} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.cicle} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.cross} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.downarrow} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.download} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.download} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.ellipse} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.filter} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.history} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.left} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.play} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.remove} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.right} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.tick} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.tick} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.tickthick} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.uparrow} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.user} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.vector} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.vectorone} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.success} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.alert} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.more} color='black' size='11' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();

    expect(iconography).not.toBe('null');
  });
  test('Icon component render test', () => {
    render(<Iconography icon={Icons.addplus} color='black' size='11' className='className' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();
    expect(iconography).toHaveClass('className');
  });
  test('Icon component render test', () => {
    render(
      <Iconography
        icon={Icons.addplus}
        color='black'
        size='11'
        className='className'
        dataTestId='xt-ui-kit-iconography-component'
      />,
    );
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();
    expect(iconography).toHaveClass('className');
  });
  test('Icon component render test', () => {
    render(
      <Iconography
        icon='cross'
        color='black'
        size='11'
        className='className'
        dataTestId='xt-ui-kit-iconography-component'
      />,
    );
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();
    expect(iconography).toHaveClass('className');
  });
  test('Icon component render test', () => {
    render(<Iconography icon='' />);
    const iconography = screen.getByTestId('xt-ui-kit-iconography-component');

    expect(iconography).toBeInTheDocument();
  });
});
