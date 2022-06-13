import Image from 'next/image'
import useData from "../utils/dataContext"
import { useCallback, useEffect, useState } from "react"

const resources = [{}] //filler text

const Card = () => {
    const { chosenCategory } = useData()
    const extractsrc = (str: string) => {
        if(str.length > 1) return str.slice(str.indexOf("(")+1, str.indexOf(")"))
        
        return "/assets/placehoder.png"
    }
    const [resource, setResource] = useState(resources)
   
    const filter = useCallback(() => {
        let result:any[] = []
        if (chosenCategory?.length > 0){
            resources.forEach((resource) => {
                if(
                (resource.Name.toLowerCase().indexOf(chosenCategory.toLowerCase())) >= 0 
                || (resource.Description.toLowerCase().indexOf(chosenCategory.toLowerCase())) >= 0 
                || 
                (resource.Category.toLowerCase().indexOf(chosenCategory.toLowerCase())) >= 0 
                )
                {
                    result.push(resource)
                }
            })
            setResource(result)
        }
        if (chosenCategory?.length === 0){
            setResource(resources)
        }

    },[chosenCategory])
    
    useEffect(() => {
        filter()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[chosenCategory])


    return (
      <>
        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 mx-10 pb-20">
            { 
            resource.map(({ ...props}, index: any) => (
                <div key={index} className="border  rounded-xl bg-cardblack p-3 cursor-pointer hover:border-textyellow">
                    <div className="flex items-center gap-x-5">
                        <Image 
                            className="rounded-lg w-10 h-10 object-contain "
                            src={extractsrc(props.Images)} 
                            alt={"Resources"}                        
                            width={30}
                            height={30}
                            priority
                        />
                        <p className={`text-gray-800 text-xs tracking-tight rounded-md  h-4 px-2 bg-white ml-auto`}>{props.Category.slice(0,25)}</p>
                    </div>
                    <div className="xl:h-32 lg:h-40 md:h-40">
                        <div className="text-textblack text-xl font-medium grid py-2">
                            {props.Name}
                        </div>
                        <p className="text-gray-200 py-1 text-sm grid min-h-64">
                            {props.Description}
                        </p>

                    </div>
                    <a href={props.Link} target='_blank' rel='noreferrer' className="justify-end mt-6 flex rounded-lg bg-textyellow max-w-fit px-2 text-sm font-bold text-gray-800 shadow-md transition duration-300 hover:shadow-lg">
                        Visit Website
                        <svg className="ecosystem-projects__project-arrow-icon" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99969 40L35.9997 12M35.9997 11.7H13.6664M35.9997 11V33" stroke="#18181B" strokeWidth="1.5"></path>
                    </svg>
                    </a>
                </div>
            ))
            }
        </div>
      </>
    )
}

export default Card