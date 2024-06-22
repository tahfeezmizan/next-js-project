"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const navigate = useRouter();

    const link = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'Categories',
            path: '/categories'
        },
    ]

    const handler = () => {
        navigate.push('/login')
    }

    if (pathName.includes('dashboard'))
        return (
            <div className='w-4/5 mx-auto'>
                <div className="bg-yellow-100 py-5">
                    <h1 className="text-3xl">Dashboard Navigation</h1>
                </div>

            </div>
        );

    return (
        <div className="flex justify-between items-center w-4/6 px-2 py-4 mx-auto">
            <h2 className='text-3xl'>Next <span className='text-red-500'>App</span></h2>

            <ul className="flex gap-6 items-center">
                {
                    link.map(link => <Link href={link.path} className={`${pathName === link.path && 'text-red-500'}`}>{link.title}</Link>)
                }
                <button onClick={handler} className='btn bg-red-500 p-1 px-3 text-white'>login</button>
            </ul>
        </div>
    );
};

export default Navbar;