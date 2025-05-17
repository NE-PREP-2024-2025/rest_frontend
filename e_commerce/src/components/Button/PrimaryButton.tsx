import { type MouseEventHandler } from "react"


function PrimaryButton({title,onClick,className}:{title:string,onClick?:MouseEventHandler<HTMLButtonElement>,className?:string}) {
  return (
    <button onClick={onClick ? onClick : () => { }} className={`py-[16px] flex items-center justify-center rounded-[4px] px-[48px] min-w-fit lg:w-full w-full bg-primary text-white ${className}`}>
    {title}
  </button>
  )
}

export default PrimaryButton