

export const Operators = () => {
    return (
        <section className='py-20 mt-20'>
            <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
                <h1 className='text-3xl text-center text-blue-400'>Contact Us</h1>
                <p className='text-center text-gray-600 mt-4' >
                    You can contact us on any number convenient for you, below:
                </p>
            </div>
            {/*Cards*/}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16'>
                {/*Card #1*/}
                <div className='flex flex-col rounded-md shadow-md lg:mb-16'>
                    <div className="p-6 flex flex-col items-center">
                        <img width={70} height={70} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/640px-Vodafone_icon.svg.png' alt="vodafone"/>
                        <h3 className='mt-5 mb-2 text-blue-500 text-lg'>Call to Vodafone</h3>
                        <p className='mb-2 text-gray-400 font-light'>Price: Free</p>
                    </div>
                    <hr className='border-b-black'/>
                    <div className="flex p-6">
                        <button type='button' className='flex-1 btn btn-blue hover:bg-white hover:text-black'>Call now</button>
                    </div>
                </div>
                {/*Card #2*/}
                <div className='flex flex-col rounded-md shadow-md lg:my-8'>
                    <div className="p-6 flex flex-col items-center">
                        <img width={70} height={70} src='https://win10storeapp.com/wp-content/uploads/2019/10/MyFastweb-App-for-Windows-10-8-7-Latest-Version.png' alt="vodafone"/>
                        <h3 className='mt-5 mb-2 text-blue-500 text-lg'>Call to FastWeb</h3>
                        <p className='mb-2 text-gray-400 font-light'>Price: Free</p>
                    </div>
                    <hr className='border-b-black'/>
                    <div className="flex p-6">
                        <button type='button' className='flex-1 btn btn-blue hover:bg-white hover:text-black'>Call now</button>
                    </div>
                </div>
                {/*Card #3*/}
                <div className='flex flex-col rounded-md shadow-md lg:mt-24'>
                    <div className="p-6 flex flex-col items-center">
                        <img width={70} height={70} src='https://iconape.com/wp-content/files/tz/106751/png/tim-logo.png' alt="vodafone"/>
                        <h3 className='mt-5 mb-2 text-blue-500 text-lg'>Call to TIM</h3>
                        <p className='mb-2 text-gray-400 font-light'>Price: Free</p>
                    </div>
                    <hr className='border-b-black'/>
                    <div className="flex p-6">
                        <button type='button' className='flex-1 btn btn-blue hover:bg-white hover:text-black'>Call now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}