
import Header from '@/components/Header'
import { type ReactNode } from 'react'

function DefaultLayout({children,noMargin}:{children:ReactNode,noMargin?:boolean}) {
  return (
    <div className='w-[100vw] overflow-x-hidden flex flex-col h-screen m-0 p-0 justify-between'>
    <Header />
      <main className={`lg:px-20 pt-[80px] md:px-10 px-[15px] ${noMargin?"px-0 md:px-0":""} pb-[140px] flex-1`}>
     {children}
      </main>

  </div>
  )
}

export default DefaultLayout