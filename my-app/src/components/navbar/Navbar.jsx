import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-green-400 py-3 ' >
            <div className=' w-11/12 mx-auto  ' >
                <nav>
                    <ul className='flex justify-center gap-4 font-semibold  text-white  ' >
                        <li> <Link href={"/"} >Home</Link>  </li>
                        <li> <Link href={"/about"} >About Us</Link>  </li>
                        <li> <Link href={"/faq"} >Faq</Link>  </li>
                        <li> <Link href={"/contact"} >Contact</Link>  </li>
                        <li> <Link href={"/about/mission"} >Mission</Link>  </li>
                        <li> <Link href={"/vission"} >Vission</Link>  </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
