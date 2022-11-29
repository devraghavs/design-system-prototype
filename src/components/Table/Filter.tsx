import React from 'react';
import Input from '../Input';
import styles from './Table.module.css';
import { Column } from '@tanstack/react-table';

export const ColumnFilter = ({
  column,
  table,
  className,
  id,
}: {
  column: Column<any, any>;
  table: any;
  className?: string;
  id: string;
}) => {
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);
  const columnFilterValue = column.getFilterValue();

  return (
    <div className={className}>
      <Input
        type='search'
        id={id}
        searchIcon={false}
        arialabel='column-search-bar'
        value={
          typeof firstValue === 'number'
            ? (columnFilterValue as [number, number])?.[1] ?? ''
            : ((columnFilterValue ?? '') as string)
        }
        onChange={(e) =>
          typeof firstValue === 'number'
            ? column.setFilterValue(() => [e.target.value, e.target.value])
            : column.setFilterValue(e.target.value)
        }
        placeholder={'Search...'}
        className={`${styles.searchbar} `}
      />
    </div>
  );
};

export const GlobalFilterFns = ({
  value: initialValue,
  type,
  searchIcon,
  onChange,
  placeholder,
  wrapperClass,
}: {
  value: string;
  type: string;
  searchIcon: boolean;
  onChange: (value: string) => void;
  placeholder: string;
  wrapperClass: string;
}) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Input
      type={type}
      id='global-search-input'
      searchIcon={searchIcon}
      placeholder={placeholder}
      wrapperClass={wrapperClass}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      arialabel='global-search-bar'
    />
  );
};
