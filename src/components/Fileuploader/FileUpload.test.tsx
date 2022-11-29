import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import FileUploader from './FileUpload';

expect.extend(toHaveNoViolations);

describe('Text FileUpload component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader fileuploadcontainer='fileuploadercontainer' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader fileattachmentlabelclassName='label' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader fileattachmenticonclassName='uploading' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader fileSizeZeroError='no file' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader fileSizeLargeError='large file not allowed' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader fileType='pdf' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('File Upload render test', () => {
    render(<FileUploader />);
    const dataTestId = screen.getByTestId('xt-ui-kit-FileUpload-component');
    expect(dataTestId).toBeInTheDocument();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader fileattachmenticonclassName='attachment' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader fileattachmentlabelclassName='label class' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<FileUploader error='error' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('Fileupload type test', () => {
    render(<FileUploader />);
    const dataTestId = screen.getByTestId('inputdataid');
    expect(dataTestId).toBeInTheDocument();
    expect(dataTestId).toHaveAttribute('type', 'file');
  });
  test('onChange function test', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<FileUploader onChange={onChangeMock} />);
    fireEvent.click(getByTestId('btntestid'));
    fireEvent.change(getByTestId('inputdataid'));
    expect(onChangeMock).toHaveBeenCalled();
  });
  test('Fileupload error test', () => {
    const { container } = render(
      <FileUploader
        dataTestId='xt-ui-kit-FileUpload-component'
        fileType='pdf'
        label='attach'
        fileattachmentlabelclassName='fileattachmentlabelclassName'
        fileattachmenticonclassName='fileattachmenticonclassName'
        fileuploadinputclassName='fileuploadinputclassName'
        fileuploadcontainer='fileuploadcontainer'
        error='error'
        errorclassName='errorclassname'
      />,
    );
    expect(container.getElementsByClassName('errorclassname').length).toBe(1);
  });
});
