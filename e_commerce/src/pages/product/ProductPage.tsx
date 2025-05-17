
import BreadCrumb from "@/components/BreadCrumb"
import PrimaryButton from "@/components/Button/PrimaryButton"
import DefaultLayout from "@/components/layout/DefaultLayout"
import {  products, singleProduct } from "@/static/data"
import {useState} from "react"
import ProductCard from "@/components/Product/ProductCard"
import ProductSection from "@/components/Product/ProductSection"

function ProductPage() {
  
  const [activeImage, setActiveImage] = useState(singleProduct.image)
  const [activeColor, setActiveColor] = useState(singleProduct.color ? singleProduct.color[0] : "")
  const [activeSize,setActiveSize]=useState(singleProduct.size?singleProduct.size[0]:"")
  return (

    <DefaultLayout>
      <div className="pt-[60px]">

      </div>
      <BreadCrumb items={["Product", "Gaming","Havic HV G-92 Gamepad"]} />
      <div className="flex lg:flex-row py-[50px] gap-[30px] flex-col">
        <div className="flex lg:w-[calc(60%] md:flex-row flex-col w-full items-start  gap-[30px]">
          {/* product images */}
          <div className="flex min-w-[112px] md:w-[10%] w-full overflow-auto  flex-row  md:flex-col gap-[16px]"
          >
            {singleProduct.otherImages?.map((image) => {
              return (
                <div className="bg-secondary rounded-[4px] cursor-pointer p-[25px]" onClick={()=>{setActiveImage(image)}}>
                  <img
                  key={image}
                  src={image}
                  className=" object-contain w-full min-w-[82px] rounded-[4px]"
                />
                  </div>
                
              )
            })}
          </div>
          <div className="bg-secondary rounded-[4px] md:w-[80%] w-full h-[600px]  flex justify-center items-center p-[25px]">

          <img
                  key={activeImage}
                  src={activeImage}
                  className=" object-contain w-full  rounded-[4px]"
                />
          </div>

          {/* product main image */}

        </div>
        <div className="flex flex-col lg:w-[40%] w-full gap-[16px]">
          <p className="text-[24px] font-[600]">{singleProduct.name}</p>
          <div className="w-full">
            <div className="flex w-full gap-[20px] items-center justify-normal ">
            <div className="py-[5px]   flex gap-[10px]">
            
            <div className="flex items-center min-w-fit w-[140px] max-w-fit gap-[2px]">
                {
                  [1, 2, 3, 4, 5].map(() => {
                    return (
            <img src="/icons/star.svg" className="w-[20px]"/>
          )
        })
                }
           
              </div>
              <p className="text-[#00000060] mt-[2px] font-[400]">
                ({singleProduct.rateNumber} reviews) 
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
                <p>|</p>
                {singleProduct.quantity&&singleProduct.quantity>0?<p className="text-[#00FF66] min-w-fit">In Stock</p>:<p>Out of stock</p>}
                <p></p>
       </div>
            </div>

          
          </div>
          <p className="text-[24px]">${singleProduct.price}</p>
          <p className="text-[16px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="flex items-center gap-[8px]">

            <p className="text-[20px]">Colours:</p>
            {singleProduct.color?.map((color) => {
              return (
                
              <button onClick={()=>{setActiveColor(color)}}  className="w-[20px] cursor-pointer flex items-center justify-center  h-[20px] rounded-full" style={{backgroundColor:activeColor==color?"transparent":color,border:activeColor==color?"2px solid black":"none"}}>
                  <div className="rounded-full w-[12px] h-[12px] " style={{backgroundColor:color}}>
                    </div>
                </button>
              )
            })}
          </div>
          <div className="flex items-center gap-[8px]">

<p className="text-[20px]">Sizes:</p>
{singleProduct.size?.map((size) => {
  return (
    
  <button onClick={()=>{setActiveSize(size)}}  className={`w-[32px] text-[12px] hover:text-white hover:bg-primary !hover:border-none rounded-[4px] cursor-pointer flex items-center justify-center white  h-[32px] ${activeSize!=size?"border-[1px]  border-[#00000080] hover:border-none":""}  `} style={{backgroundColor:activeSize==size?"#DB4444":"",color:activeSize==size?"white":""}}>
      {size}
    </button>
  )
})}
          </div>
          <div className="flex items-center md:flex-row flex-wrap flex-col gap-[16px] w-full">
            <div className="flex items-center w-full"
            >
              <button className="p-[8px] h-[54px] w-[54px] flex items-center justify-center border-[1px] border-[#00000080] rounded-l-[4px]">
<img src="/icons/icon-minus.svg"/>
              </button>
              <p className="flex-1 border-y w h-[54px] flex items-center justify-center border-[#00000080] text-center text-[20px]">2</p>
              <button className="p-[8px] h-[54px] w-[54px] flex items-center justify-center bg-primary rounded-r-[4px]">
              <img src="/icons/icons-plus-white.svg"/>
              </button>
            </div>
            <div className="w-full">

            <PrimaryButton title="Buy Now" /> 
            </div>

          </div>
          <div className="w-full border-[1px] border-[#00000080]  rounded-[4px]">
            <div className="flex p-[20px] gap-[16px] items-center">
              <img src="/icons/icon-delivery-black.svg" />
              <div className="flex gap-[8px] flex-col">
                <p className="font-[500] text-[16px]">Free Delivery</p>
                <p className="text-[12] font-[500] underline">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="w-full h-[1.5px] bg-[#00000040]"></div>
            <div className="flex p-[20px] gap-[16px] items-center">
              <img src="/icons/Icon-return.svg" />
              <div className="flex gap-[8px] flex-col">
                <p className="font-[500] text-[16px]">Return Delivery</p>
                <p className="text-[12] font-[500] underline">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
       
        </div>
      </div>
      <ProductSection label="Categories" noBorder title={<></>} hidePagination>
        <div className="grid grid-cols-1 gap-[20px] pt-[60px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
              products.slice(0,4).map((product) => {
                return (
                  <ProductCard {...product} />
                )
              })
          }
          
       </div>
     </ProductSection>
    </DefaultLayout>
  )
}

export default ProductPage