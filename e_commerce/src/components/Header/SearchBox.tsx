function SearchBox() {
  return (
    <div className="hidden md:block rounded-[4px] relative ">
      <input className="bg-secondary outline-none h-[38px]  rounded-[4px] px-[20px] md:w-[243px] placeholder:text-[12px]" placeholder="What are you looking for?" />
      <button>
        
      <img src="/icons/search.svg" className="absolute top-[7.5px] right-[8px]" />
     </button>
    </div>
  )
}

export default SearchBox