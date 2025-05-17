import BreadCrumb from '@/components/BreadCrumb'
import PrimaryButton from '@/components/Button/PrimaryButton'
import CustomInput from '@/components/CustomInput'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { cart } from '@/static/data'
import  { useState } from 'react'

function CheckOut() {
  const [firstName, setFirstName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [streetNumber, setStreetNumber] = useState("")
  const [address,setAddress]=useState("")
  const [city, setCity] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const totalPrice=cart.slice(0,2).reduce((sum,item)=>sum+item.price,0)
  
  return (
    <DefaultLayout>
       <div className='py-[30px]'>
        <BreadCrumb items={["Home","Cart","Checkout"]} />
      </div>
      <p className='text-[36px] pb-[48px]'>Billing Details</p>
      <div className='flex items-start gap-[40px] w-full flex-wrap'>
        
        <div className='flex gap-[32px] lg:w-[50%] w-full  flex-col'>
          <CustomInput value={firstName} setValue={setFirstName} label='First Name' />
          <CustomInput value={companyName} setValue={setCompanyName} label='Company Name' />
          <CustomInput value={streetNumber} setValue={setStreetNumber} label='Street Address*' />
          <CustomInput value={address} setValue={setAddress} label='Apartment, floor, etc. (optional)' />
          <CustomInput value={city} setValue={setCity} label='Town/City' />
          <CustomInput value={phoneNumber} setValue={setPhoneNumber} label='Phone Number' />
          <CustomInput value={email} setValue={setEmail} label='Email Address' />
        </div>
        <div className='flex flex-col flex-1 gap-[32px] pt-[28px] '>
          <div className='flex w-full items-center flex-col'>
            
              {cart.slice(0, 2).map((item) => {
                return (
                  <div className='flex items-center justify-between py-[16px] w-full '>
                  <div className="flex items-center gap-[20px]">
                  
                  <img src={item.image} className="h-[60px]" />
                  <p>{item.name}</p>
                    </div>
                    <p className='font-[400] text-[16px]'>${item.price}</p>
                    </div>
                )
              })}
         


<div className='flex items-center justify-between py-[16px] w-full border-b-[1px] border-black'>
  <p className='font-[400] text-[16px]'>Subtotal:</p>
              <p className='font-[400] text-[16px]'>${totalPrice}</p>
</div>
<div className='flex items-center justify-between py-[16px] w-full border-b-[1px] border-black'>
  <p className='font-[400] text-[16px]'>Shipping:</p>
  <p className='font-[400] text-[16px]'>Free</p>
</div>
<div className='flex items-center justify-between py-[16px] w-full '>
  <p className='font-[400] text-[16px]'>Total:</p>
              <p className='font-[400] text-[16px]'>${totalPrice}</p>
</div>

</div>
  
          
        <PrimaryButton title='Place Order'/>
        </div>
      
      </div>
    </DefaultLayout>
  )
}

export default CheckOut