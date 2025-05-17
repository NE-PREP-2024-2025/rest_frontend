import {type UploadedFile } from '@/types';

import React, { useState } from 'react';

interface FileUploadProps {
  files: UploadedFile[];
  setFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
}

const FileUpload: React.FC<FileUploadProps> = ({ files, setFiles }) => {
  
  const [dragging, setDragging] = useState(false); 
  console.log(files)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newFiles: UploadedFile[] = Array.from(e.target.files).map((file, index) => ({
      file,
      id: `${file.name}_${index}`,
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    if (!e.dataTransfer.files) return;

    const droppedFiles: UploadedFile[] = Array.from(e.dataTransfer.files).map((file, index) => ({
      file,
      id: `${file.name}_${index}`,
    }));

    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  // const removeFile = (id: string) => {
  //   setFiles((prevFiles) => prevFiles.filter((f) => f.id !== id));
  // };

  return (
    <div className="py-4 cursor-pointer w-full  mx-auto">
      <div
        className={`border-dashed border-2 ${dragging ? 'border-gray-300' : 'border-[#EA4335]'} bg-[#EA433508] h-[680px] flex justify-center items-center gap-[12px] flex-col rounded-lg p-6 text-center`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center flex-col">
         <svg width="83" height="84" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.5013 54.5215C42.1892 54.5215 42.8489 54.2483 43.3353 53.7618C43.8217 53.2754 44.095 52.6157 44.095 51.9278V13.9795L49.905 20.7613C50.3526 21.2841 50.9896 21.6077 51.6757 21.6609C52.3619 21.7141 53.0411 21.4925 53.5639 21.0449C54.0867 20.5973 54.4103 19.9603 54.4635 19.2741C54.5167 18.588 54.2951 17.9088 53.8475 17.386L43.4725 5.28179C43.229 4.99705 42.9267 4.76844 42.5864 4.61169C42.2461 4.45495 41.8759 4.37378 41.5013 4.37378C41.1266 4.37378 40.7564 4.45495 40.4161 4.61169C40.0758 4.76844 39.7735 4.99705 39.53 5.28179L29.155 17.386C28.9334 17.6448 28.7649 17.9448 28.6592 18.2688C28.5535 18.5928 28.5127 18.9344 28.539 19.2741C28.5653 19.6139 28.6583 19.9452 28.8127 20.249C28.967 20.5528 29.1797 20.8232 29.4386 21.0449C29.6975 21.2665 29.9974 21.435 30.3214 21.5407C30.6454 21.6464 30.987 21.6872 31.3268 21.6609C31.6665 21.6345 31.9978 21.5415 32.3016 21.3872C32.6054 21.2328 32.8759 21.0202 33.0975 20.7613L38.9075 13.983V51.9278C38.9075 53.3595 40.0695 54.5215 41.5013 54.5215Z" fill="#EA4335"/>
<path d="M55.3337 31.1776C52.9059 31.1776 51.692 31.1776 50.8171 31.7621C50.4409 32.0138 50.1178 32.3369 49.866 32.7131C49.2816 33.5881 49.2816 34.8019 49.2816 37.2297V51.9276C49.2816 53.9913 48.4618 55.9705 47.0025 57.4298C45.5432 58.8891 43.564 59.7089 41.5003 59.7089C39.4366 59.7089 37.4574 58.8891 35.9982 57.4298C34.5389 55.9705 33.7191 53.9913 33.7191 51.9276V37.2297C33.7191 34.8019 33.7191 33.5881 33.1346 32.7131C32.8829 32.3369 32.5598 32.0138 32.1836 31.7621C31.3086 31.1776 30.0947 31.1776 27.667 31.1776C17.8868 31.1776 12.9933 31.1776 9.95687 34.2175C6.91699 37.2539 6.91699 42.1405 6.91699 51.9242V55.3825C6.91699 65.1696 6.91699 70.0562 9.95687 73.0961C12.9933 76.1359 17.8868 76.1359 27.667 76.1359H55.3337C65.1138 76.1359 70.0074 76.1359 73.0438 73.0961C76.0837 70.0562 76.0837 65.1661 76.0837 55.3859V51.9276C76.0837 42.144 76.0837 37.2539 73.0438 34.2175C70.0074 31.1776 65.1138 31.1776 55.3337 31.1776Z" fill="#EA4335"/>
</svg>

          <p className='font-[600] text-[30px]'>Upload image</p>
          <p className='text-[#000F2378] flex items-center justify-center text-[24px] font-[400]'>

          Drag & Drop or click to upload file
          </p>
        </label>
        
      </div>

      
      
    </div>
  );
};

export default FileUpload;
