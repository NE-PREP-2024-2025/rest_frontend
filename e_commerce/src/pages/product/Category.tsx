
import DefaultLayout from "@/components/layout/DefaultLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSection from "@/components/Product/ProductSection";
import { categoryProducts } from "@/static/data";
import ProductCard from "@/components/Product/ProductCard";
import ProductCategory from "@/components/Product/ProductCategory";
import { productCategoryItems } from "@/components/Product/ProductCategoryItem";
import { useLocation } from "react-router-dom";
import Pagination from "@/components/table/Pagination";
import { useRef } from "react";

function CategoryPage() {
  const categorySlider = useRef<Slider>(null);


  const categorySettings = {
    infinite: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 6, 
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
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
  const location = useLocation();
  return (
    <DefaultLayout>


      <div>
        <ProductSection
          sliderRef={categorySlider}
          label="Categories"
          title={
            <div className="flex md:gap-[48px] gap-[20px] items-center">
              <p className="font-[600] text-[36px] leading-[48px]">
                Browse By Category
              </p>
            </div>
          }
        >
          <div className="py-[50px]">
            <Slider ref={categorySlider} className="w-full slider" {...categorySettings}>
              {productCategoryItems.map((category) => {
                return (
                  <ProductCategory active={location.pathname} {...category} />
                );
              })}
            </Slider>
          </div>
        </ProductSection>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:gap-[20px] pt-[60px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryProducts.map((product) => {
            return <ProductCard {...product} />;
          })}
        </div>
      </div>
      <div className="flex pt-[20px] justify-between items-center">
        <Pagination totalPages={12} />
      </div>
    </DefaultLayout>
  );
}

export default CategoryPage;
