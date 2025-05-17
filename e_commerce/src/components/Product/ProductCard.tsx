import {type Product } from "@/types"

import { Link } from "react-router-dom";
interface productProps extends Product{
  hideView?: boolean,
  hideWish?: boolean,
  showDelete?: boolean,
  hideRating?: boolean,
  isNew?:boolean
}

function ProductCard(props:productProps) {

  return (
    <div className="product-card mb-2">

    <Link to={`/product/${props.id}`} >
    <div  className="md:min-w-[270px] w-full md:px-[20px]  ">
      <div className="bg-secondary rounded-[4px] relative flex items-center justify-center w-full h-[250px]">

        <img src={props.image} className="h-[180px] md:min-w-[190px] w-full object-contain  rounded-[4px]" />
        <div className="flex flex-col absolute top-[12px] right-[12px] items-center gap-[8px] ">
          {!props.hideWish&& <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">

<img src="/icons/heart.svg"/>
          </div>}
          {!props.hideView&& <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">

<img src="/icons/eye.svg"/>
</div>}
       
         
          {props.showDelete&& <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">

<img src="/icons/icon-delete.svg"/>
</div>}
        </div>
        
      
          { props.discount&&<div className="bg-primary  text-[12px]  rounded-[4px] text-white p-[4px] w-[55px] flex items-center justify-center absolute top-[12px] left-[12px]">
-{props.discount}%
        </div>}
        { props.isNew&&<div className="bg-primary  text-[12px]  rounded-[4px] text-white p-[4px] w-[55px] flex items-center justify-center absolute top-[12px] left-[12px]">
New
</div>}
        

        
        
      </div>
      <p className="py-[10px] text-[16px] font-[500]">{props.name}</p>
      <div className="flex items-center gap-[12px]">
        <p className="text-primary font-[600]">${props.price}</p>
        { props.originalPrice&&<p className="text-[#00000060] font-[600]">${props.originalPrice}</p>}
       

      </div>
     
     
   

    </div>
      </Link>
      <button onClick={()=>{alert("Hello")}}   className=" font-[600] z-[400] rounded-md    add-to-cart items-center justify-center w-full !bg-black text-white h-[41px] bottom-0 rounded-b-[4px]">
          Add to cart
        </button>
    </div>
  )
}

export default ProductCard