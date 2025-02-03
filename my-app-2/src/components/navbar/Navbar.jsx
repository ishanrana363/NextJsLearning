import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-green-600 py-3 ' >
            <div className='flex justify-between items-center px-4 ' >
                {/* logo */}
                <div>
                    <Link href={"/"} >
                        <Image
                            src={"https://res.cloudinary.com/dj2edy2rg/image/upload/v1735059059/blog-logo_auxidm.png"}
                            width={150}
                            height={300}
                            alt=''
                        />
                    </Link>
                </div>
                {/* menu */}
                <div>
                    <nav>
                        <ul className='flex items-center space-x-4 text-white ' >
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link href={"/blog"}>Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* button */}
                <div>
                    <button className=' px-5 text-white font-semibold rounded-lg py-1 border bg-red-400 ' >Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;