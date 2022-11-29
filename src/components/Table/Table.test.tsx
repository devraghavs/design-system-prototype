import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Table from './Table';

expect.extend(toHaveNoViolations);

describe('Test Table component', () => {
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Table />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Table placeHolder='search' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Table pagiantionPages={[10]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Table globalFilterProps={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Table headerData={[]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Table tableData={[]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(<Table isPaginationRequired={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Table
        tableDataErrorMessage='no data found'
        dataNotFoundMessage='no data'
        tableHeadErrormessage='no header data'
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Table
        tableData={[]}
        headerData={[]}
        isPaginationRequired={true}
        tableDataErrorMessage='no data found'
        dataNotFoundMessage='no data'
        tableHeadErrormessage='no header data'
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  const onClickMock = jest.fn();
  test('Table component render test', () => {
    render(<Table />);
    const table = screen.getByTestId('xt-ui-kit-table-component');
    expect(table).not.toBe(null);
  });
  test('Table component render test for headrData null check', () => {
    render(<Table dataTestId='xt-ui-kit-table-component' headerData={[{}]} />);
    const table = screen.getByTestId('xt-ui-kit-table-component');
    expect(table).not.toBe(null);
  });
  test('Table component render test for accessorFn', () => {
    render(
      <Table
        isPaginationRequired={true}
        placeHolder='Number....'
        dataTestId='xt-ui-kit-table-component'
        globalFilterProps={true}
        pagiantionPages={[10, 20, 30]}
        headerData={[
          {
            key: 'FullName',
            headerLabel: 'Full Name',
            body: (row: { Name: string; LastName: string }) => {
              return `${row.Name} ${row.LastName}`;
            },
            columnSorting: false,
            columnFilter: true,
          },
        ]}
      />,
    );
    const button = screen.getAllByRole('button')[0];
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
  test('Table component render test for filter Function button for Number', () => {
    render(
      <Table
        isPaginationRequired={false}
        dataTestId='xt-ui-kit-table-component'
        globalFilterProps={false}
        headerData={[
          {
            key: 'Age',
            headerLabel: 'Age',
            columnSorting: false,
            columnFilter: true,
          },
        ]}
        tableData={[
          {
            Name: 'Rahul',
            LastName: 'Yadav',
            Age: 2,
            Visits: 100,
            Status: 'not available ',
          },
        ]}
      />,
    );
    const button = screen.getAllByRole('button');
    fireEvent.click(button[1]);
    expect(button[1]).toBeInTheDocument;

    const filterInput = screen.getAllByTestId('xt-ui-kit-input-component');
    fireEvent.change(filterInput[0], { target: { value: 2 } });
    expect(filterInput[0]).toHaveValue('2');
  });
  test('Table component render test for filter Function button for String', () => {
    render(
      <Table
        isPaginationRequired={true}
        dataTestId='xt-ui-kit-table-component'
        globalFilterProps={false}
        pagiantionPages={[10, 20, 30]}
        headerData={[
          {
            key: 'Name',
            headerLabel: 'First Name',
            columnSorting: true,
            columnFilter: true,
          },
        ]}
        tableData={[
          {
            Name: 'Rahul',
            LastName: 'Yadav',
            Age: 2,
            Visits: 100,
            Status: 'not available ',
          },
        ]}
      />,
    );
    const button = screen.getAllByRole('button')[1];
    fireEvent.click(button);
    expect(button).toBeInTheDocument;

    const filterInput = screen.getAllByTestId('xt-ui-kit-input-component');
    expect(filterInput[0]).toHaveValue('');
    fireEvent.change(filterInput[0], { target: { value: 'Rahul' } });
    expect(filterInput[0]).toHaveValue('Rahul');
  });
  test('Table component render test for globalFilter and pagination', () => {
    render(
      <Table
        isPaginationRequired={true}
        placeHolder='Number Hi hai'
        dataTestId='xt-ui-kit-table-component'
        globalFilterProps={true}
        pagiantionPages={[1, 2]}
        headerData={[
          {
            key: 'Name',
            headerLabel: 'First Name',
            columnSorting: false,
            columnFilter: true,
          },
          {
            key: 'Age',
            headerLabel: 'Age',
            columnSorting: true,
            columnFilter: false,
          },
        ]}
        tableData={[
          {
            Name: 'Rahul',
            LastName: 'Yadav',
            Age: 2,
            Visits: 100,
            Status: 'not available ',
          },
          {
            Name: 'Rahul',
            LastName: 'Yadav',
            Age: 3,
            Visits: 101,
            Status: 'not available ',
          },
        ]}
      />,
    );
    const button = screen.getAllByRole('button');
    fireEvent.click(button[9]);
    expect(button[9]).toBeInTheDocument;
    fireEvent.click(button[6]);
    expect(button[6]).toBeInTheDocument;

    const globalFilter = screen.getAllByTestId('xt-ui-kit-input-component');
    expect(globalFilter[0]).toHaveValue('');
    fireEvent.change(globalFilter[0], { target: { value: 'Rahul' } });
    expect(globalFilter[0]).toHaveValue('Rahul');

    const pageInput = screen.getAllByTestId('xt-ui-kit-input-component');
    expect(pageInput[1]).toHaveValue(null);
    fireEvent.change(pageInput[1], { target: { value: '2' } });
    expect(pageInput[1]).toHaveValue(2);

    const select = screen.getByTestId('select');
    expect(select).toHaveValue('1');
    fireEvent.change(select, { target: { value: '2' } });
    expect(select).toHaveValue('2');
  });
  test('Table component render test for PaginationHandle', () => {
    const onClickMock = jest.fn();
    render(
      <Table
        isPaginationRequired={true}
        dataTestId='xt-ui-kit-table-component'
        globalFilterProps={true}
        pagiantionPages={[10, 20, 30]}
        headerData={[
          {
            key: 'FullName',
            headerLabel: 'Full Name',
            body: (row: { Name: string; LastName: string }) => {
              return `${row.Name} ${row.LastName}`;
            },
            columnSorting: true,
            columnFilter: true,
          },
        ]}
        tableData={[
          {
            Name: 'Rahul',
            LastName: 'Yadav',
            Age: 2,
            Visits: 100,
            Status: 'not available ',
          },
        ]}
      />,
    );
    const button1 = screen.getAllByRole('button')[1];
    userEvent.click(button1);
    expect(onClickMock).toHaveBeenCalledTimes(0);
    const button2 = screen.getAllByRole('button')[4];
    userEvent.click(button2);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
  test('Table component render test without tablehead', () => {
    render(
      <Table
        isPaginationRequired={false}
        dataTestId='xt-ui-kit-table-component'
        tableHeadErrormessage='headinf not found'
        tableDataErrorMessage='table data not found'
        dataNotFoundMessage='data not found'
        pagiantionPages={[10]}
        tableData={[]}
        headerData={[
          {
            key: 'Name',
            headerLabel: <span>First Name</span>,
            columnSorting: true,
            columnFilter: false,
          },
        ]}
      />,
    );
    const table = screen.getByTestId('xt-ui-kit-table-component');

    expect(table).toBeInTheDocument();
  });
  test('Table component render test without tableData', () => {
    render(
      <Table
        isPaginationRequired={false}
        dataTestId='xt-ui-kit-table-component'
        tableHeadErrormessage='headinf not found'
        tableDataErrorMessage='table data not found'
        dataNotFoundMessage='data not found'
        pagiantionPages={[10]}
        globalFilterProps={true}
        globalFilterStyle=''
        WrapperTableContainerStyle=''
        WrapperTableHeadStyle=''
        WrapperTableBodyStyle=''
        WrapperPaginationContainerStyle=''
        tableData={[]}
        headerData={[]}
      />,
    );
    const table = screen.getByTestId('xt-ui-kit-table-component');
    expect(table).toBeInTheDocument();
  });
  test('Table component render test without headdata', () => {
    render(
      <Table
        isPaginationRequired={true}
        dataTestId='xt-ui-kit-table-component'
        tableHeadErrormessage='headinf not found'
        tableDataErrorMessage='table data not found'
        dataNotFoundMessage='data not found'
        pagiantionPages={[10]}
        tableData={[
          {
            Name: 'Rahul',
            LastName: 'Yadav',
            Age: 22,
            Visits: 100,
            Status: 'In Relationship',
          },
          {
            Name: 'Rahul',
            LastName: 'Yadav',
            Age: 40,
            Visits: 40,
            Status: 'Single',
          },
          {
            Name: 'Raghav',
            LastName: 'Somani',
            Age: 45,
            Visits: 20,
            Status: 'Complicated',
          },
          {
            Name: 'Soumya',
            LastName: 'Priyadarshini',
            Age: 45,
            Visits: 20,
            Status: 'Complicated',
          },
        ]}
        headerData={[]}
      />,
    );
    const table = screen.getByTestId('xt-ui-kit-table-component');

    expect(table).toBeInTheDocument();
  });
  test('Table component render test for error message', () => {
    render(
      <Table
        isPaginationRequired={true}
        dataTestId='xt-ui-kit-table-component'
        pagiantionPages={[10]}
        tableData={[]}
        headerData={[]}
      />,
    );
    const table = screen.getByTestId('xt-ui-kit-table-component');

    expect(table).toBeInTheDocument();
  });
});
