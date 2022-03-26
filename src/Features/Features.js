

export const Features = () => {

    return (
        <section className='bg-cyan-400 py-20 mt-20 lg:mt-60'>
            {/*Heading*/}
            <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
                <h1 className='text-3xl text-center text-blue-400'>Features</h1>
                <p className='text-center text-gray-600 mt-4' >
                    We are a dynamic design studio in Bergamo, Italy. Our philosophy is to create elegant and sophisticated spaces with a unique perspective, with an emphasis on making the design work for your people. We use a mix of local and global design practices to achieve this. Our creative team have an extensive knowledge of design and interior design, providing our clients with cutting edge products and services. All our products are produced in house and are handcrafted by our design team. Our design studio is designed by our design team and our furniture is designed and crafted by our furniture team. All our products are handcrafted and are built to high quality standards.
                </p>
            </div>
            {/*Feature #1*/}
            <div className='relative mt-20 lg:mt-24'>
                <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
                    {/*Image*/}
                    <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
                        <img className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-md drop-shadow-2xl border border-blue-500 sm:border-4 ml-12' src='/img/furniture2.png' alt="image1"/>
                    </div>
                    {/*Content*/}
                    <div className='flex flex-1 flex-col items-center lg:items-start'>
                        <h1 className='text-3xl text-blue-500'>Furniture in one click</h1>
                        <p className='text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
                            We are dictated to inspiring our customers through our own inner sense of wonder. So, if you are looking for some of the best in boutique design then look no further, because it’s our mission at The Art of Interior Design. We are proud to be the "C" Team of interior designers.
                        </p>
                        <button type='button' className='btn btn-blue hover:bg-white hover:text-black'>Read More</button>
                    </div>
                </div>
                <div className='hidden lg:block overflow-hidden bg-purple-600 rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36'> </div>
            </div>
        </section>
    )
}