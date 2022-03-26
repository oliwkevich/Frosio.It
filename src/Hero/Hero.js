import {Image} from "../Image/Image";


export const Hero = () => {

    return (
        <section className="relative">
            <div className="container px-14 flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                {/*Content*/}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h2 className='text-blue-400 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6'>
                        The best Italian furniture
                    </h2>
                    <p className='text-gray-600 text-lg text-center lg:text-left mb-6'>
                        In our company, employees fight not for quantity, but for quality.
                        Therefore, our furniture is safely considered one of the best on the Italian market.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <button type='button' className='btn btn-blue hover:bg-white hover:text-black'>Order Online</button>
                        <button type='button' className='btn btn-white hover:bg-purple-500 hover:text-white'>Order by Phone</button>
                    </div>
                </div>
                <Image/>
            </div>
            {/*Rounded Rectangle*/}
            <div className='hidden md:block overflow-hidden bg-purple-600 rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36'> </div>
        </section>
    )
}