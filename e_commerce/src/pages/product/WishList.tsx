
import DefaultLayout from "@/components/layout/DefaultLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSection from "@/components/Product/ProductSection";
import { products } from "@/static/data";
import ProductCard from "@/components/Product/ProductCard";


function Wishlist() {


  const productSettings = {
    infinite: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 4, 
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1304,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  
  
  
  return (
    <DefaultLayout>
 
      <div>
        <ProductSection hidePagination={true} label="" title={<div className="flex justify-between w-full md:gap-[48px] items-center">
          <p className=" text-[20px] leading-[48px]">Wishlist (4)</p>
          <button className="py-[16px] px-[48px] border rounded-[4px] border-[#00000080]">Move all To Bag</button>
        </div>}>
          <div className="py-[20px]">
          <Slider className="w-full slider" {...productSettings}>
            {
              products.map((product) => {
                return (
                  <ProductCard showDelete hideView hideWish hideRating {...product} />
                )
              })
          }
            </Slider>
          
          </div>
         
          </ProductSection>
      </div>
 
      <div>
        <ProductSection noBorder hidePagination={true} label=" " title={<div className="flex mt-[-50px] w-full justify-between md:gap-[48px] items-center">
          <p className="font-[400] text-[20px] pl-[30px] ">Just For You</p>
          <button className=" rounded-[4px]  border-[1.5px] border-[#00000080] flex items-center py-[16px] px-[48px]">
                See all

              </button>
        </div>}>
          <div className="py-[20px]">
          <Slider className="w-full slider" {...productSettings}>
            {
              products.map((product) => {
                return (
                  <ProductCard hideWish hideRating {...product} />
                )
              })
          }
            </Slider>
            
          </div>

         
        </ProductSection>
     
   
  
      </div>
    </DefaultLayout>
  );
}

export default Wishlist;
