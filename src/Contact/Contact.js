

export const Contact = () => {
    return (
        <section className='bg-purple-600 text-white py-20'>
            <div className="container">
                <div className='sm:w-3/4 lg:w-2/4 mx-auto'>
                    <p className='font-light uppercase text-center mb-8'>
                        More than +118.000 pieces of furniture ordered
                    </p>
                    <h1 className='text-3xl text-center'>Stay up-to-date with what we're going</h1>
                    <div className='flex flex-col sm:flex-row gap-2 mt-8'>
                        <input type="text" placeholder='Enter your E-mail address' className='focus:outline-none flex-1 px-2 py-3 rounded-md text-black'/>
                        <button type='button' className='btn bg-amber-600 hover:bg-amber-300 hover:text-black'>Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}