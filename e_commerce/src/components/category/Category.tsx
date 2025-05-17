import { categoryItem } from './CategoryItem'
import {Link} from "react-router-dom"
import Collapsible from './Collapsible'

function Category() {
  return (
    <div className='flex flex-col gap-[16px]'>
      {categoryItem.map((category) => {
        return (
          <div className='w-[183px]'>
            {category.children ? (
              <Collapsible title={category.label} >
                {
                  <div className='flex flex-col gap-[7px]'>
                    {category.children.map((item) => {
                      return <Link to={item.href}>{item.label}</Link>
                    })}
                  </div>
                  
                }
                </Collapsible>
            ) : (
                <Link to={category.href}>{category.label}</Link>
            )}
            
            </div>
        )
      })}

    </div>
  )
}

export default Category