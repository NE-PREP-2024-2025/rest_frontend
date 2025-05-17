import { type productCategory } from "@/types"
import { Link } from "react-router-dom" 

interface categoryType extends productCategory{
  active?: string | undefined, 
}

function ProductCategory(props:categoryType) {
  return (
    <Link to={props.href} className={`w-[calc(100%-14px)] ml-[7px] h-[200px] md:w-[170px] gap-[12px] stroke-black hover:stroke-white md:h-[145px] flex flex-col justify-center items-center hover:text-white hover:bg-primary hover:border-none rounded-[5px]   border-[1px] border-[#0000004D] ${props.active==props.href.toLowerCase()?"!text-white stroke-white bg-primary border-none":""}`}>
      {
     props.icon
      }
      <p className="text-[16px]">{props.title}</p>
    </Link>
  )
}
export default ProductCategory