import { categories } from "../utils/categories"
import useData from "../utils/dataContext"

const Buttons = () => {
    const {setChosenCategory } = useData()
    return (
        <div className="w-full mx-auto xl:mt-32 lg:mt-32 md:mt-16 mt-5 mb-10 text-center md:w-10/12">
            {
                categories.map((category, index) => (
                   <div key={index} className="inline-flex m-2" onClick={() => setChosenCategory(category.toLowerCase())}>
                        <a  className="inline-flex justify-center text-md font-semibold py-2 px-2 bg-cardblack text-textblack 
                        border rounded-xl  p-2 cursor-pointer border-textgray hover:border-textyellow">
                            <span>{category}</span>
                        </a>
                   </div>
            ))
            }
      </div> 
    

    )
}

export default Buttons