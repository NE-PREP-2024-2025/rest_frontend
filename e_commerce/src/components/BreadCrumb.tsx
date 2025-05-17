
function BreadCrumb({ items}:{items:string[]}) {
  return (
    <div className='flex items-center flex-wrap gap-[12px]'>
      {items.map((item,index) => {
        return (
          <div className={`flex ${index==items.length-1?"":"text-[#00000050]"} items-center gap-[10px]`}>
            <p>{item}</p>
            {index!=items.length-1&&<img src='/icons/separator.svg'/>}
            
            </div>
        )
      })}
    </div>
  )
}

export default BreadCrumb