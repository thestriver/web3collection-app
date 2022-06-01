import { SearchBar } from "."

const Hero = () => {
    return (
        <section className="xl:pt-24 md:pt-10 ">
            <div className="px-12 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 className="mb-6 xl:text-5xl lg:text-5xl font-medium md:leading-none tracking-wide md:text-6xl text-5xl leading-tight  text-textblack">
                        The biggest collection of
                        <span 
                        className=" px-2 w-full py-2 leading-12 lg:inline text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-teal-500 to-pink-500">
                            tools and resources
                        </span> for web3 developers
                    </h1>
                    <p className="px-0 mb-8 text-lg text-gray-400 md:text-xl lg:px-24">
                    A curated knowledge library showcasing over 200+ tools and resources for every stage of your web3 development and dev-preneur journey.
                    </p>
                    <div className="my-20 space-x-0 md:space-x-2 md:mb-8">
                       <SearchBar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero