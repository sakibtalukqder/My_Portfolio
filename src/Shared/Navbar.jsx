import Link from 'next/link';
import React from 'react';
import DarkToggle from '../Components/DarkToggle';
import Image from 'next/image';

import Logo from '@/public/Logo.png'


const Navbar = () => {
    const menu = <>
        <Link href={'/'}><li className='px-4 py-2 rounded hover:bg-green-300'>Home</li></Link>
        <Link href={'/route/about'}><li className='px-4 py-2 rounded hover:bg-green-300'>About</li></Link>
        <Link href={'/route/skills'}><li className='px-4 py-2 rounded hover:bg-green-300'>Skills</li></Link>
        <Link href={'/route/projects'}><li className='px-4 py-2 rounded hover:bg-green-300'>Projects</li></Link>
        <Link href={'/route/contract'}><li className='px-4 py-2 rounded hover:bg-green-300'>Contract</li></Link>
        <div><li className=' py-2 rounded hover:bg-green-300 flex items-center px-4'> <DarkToggle /> </li></div>
    </>
    return (
        <div className='z-[100]'>
            <div className="navbar">
                <div className="flex-1">
                    <Link href={'/'} className="btn btn-ghost normal-case text-4xl My_Logo flex justify-center">
                        <Image src={Logo} className=" w-10" alt="Profile Sakib Talukqder" />
                        Sakib Talukqder
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu-horizontal px-1">
                        <div className='lg:flex hidden items-center py-2'>
                            {menu}
                        </div>
                        <li className='block lg:hidden border px-3 py-2 rounded hover:bg-green-400'><label htmlFor="my-drawer-4" className="drawer-button">
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>
                        </label>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />

            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                </div>
                <div className="drawer-side z-[100]">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="px-8 leading-8 p-4 w-4/5 min-h-full bg-slate-900 text-white  ">
                        {/* Sidebar content here */}
                        <li className='justify-end flex pb-6 float-right'>
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className='hover:bg-red-500 border px-3 py-1 rounded' >
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                </svg>
                            </label>
                        </li>
                        <br />
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;