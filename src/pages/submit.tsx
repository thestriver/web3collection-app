import Link from "next/link"

const SubmitResource = () => {
   return (
    <div className="flex min-h-screen items-center justify-start "  style={{ background: '#181C2A'}}>
        <div className="mx-auto w-full max-w-lg bg-cardblack p-4 rounded-md">
            <h1 className="mb-6 xl:text-5xl lg:text-5xl font-medium md:leading-none tracking-wide md:text-6xl text-5xl leading-tight  text-textblack">Contact us</h1>
            <p className="mt-3 px-0 mb-8 text-lg text-gray-400 md:text-xl">If you would like to suggest a developer resource/tool to be added,
            please fill in the form below and I will get it added as soon as possible.
            :</p>

            <form target="_blank" action="https://formsubmit.co/4d306cd9b54e81554f63e6e521863087" method="POST">
            <div className="form-group">
                <textarea placeholder="Suggested resource/tool including link and a short description" className="form-control mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                name="message" rows={10} required></textarea>
            </div>
            <input type="hidden" name="_next" value="https://www.web3collection.app/"></input>
            {/* https://www.web3collection.app/ */}
            <button type="submit" className="mt-5 mb-20 rounded-md bg-black hover:bg-textgray px-10 py-2 text-white">Send Message</button>
            </form>
            <Link href={"/"} className="mt-60 ml-60 uppercase text-white hover:text-textgray">🔙 Home</Link>
        </div>
        
    </div>
    )
}

export default SubmitResource