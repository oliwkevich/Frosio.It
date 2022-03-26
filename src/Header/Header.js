import {MenuIcon} from "@heroicons/react/solid";


export const Header = () => {
    return (
        <header>
            <nav className='container mx-auto flex items-center py-4 mt-4 sm:mt-12'>
                <div className='py-1'><img width={80} height={80} src='/img/logo.png' alt="logo"/></div>
                <ul className='hidden sm:flex flex-1 justify-end items-center gap-12 text-blue-900 font-bold uppercase text-xs mr-4'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Pricing</li>
                    <li className='cursor-pointer'>Gallery</li>
                    <button type='button' className='bg-amber-800 text-white rounded-md px-7 py-3 uppercase font-bold'>Login</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end">
                    <MenuIcon className="h-5 w-5 text-blue-500"/>
                </div>
            </nav>
        </header>
    )
}