import React from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  getFacetedRowModel,
  getPaginationRowModel,
  FilterFn,
} from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';
import Input from '../Input';
import Button from '../Buttons/Button';
import { ColumnFilter, GlobalFilterFns } from './Filter';
import Tooltip from '../Tooltip';
import Styles from './Table.module.css';
import { Icons } from '../Iconography/iconsEnum';
import Iconography from '../Iconography';

interface TableProps {
  placeHolder?: string;
  pagiantionPages?: number[];
  dataTestId?: string;
  globalFilterProps?: boolean;
  headerData?: any[];
  tableData?: any[];
  isPaginationRequired?: boolean;
  tableDataErrorMessage?: string;
  dataNotFoundMessage?: string;
  tableHeadErrormessage?: string;
  globalFilterStyle?: string;
  WrapperTableContainerStyle?: string;
  WrapperTableHeadStyle?: string;
  WrapperTableBodyStyle?: string;
  WrapperPaginationContainerStyle?: string;
}

const Table = ({
  placeHolder = 'Number...',
  pagiantionPages = [10, 20, 30],
  globalFilterProps = false,
  headerData = [],
  tableData = [],
  isPaginationRequired = false,
  tableDataErrorMessage = 'Table Data Not Found',
  dataNotFoundMessage = 'Data Not Found',
  tableHeadErrormessage = 'No Header Data Found',
  dataTestId = 'xt-ui-kit-table-component',
  globalFilterStyle = '',
  WrapperTableContainerStyle = '',
  WrapperTableHeadStyle = '',
  WrapperTableBodyStyle = '',
  WrapperPaginationContainerStyle = '',
}: TableProps) => {
  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank,
    });
    return itemRank.passed;
  };
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [tempFilter, setTempFilter] = React.useState(Array(headerData.length).fill(false));

  const columns = headerData.map((item: any) => ({
    accessorKey: item.key ?? 'Unknown',
    accessorFn: (item.body ? (row: any, index: number) => item.body(row, index) : null) ?? null,
    cell: (info: any) =>
      item.body ? (
        info.getValue()
      ) : (
        <Tooltip
          triggerStyle={Styles.tooltip}
          tooltipId={info.cell.id}
          text={info.getValue()}
          trigger={info.getValue()}
        />
      ),
    header: () => item.headerLabel ?? 'Unknown',
    enableColumnFilter: item.columnFilter ?? false,
    enableSorting: item.columnSorting ?? false,
  }));

  const [data] = React.useState(() => [...tableData]);

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
  });

  const pageNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = e.target.value ? Number(e.target.value) - 1 : 0;
    if (page < table.getPageCount()) {
      table.setPageIndex(page);
    }
  };

  const ToggleFilter = (index: number) => {
    tempFilter[index] = !tempFilter[index];
    setTempFilter([...tempFilter]);
  };

  const pageDataChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    table.setPageSize(Number(e.target.value));
  };
  React.useEffect(() => {
    table.setPageSize(Number(pagiantionPages[0]));
  }, []);

  return (
    <div data-testid={dataTestId}>
      {data.length > 0 || headerData.length > 0 ? (
        <div className={Styles.parent_container}>
          {globalFilterProps ? (
            <GlobalFilterFns
              type='search'
              searchIcon={true}
              value={globalFilter}
              onChange={(value) => setGlobalFilter(String(value))}
              wrapperClass={`${Styles.globalFilter} ${globalFilterStyle}`}
              placeholder='Search all columns'
            />
          ) : null}
          <table className={`${Styles.table_Container} ${WrapperTableContainerStyle}`}>
            <thead className={`${Styles.table_head} ${WrapperTableHeadStyle}`}>
              {headerData.length > 0 ? (
                table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header, index) => (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        className={`${Styles.table_th} `}
                      >
                        <div className={`${Styles.headersContainer} `}>
                          <Button
                            ariaLabel='header buttons'
                            className={`${Styles.headersButton}`}
                            {...{
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            <span className={`${Styles.headerText} `}>
                              {flexRender(header.column.columnDef.header, header.getContext())}
                            </span>
                            <span className={`${Styles.SortingIcon} `}>
                              {{
                                asc: <Iconography icon='uparrow' color='white' size='10' />,
                                desc: <Iconography icon='downarrow' color='white' size='10' />,
                              }[header.column.getIsSorted() as string] ?? null}
                            </span>
                          </Button>
                          {header.column.getCanFilter() ? (
                            <div className={Styles.filterWrapper}>
                              <Button
                                variant='iconbutton'
                                icon={Icons.filter}
                                iconcolor={header.column.getFilterValue() ? 'black' : 'white'}
                                iconSize='13'
                                ariaLabel='icon button'
                                className={Styles.filtericon}
                                onClick={() => ToggleFilter(index)}
                              />
                              {tempFilter[index] && (
                                <ColumnFilter
                                  id={header.id}
                                  column={header.column}
                                  table={table}
                                  className={Styles.columnfilter}
                                />
                              )}
                            </div>
                          ) : null}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))
              ) : (
                <span className={Styles.NoData}>{tableHeadErrormessage}</span>
              )}
            </thead>
            {data.length > 0 ? (
              <tbody className={`${Styles.table_body} ${WrapperTableBodyStyle}`}>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className={`${Styles.table_data} `}>
                        <span>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ) : (
              <span className={`${Styles.NoData}`}>{tableDataErrorMessage}</span>
            )}
          </table>
          {isPaginationRequired && headerData.length > 0 ? (
            <div className={`${Styles.PaginationContainer} ${WrapperPaginationContainerStyle}`}>
              <div className={`${Styles.page_number_container} `}>
                <div className={`${Styles.pagenumber}`}>
                  Page
                  <strong className={`${Styles.pageoutof} `}>
                    {table.getState().pagination.pageIndex + 1}
                  </strong>
                  of {table.getPageCount()}
                </div>
                <div className={`${Styles.page_bar} ${Styles.gotopage}`}>
                  Go to page:
                  <Input
                    arialabel='go-to-page'
                    placeholder={placeHolder}
                    type='number'
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={pageNumberChangeHandler}
                    className={`${Styles.inputgotopage}`}
                  />
                </div>
              </div>
              <div className={Styles.Pagination_Button_select}>
                <Button
                  ariaLabel='first page'
                  className={`${Styles.Pagination_Button} `}
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  <span className={`${Styles.Pagination_Buttonvalue} `}>First</span>
                </Button>
                <Button
                  ariaLabel='previous page'
                  className={`${Styles.Pagination_Button} `}
                  onClick={table.previousPage}
                  disabled={!table.getCanPreviousPage()}
                >
                  <span className={`${Styles.Pagination_Buttonvalue} `}>Prev</span>
                </Button>
                <Button
                  ariaLabel='next page'
                  className={Styles.Pagination_Button}
                  onClick={table.nextPage}
                  disabled={!table.getCanNextPage()}
                >
                  <span className={`${Styles.Pagination_Buttonvalue} `}>Next</span>
                </Button>
                <Button
                  ariaLabel='last page'
                  className={`${Styles.Pagination_Button}`}
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  <span className={`${Styles.Pagination_Buttonvalue} `}>Last</span>
                </Button>

                <select
                  aria-label='Select'
                  data-testid='select'
                  className={`${Styles.Select_Page_Size} `}
                  value={table.getState().pagination.pageSize}
                  onChange={(value) => pageDataChangeHandler(value)}
                >
                  {pagiantionPages.map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <span className={`${Styles.NoData}`}>{dataNotFoundMessage}</span>
      )}
    </div>
  );
};

export default Table;
