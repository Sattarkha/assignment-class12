import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-[1400px] h-[461px] bg-[#043873] px-30 py-40  '>
        <div className='w-[1000px] h-[289px] bg-[#043873] gap-[100px]'>
            <div className='w-[1400px] h-[169px] text-white flex items-center justify-center '>
            <div className='w-[295px] h-[169px] gap-[15px]'>
                <Image src='/Logo.png'alt='logo'width={191} height={34}/>
                <p className='w-[240px] h-[120px] font-normal text-[18px] leading-7 tracking-[-2%]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className='w-[295px] h-[127px] gap-[15px]'>
                <h1 className='w-[68px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[-2%]'>Product</h1>
                <p className='w-[70px] h-[20px] font-normal text-[16px] leading-5 tracking-[-2%]'>Overview</p>
                <p className='w-[50px] h-[20px] font-normal text-[16px] leading-5 tracking-[-2%]'>Pricing</p>
                <p className='w-[177px] h-[20px] font-normal text-[16px] leading-5 tracking-[-2%]'>Customer stories</p>

            </div>
            <div className='w-[295px] h-[127px] gap-[15px]'>
                <h1 className='w-[68px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[-2%]'>Resources</h1>
                <p className='w-[70px] h-[20px] font-normal text-[16px] leading-5 tracking-[-2%]'>Blog</p>
                <p className='w-[50px] h-[20px] font-normal text-[16px] leading-5 tracking-[-2%]'>Guides</p>
                <p className='w-[50px] h-[20px] font-normal text-[16px] leading-5 tracking-[-2%]'>Help center</p>
            

            </div>
            <div className='w-[295px] h-[127px] gap-[15px]'>
                <h1 className='w-[68px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[-2%]'>Company</h1>
                <p className='w-[70px] h-[20px] font-normal text-[16px] leading-5 tracking-[-2%]'>About us</p>
                <p className='w-[50px] h-[20px] font-normal text-[16px] leading-5 tracking-[-2%]'>Careers</p>
                <p className='w-[50px] h-[20px] font-normal text-[16px] leading-5 tracking-[-2%]'>Media kit</p>
            

            </div>
            </div>
        </div>

    </div>
  )
}

export default Footer