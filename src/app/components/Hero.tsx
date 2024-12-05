import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center w-[1400px] h-[829px] bg-[#043873] text-white justify-center px-20'>
        <div className='flex flex-col justify-between w-[656px] h-[361px] mr-10 mx-4'>
            <h1 className='font-[700px] w-[656px] h-[154px] text-[64px]'>Get More Done with whitepace</h1>
            <p className='w-[656px] h-[60px] line-clam'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            <button className='w-[219px] h-[63px] rounded-[8px] text-[18px] py-4 font-[500px] px-2 bg-[#4F9CF9] gap-10'>Try Whitepace free</button>

        </div>
        <div className='w-[824px] h-[529px] bg-[#C4DEFD]'></div>


    </div>
  )
}

export default Hero