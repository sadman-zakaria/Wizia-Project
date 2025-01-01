import React from 'react'

function Heroa() {
  return (
    <>
      <div className='bg-[url(zero.png)] w-full h-[458px]  md:h-[522px] lg:h-[592px] bg-cover bg-no-repeat  bg-right-bottom flex '>
        <div className="text-center  md:text-start lg:text-start mt-[44px] sm:mt-[110px] sm:ml-[50px] md:ml-[120px] max-w-[1440px] px-3">
          <p className='text-xl lg:text-2xl text-[#0FF1F6] '>AI SDRs (aiDRs)</p>

          <h1 className='text-6xl lg:text-8xl text-white font-bold mt-3'>More <span className='italic font-normal'>Ieads,</span> <br /> less
          <span className='italic font-normal'> peopIe.</span></h1>
          <p className='text-[#FFFFFF] mt-6 font-semibold'>Train an aiDR on your ICP and messaging matrix. <br />   Activate it on a patch. It will send personalized <br />
           sequences to every target contact.</p>
            <div className='flex justify-center md:justify-normal mt-6 md:mt-10'>
              <button className='bg-[#0FF1F6] font-semibold flex items-center px-3 py-2 rounded-full '>Sign Up for the Beta
               <img className='px-2' src="arrow-Button.png" alt="" />
              </button>
           </div>
        </div>
        
      </div>
    </>
  )
}

export default Heroa;