import React from 'react'

const WorkM = () => {
  return (
    <div className='w-[1400px] h-[1588px] py-28 px-20 gap-24'>

        <div className='w-[1250px] h-[547px] gap-14 flex items-center justify-center '>
            <div>
                <h1 className='w-[672px] h-[174px] font-[700] text-7xl leading-[87px] '>Project Management</h1>
                <p className='w-[700px] h-[90px] font-[400] text-xl leading-4 py-4 tracking-tighter'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note</p>
                <button className='w-[201px] h-[63px] py-5 px-10 bg-[#4F9CF9]'>Get Started</button>
            </div>
            <div className='w-[700px] h-[547px] bg-[#C4DEFD]'></div>
        </div>

        <div className="bg-white py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[400px] h-[400px] border-2 border-dashed border-blue-200 rounded-full flex items-center justify-center">
            {/* Central Image */}
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-lg">
              <img
                src="/Logo Icon.png" // Replace with your image path
                alt="Center Icon"
                className="w-10 h-10"
              />
            </div>

            {/* Circles Around */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-10 left-10 w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="absolute top-10 right-10 w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work together</h2>
          <p className="text-lg text-gray-700 mb-6">
            With WhiteSpace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Try it now
          </button>
        </div>
      </div>
    </div>

        

    </div>
  )
}

export default WorkM