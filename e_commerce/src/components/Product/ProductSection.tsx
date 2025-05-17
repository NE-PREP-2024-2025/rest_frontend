import {  type ReactNode } from "react"
import Slider from "react-slick";

function ProductSection({label,title,children,hidePagination=false,noBorder=false,sliderRef}:{label:string,title:ReactNode,children:ReactNode,hidePagination?:boolean,noBorder?:boolean,sliderRef?:React.RefObject<Slider>}) {
  return (
    <div className={`py-[80px] w-full border-b-[1.5px] border-[#00000060] ${noBorder?"border-none":" border-b-[1.5px]"} `}>
      <div className="flex  items-center gap-[16px] ">
        {label&& <div className="h-[40px] w-[20px] rounded-[4px] bg-primary"></div>}
       
        <p className="text-primary text-[16px] font-[600]">
          {label}
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-between">
        {title}
        {!hidePagination && <div className="flex md:justify-normal justify-between items-center gap-[8px]">
        
          <button onClick={()=>{sliderRef?.current?.slickPrev()}} className="h-[46px] rounded-full bg-secondary flex items-center justify-center  w-[46px]" >
          <img src="/icons/icons_arrow-left.svg" />
          </button>
          <button onClick={()=>{sliderRef?.current?.slickNext()}} className="h-[46px] rounded-full bg-secondary flex items-center justify-center  w-[46px]" >
          <img src="/icons/icons_arrow-right.svg"/>
          </button>
          
        
        </div>}
        
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ProductSection