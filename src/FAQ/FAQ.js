import {ChevronDownIcon} from "@heroicons/react/solid";


export const FAQ = () => {

    return (
        <section className='bg-cyan-400 py-20'>
            <div className='container '>
                <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
                    <h1 className='text-3xl text-center text-blue-400'>Frequently Asked Questions</h1>
                    <p className='text-center text-gray-600 mt-4' >
                        Below you will find frequently asked questions and their answers:
                    </p>
                </div>
                {/*FAQ Items*/}
                <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                    <div className='flex items-center border-b py-4'>
                        <span className='flex-1'>When was your company established?</span>
                        <ChevronDownIcon width={25} height={25} className='text-purple-600'/>
                    </div>
                    <div className='flex items-center border-b py-4'>
                        <span className='flex-1'>Why is your company of high quality??</span>
                        <ChevronDownIcon width={25} height={25} className='text-purple-600'/>
                    </div>
                    <div className='flex items-center border-b py-4'>
                        <span className='flex-1'>How long will I have to wait for my furniture?</span>
                        <ChevronDownIcon width={25} height={25} className='text-purple-600'/>
                    </div>
                    <button type='button' className='flex self-center mt-4 flex-1 btn btn-blue hover:bg-white hover:text-black'>More Info</button>
                </div>
            </div>
        </section>
    )
}