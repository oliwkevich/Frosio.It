

export const Footer = () => {

    return (
        <footer className='bg-blue-900 py-8'>
            <div className='container flex flex-col md:flex-row items-center'>
                <div className='flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12'>
                    <h1 className='text-white text-xl ml-4'>FROSIO.IT</h1>
                    <ul className='flex text-white font-light uppercase gap-12 text-xs'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Contacts</li>
                    </ul>
                </div>
                <div className='flex gap-10 mt-12 md:mt-0 list-none mr-4'>
                    <li><img width='20' height='20' src='/img/fb.png' alt="fb"/></li>
                    <li><img width='20' height='20' src='/img/inst.png' alt="inst"/></li>
                </div>
            </div>
        </footer>
    )
}