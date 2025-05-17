import BreadCrumb from "@/components/BreadCrumb"
import PrimaryButton from "@/components/Button/PrimaryButton"
import CustomInput from "@/components/CustomInput"
import FileUpload from "@/components/FileUpload"
import DefaultLayout from "@/components/layout/DefaultLayout"
import {type UploadedFile } from "@/types"
import { useState } from "react"

function AddProduct() {
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [brandName, setBrandName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImages] = useState<UploadedFile[]>([])
  
  return (
    <DefaultLayout>
      <div className="pt-[60px]">

        <BreadCrumb items={["Home", "Product", "Add product"]} />
        <p className="text-[36px] py-[48px]">Add Product</p>
        <div className="flex gap-[55px]  w-full lg:flex-row flex-col">
          <div className="flex flex-col flex-1 w-full gap-[32px]">
            <CustomInput value={name} setValue={setName} isRequired label="Item Name" />
            <CustomInput value={quantity} setValue={setQuantity} label="Quantity" />
            <CustomInput value={brandName} setValue={setBrandName} label="Brand Name" />
            <CustomInput value={price} setValue={setPrice} label="Price" />
            <div className="flex flex-col rounded-[4px] gap-[4px] ">
              <label className="text-[#00000040]">Description</label>
              <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="h-[297px] w-full bg-secondary">

              </textarea>
            </div>
            
            
            
          </div>
          <div className="flex flex-1 w-full flex-col">
            <FileUpload files={image} setFiles={setImages} />
            <div>

            <PrimaryButton title="Add Product" className="md:w-full" />
            </div>
          </div>
          
        </div>
        
      </div>
    </DefaultLayout>
  )
}

export default AddProduct