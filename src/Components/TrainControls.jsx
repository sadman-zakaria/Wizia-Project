import React from 'react'

function TrainControls() {
  return (
    
    <>
    
      <div className='bg-[#002228] flex justify-center text-white pt-6 pb-6 '>
        <div className="bg-[url(/BG.png)] w-full pb-6  md:w-[844px] lg:w-[1844px] h-[360px] md:h-[464px] lg:h-[544px]  bg-cover flex items-center justify-center mx-5 rounded-2xl">
          <div className='grid-cols-1 p-5'>
            <h1 className='text-white text-3xl md:text-5xl lg:text-6xl md:mt-10 mt-2'>Train your aiDR on your...</h1> 
            <h2 className=' text-2xl md:text-4xl pt-2 md:pt-4 text-[#0FF1F6]  italic'>prefered email st|</h2>
            <p className='text-white pt-6  md:text-lg'>Youre in control. Train your aiDR on  <br /> elements of your Marketing strategy.</p>


            <div className='flex gap-6 pt-5 lg:pt-10'>
              <div className='flex items-center gap-3'>
                <img src="ph_check-circle-duotone.png" alt="" />
                <p>Quick to ramp</p>
              </div>
              <div className='flex items-center gap-3'>
                <img src="ph_check-circle-duotone.png" alt="" />
                <p>Easy to optimize</p>
              </div>
            </div>
            <div className='flex gap-6 pt-5'>
              <div className='flex items-center gap-3'>
                <img src="ph_check-circle-duotone.png" alt="" />
                <p>Quick to scale up</p>
              </div>
              <div className='flex items-center gap-3'>
                <img src="ph_check-circle-duotone.png" alt="" />
                <p>Works with all your existing tools</p>
              </div>
            </div>
          </div>

          
        </div>
      
      </div>
    </>
  )
}

export default TrainControls