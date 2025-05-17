
import BreadCrumb from "@/components/BreadCrumb"
import PrimaryButton from "@/components/Button/PrimaryButton"
import DefaultLayout from "@/components/layout/DefaultLayout"
import { useNavigate } from "react-router-dom"

function NotFoundPage() {
  const navigate=useNavigate()
  return (
    <DefaultLayout>
      <div className="pt-[60px]">

      </div>
      <BreadCrumb items={["Home", "404"]} />
      <div className="h-[calc(100vh-500px)] min-h-fit w-full pt-[20px] flex gap-[20px] justify-center items-center flex-col">
        <p className="md:text-[101px] text-[40px] text-center font-[500]">404 Not Found</p>
        <p>Your visited page not found. You may go home page.</p>
      <PrimaryButton title="Back to home page" onClick={()=>{navigate("/")}}/>
      </div>
     
    </DefaultLayout>
  )
}

export default NotFoundPage