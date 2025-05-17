import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

interface TableProps {
  data: any[];
  columns: any[];
}

const ReusableTable: React.FC<TableProps> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className='min-w-[800px]' style={{ width: '100%', borderCollapse: 'collapse', borderRadius: "10.67px" }}>
      <thead style={{ borderRadius: "30px 30px 0 0" }}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} style={{
            borderRadius: "10.67px",
            backgroundColor: "transparent"
          }}>
            {headerGroup.headers.map((header, index) => (
              <th
                key={header.id}
                style={{
                  borderBottom: '2px solid #8E95A9',
                  background: '#f2f2f2',
                  height: '48px',
                  maxWidth: "fit-content",
                  borderRadius: `${index === 0 ? "10.67px 0 0 0" : index === headerGroup.headers.length - 1 ? "0 10.67px 0 0" : ""}`,
                  color: '#8E95A9',
                  padding: '10px',
                }}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, rowIndex) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                style={{
                  padding: '10px',
                  height: '65px',
                  color: "#555F7E",
                  fontSize: '19px',
                  borderBottom: `${rowIndex == table.getRowModel().rows.length - 1 ? "" : "1px solid #ddd"}`,
                  textAlign: 'center',
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReusableTable;

