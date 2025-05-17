// import { useState } from "react";
import { type cartItems } from "@/types";

function ItemTable({ items }: { items: cartItems[] }) {
  // const [cart, setCart] = useState<cartItems[]>(items);



  return (
    <table
      className="w-full min-w-[800px]"
      style={{
        borderSpacing: "0 40px",
        borderCollapse: "separate",
      }}
    >
      <thead>
        <tr className="shadow-[0px_1px_13px_0px_#0000000D] h-[72px]">
          <th className="text-[16px] font-[400] text-start pl-[40px]">Product</th>
          <th className="text-[16px] font-[400] text-center w-[24%]">Price</th>
          <th className="text-[16px] font-[400] text-center w-[24%]">Quantity</th>
          <th className="text-[16px] font-[400] text-end pr-[40px]">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr
              key={item.id}
              className="shadow-[0px_1px_13px_0px_#0000000D] cart-item h-[102px]"
            >
              <td>
                <div className="flex pl-[40px] relative items-center gap-[20px]">
                  <img
                    src="/icons/icon-cancel-1.svg"
                    className="absolute left-[25px] top-[-10px] cancel-icon"
                    
                  />
                  <img src={item.image} className="h-[60px]" />
                  <p>{item.name}</p>
                </div>
              </td>
              <td className="text-center">
                <p>${item.price}</p>
              </td>
              <td className="flex justify-center h-[102px] items-center">
                <div className="border-[1.5px] gap-[20px] border-[#00000066] rounded-[4px] w-fit h-[44px] px-[20px] flex items-center justify-center">
                <p>{item.quantity}</p>
                  <div className="flex flex-col">
                  <button
                    
                    className="border-none bg-transparent"
                    >
                      
                    <img src="/icons/Drop-Up-Small.svg" alt="Increase Quantity" />
                    </button>
                    <button
                    
                    className="border-none bg-transparent"
                  >
                    <img src="/icons/Drop-Down-Small.svg" alt="Decrease Quantity" />
                  </button>
                 </div>
                  
                 
                  
                </div>
              </td>
              <td className="text-end pr-[42px]">
                <p>${item.price * item.quantity}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ItemTable;
