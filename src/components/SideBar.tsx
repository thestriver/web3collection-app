import { categories } from "../utils/categories"

const SideBar = () => {
    return (
        <aside className="w-full p-2 sm:w-60 bg-black text-textblack">
            <nav className="space-y-8 text-sm">
                <div className="space-y-2">                    
                    {
                    categories.map((category, index) => (
                        <div key={index} className="flex flex-col gap-y-12 hover:border hover:rounded-md hover:border-textyellow">
                            <a rel="noopener noreferrer" href="#" className="inline-flex bg-cardblack gap-x-2 rounded-md items-center px-3 py-1 text-md text-gray-200">
                            <svg aria-hidden="true" className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                {category}
                            </a>
                        </div>

                    ))
                    }
                </div>
            </nav>
        </aside>
    )
}

export default SideBar