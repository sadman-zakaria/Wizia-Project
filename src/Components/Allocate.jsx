import React from 'react'

function Allocate() {
  return (
    <div className='bg-[#002228] flex justify-center text-white pt-6 pb-6 '>
        <div className="bg-[url(/BG2.png)] w-full pb-10  md:w-[844px] lg:w-[1844px] h-[360px] md:h-[464px] lg:h-[544px]  bg-cover   mx-5 rounded-2xl flex items-center px-16 pt-10  container">
            <div className=''>
               <h2 className=' text-3xl md:text-4xl'>Allocate effort where your reps <br /> make an inpact.</h2>
               <h4 className='text-2xl md:text-3xl italic text-[#0FF1F6]'>Let us handle the rest.</h4>
               <p className=' text-gray-500 pt-2'>Keep your reps “in the air” -- out in the field and on the phone <br /> where they can build relationships.</p>

               <div className='flex items-center pt-2 md:pt-5 gap-5'>
                    <div>
                       <h3 className='text-[#0FF1F6] text-2xl  md:text-3xl font-bold '>32%</h3>
                       <p className='text-[#E9EEF1]'>Improvement in <br /> Open Rates</p>
                    </div>
                    <div>
                       <h3 className='text-[#0FF1F6] text-2xl  md:text-3xl font-bold '>75%</h3>
                       <p className='text-[#E9EEF1]'>Improvement in <br /> Ramp Time</p>
                    </div>
                    <div>
                       <h3 className='text-[#0FF1F6] text-2xl  md:text-3xl font-bold '>35%</h3>
                       <p className='text-[#E9EEF1]'>Improvement in <br /> Meetings Booked</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Allocate