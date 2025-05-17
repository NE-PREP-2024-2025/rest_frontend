
import DefaultLayout from "@/components/layout/DefaultLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categoryProducts } from "@/static/data";
import ProductCard from "@/components/Product/ProductCard";
import Pagination from "@/components/table/Pagination";

function Home() {

  return (
    <DefaultLayout>

      <div className="flex flex-col pt-16">
      <p className=" md:text-[32px] text-[28px] font-semibold pl-[30px] ">Products</p>

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
      </div>
      
    </DefaultLayout>
  );
}

export default Home;
