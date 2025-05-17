import {
  createColumnHelper,
} from '@tanstack/react-table';
import ReusableTable from '@/components/common/ReusableTable';
import { productTableData } from '@/static/data';

const LatestProductsTable = () => {


  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor('product', {
      header: 'Products',
      cell: (info) => <div className='flex items-center gap-[20px] w-full ml-[30px]'>
        <img src='/images/products/product_1.png' className='w-[59px] h-[59px] object-cover rounded-full'></img>
        {info.getValue()}
      </div>,
    }),
    columnHelper.accessor('qty', {
      header: 'QTY',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('revenue', {
      header: 'Revenue',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('netProfit', {
      header: 'Net Profit',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('action', {
      header: 'Actions',
      cell: () => <div className='flex w-full justify-center px-[20px] items-center gap-[20px]'>
        <img src='/icons/edit-3.svg'/>
        <img src='/icons/trash-2.svg'/>
        <img src='/icons/more-horizontal.svg'/>
      </div>,
    }),
  ];

  return <ReusableTable data={productTableData} columns={columns} />;
};

export default LatestProductsTable;
