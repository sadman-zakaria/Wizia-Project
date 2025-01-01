import React from 'react'

function Footer() {
  return (
    <>
      <div className='grid-cols-1 place-items-center space-y-5 pt-10 pb-10'>
        <h4 className='text-[#0FF1F6]'>GET STARTED</h4>
        <h2 className='text-white text-4xl '><span className='italic'>Embrace</span> the new era of <span className='italic'>outbound</span>.</h2>
        <p className='text-gray-500 text-center'>Wizia lets you train, activate, and optimize aiDRs.  <br />
        Take your outbound to new levels of performance and efficiency.</p>

        <div className='flex justify-center md:justify-normal mt-6 md:mt-10'>
              <button className='bg-[#0FF1F6] font-semibold flex items-center px-3 py-2 rounded-full  shadow-md transition-all duration-400 hover:shadow-xl hover:ring-4 hover:ring-Black '>Sign Up for the Beta
               <img className='px-2' src="arrow-Button.png" alt="" />
              </button>
           </div>
      </div>

      <div className='bg-[#07292F] h-[80px] mx-auto'>
        <img src="Logo.png" alt="" />
        <p>Copyright © 2023 Wizia. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer