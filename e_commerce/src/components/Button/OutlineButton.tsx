import { type MouseEventHandler } from "react"


function OutlineButton({ title, onClick }: { title: string, onClick?: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onClick?onClick:()=>{}} className='py-[16px] flex items-center justify-center rounded-[4px] px-[48px] md:w-fit w-full border-[#00000080] border-[1px] text-black font-[600]'>
    {title}
  </button>
  )
}

export default OutlineButton