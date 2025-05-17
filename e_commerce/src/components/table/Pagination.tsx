import { useState } from 'react';
const Pagination = ({ totalPages }: { totalPages: number }) => {
  const width = window.innerWidth;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  const renderPagination = () => {
    const pages = [];
    if (currentPage > 1) {
      pages.push(
        <button
          key="1"
          className={`w-10 h-10 rounded-full ${
            currentPage === 1 ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => handlePageClick(1)}
        >
          1
        </button>
      );
      pages.push(
        <span key="ellipsis" className="flex items-center justify-center w-10 h-10">...</span>
      );
    }
    for (let i = currentPage<totalPages-1?currentPage:totalPages-4; i <= Math.min(currentPage+Math.min((width/200),4), totalPages); i++) {
      pages.push(
        <button
          key={i}
          className={`w-10 h-10 rounded-full ${
            currentPage === i ? 'bg-primary-blue text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

   
    if (totalPages > 4&&currentPage<totalPages-4) {
      pages.push(
        <span key="ellipsis" className="flex items-center justify-center w-10 h-10">...</span>
      );
      pages.push(
        <button
          key={totalPages}
          className={`w-10 h-10 rounded-full ${
            currentPage === totalPages ? ' bg-primary-blue text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex pt-[20px] w-full justify-between items-center">
    <button onClick={()=>{setCurrentPage((curr)=>curr>1?curr-1:curr)}} className="h-[46px] rounded-full bg-secondary flex items-center justify-center  w-[46px]" >
        <img src="/icons/icons_arrow-left.svg" />
        </button>
       
      <div className="flex gap-2">

      {renderPagination()}
    </div>
      <button onClick={()=>{setCurrentPage((curr)=>curr<totalPages?curr+1:curr)}} className="h-[46px] rounded-full bg-secondary flex items-center justify-center  w-[46px]" >
        <img src="/icons/icons_arrow-right.svg"/>
        </button>
    </div>
    
  );
};

export default Pagination;
