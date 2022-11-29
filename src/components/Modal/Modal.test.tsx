import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Icons } from '../Iconography/iconsEnum';

expect.extend(toHaveNoViolations);

import Modal from './Modal';

describe('Test modal component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Modal />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Modal ModalTitle='modal' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Modal Iconmodal={true} icon={''} iconcolor='' size='11' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Modal ModalContent='hello' ModalTitle='tittle' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('modal component render test', () => {
    render(<Modal dataTestId='xt-ui-kit-modal-component' className='modal' />);
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    expect(modal).toBeInTheDocument();
  });
  test('modal component render test', () => {
    render(<Modal dataTestId='xt-ui-kit-modal-component' className='modal' open={false} />);
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    expect(modal).toBeInTheDocument();
  });
  test('onClick event test', async () => {
    const onChangeMock = jest.fn();
    render(
      <Modal dataTestId='xt-ui-kit-modal-component' className='modal' onClose={onChangeMock} />,
    );
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    await userEvent.click(modal);
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('modal component render test', () => {
    render(
      <Modal
        dataTestId='xt-ui-kit-modal-component'
        className='modal'
        open={false}
        ModalTitle='hello'
        ModalContent='In modal'
        themedheading={true}
        crossIcon={true}
      />,
    );
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    expect(modal).toBeInTheDocument();
  });
  test('modal component render nothing test', () => {
    render(<Modal />);
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    expect(modal).not.toBe(null);
  });
  test('onClick event onclose test', async () => {
    const onChangeMock = jest.fn();
    render(
      <Modal dataTestId='xt-ui-kit-modal-component' className='className' onClose={onChangeMock} />,
    );
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    await userEvent.click(modal);
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('modal component render nothing test', () => {
    render(<Modal crossIcon={true} iconcolor='black' />);
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    expect(modal).not.toBe(null);
  });
  test('modal component render nothing test', () => {
    render(<Modal Iconmodal={false} iconcolor='black' className='className' />);
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    expect(modal).toBeInTheDocument();
  });
  test('modal component render nothing test', () => {
    render(<Modal Iconmodal={true} iconcolor='black' className='className' />);
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    expect(modal).toBeInTheDocument();
  });
  test('modal component render nothing test', () => {
    render(<Modal crossIcon={false} iconcolor='black' className='className' />);
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    expect(modal).toBeInTheDocument();
  });

  test('modal component render nothing test', () => {
    render(
      <Modal
        ModalTitle='hello'
        ModalContent='In modal'
        themedheading={false}
        Iconmodal={false}
        icon={Icons.success}
        iconcolor='white'
        size='11'
        crossIcon={true}
      />,
    );
    const modal = screen.getByTestId('xt-ui-kit-modal-component');
    expect(modal).toBeInTheDocument();
  });
});
