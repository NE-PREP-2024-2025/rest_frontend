import { type ReactNode } from "react"
import { Link } from "react-router-dom"

function BadgeIcon({children,count,link}:{children:ReactNode,count?:number,link:string}) {
  return (
    <Link to={link} className="relative">
      {children}
      {count&& <div className="rounded-full absolute right-[-4px] top-[-4px] w-[16px] text-[12px] h-[16px] bg-primary text-white flex itemc-center justify-center">
        {count}
      </div>}
     
    </Link>
  )
}

export default BadgeIcon