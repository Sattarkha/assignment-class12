
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='w-[1400px] h-[92px] bg-[#043873] py-4 px-52  '>
       <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <Image src="/Logo.png" alt='logo'width={191} height={34}/>
        </div>
        <div className='flex items-center justify-evenly gap-40 w-[700px] h-[60px]'>
            <ul className='text-white flex gap-12 justify-evenly items-center'>
                <li>Products</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Pricing</li>
            </ul>
            <button className='w-[126px] h-[60px] py-4 px-10 bg-[#FFE492] rounded-md'>Login</button>
        </div>
        </div>
    </header>
  )
}

export default Header