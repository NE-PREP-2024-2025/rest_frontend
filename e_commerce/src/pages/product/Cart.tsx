import BreadCrumb from '@/components/BreadCrumb'
import OutlineButton from '@/components/Button/OutlineButton'
import PrimaryButton from '@/components/Button/PrimaryButton'
import ItemTable from '@/components/Cart/ItemTable'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { cart } from '@/static/data'
import { useNavigate } from 'react-router-dom'


function  Cart() {
  const navigate=useNavigate()
  return (
    <DefaultLayout>
      <div className='py-[30px]'>
        <BreadCrumb items={["Home","Cart"]} />
      </div>
      <div className='w-full no-scroll overflow-auto p-[20px] lg:p-0'>

      <ItemTable items={cart} />
      </div>
      <div className='flex w-full gap-[20px] flex-wrap justify-between'>
        <OutlineButton title='Return To Shop'></OutlineButton>
 
      </div>
      <div className='flex  gap-[20px] pt-[80px] items-start flex-wrap justify-between'>
      <div className="flex items-center flex-wrap gap-[20px]">
   
        </div>
        <div className='px-[24px] md:w-[470px] w-full  py-[32px] rounded-[4px] border-[1.5px] border-[#000000]'>
          <p className='font-[500] text-[20px]'>Cart Total</p>
          <div className='flex w-full items-center flex-col'>

            <div className='flex items-center justify-between py-[16px] w-full border-b-[1px] border-black'>
              <p className='font-[400] text-[16px]'>Subtotal:</p>
              <p className='font-[400] text-[16px]'>$1750</p>
            </div>
            <div className='flex items-center justify-between py-[16px] w-full border-b-[1px] border-black'>
              <p className='font-[400] text-[16px]'>Shipping:</p>
              <p className='font-[400] text-[16px]'>Free</p>
            </div>
            <div className='flex items-center justify-between py-[16px] w-full '>
              <p className='font-[400] text-[16px]'>Total:</p>
              <p className='font-[400] text-[16px]'>$1750</p>
            </div>
            <PrimaryButton title='Procees to checkout' onClick={()=>{navigate("/cart/checkout")}}/>
          </div>
          
        </div>
      </div>
      
    </DefaultLayout>
  )
}

export default Cart