
interface InputProps{
  label: string,
  value: any,
  setValue: any,
  isRequired?: boolean,
  
}

function CustomInput(props:InputProps) {
  return (
    <div className='flex gap-[4px] w-full flex-col '>
      <div className='flex gap-[3px] items-center'>

        <label className='text-[16px] text-[#00000040] font-[400]' htmlFor="">{props.label}</label>
        {props.isRequired&&<p className='text-primary text-[16px]'>*</p>}
      </div>
      <input className='w-full px-[20px] outline-none bg-secondary rounded-[4px] h-[50px]' value={props.value} onChange={(e)=>props.setValue(e.target.value)} type='text'/>
    </div>
  )
}

export default CustomInput