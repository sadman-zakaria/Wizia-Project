import React from 'react'
function Features() {
    const cardData =[
        {
            id:1,
            ImgSrc:"magic.png",
            title:"You’re in Control",
            description:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
        },
        {
            id:2,
            ImgSrc:"graph.png",
            title:"Infinitely Scalable",
            description:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
        },
        {
            id:3,
            ImgSrc:"arrows.png",
            title:"Incredibly Flexible",
            description:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
        },
    ]
  return (
    <>
       
        <div className='h-screen w-full pt-10 pb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 !p-5'>
                {cardData.map((card)=>
                  <div key={card.id}>
                    <img src={card.ImgSrc} alt="" />
                    <div>
                    <h3 className='text-xl  font-semibold mb-2 text-white'>{card.title}</h3>
                    <p className='text-gray-600 mb-4'>{card.description}</p>
                    </div>
                  </div>
                )}
            </div>
        </div>
       
    </>
  )
}

export default Features;