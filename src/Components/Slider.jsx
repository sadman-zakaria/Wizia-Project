import React, {useState} from 'react'

function Slider() {
    const slides = [
        {
          id: 1,
          ImgSrc:"Group 9.png",
          heading: "Qorem ipsum dolor sit amet, consectetur adipiscing elit Nuncvulputate libero et velit interdum, ac aliquet odio mattis. that matters most",
          name: "John Dae",
          description: "Chife Strategy Officer `@`Company",
        },
        {
          id: 2,
          ImgSrc:"Group 9.png",
          heading: "To center everything without using flex in Tailwind CSS, you can use a combination of grid and place-items-center for vertical and horizontal",
          name: "Sadman Zakaria",
          description: "Programer and frelancer",
        },
        {
          id: 3,
          ImgSrc:"Group 9.png",
          heading: "Life is a journey filled with challenges, opportunities, and growth, where every step shapes the person we become.Take more time for the work",
          name: "pepsi-cola",
          description: "pesi-cola company",
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const NextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const {ImgSrc, heading, name, description,  } = slides[currentIndex];
  return (
    <>
    <section className='flex justify-between mx-5 items-center  h-[450px]'>
        <div className=''>
            <button onClick={prevSlide} className='size-8 hover:bg-gray-600 rounded-lg duration-300 transition-all '>
                <img src="Navigation.png" alt="" />
            </button>
        </div>
        <div className='grid-cols-1  place-items-center text-center space-y-8 px-8'>
            <img className='' src={ImgSrc} alt="" />
            <p className='text-white text-xl'>{heading}</p>
            <h5 className='text-[#0FF1F6] font-bold'>{name}</h5>
            <p className='text-[#96ACAF]'>{description}</p>
        </div>
        <div>
            <button onClick={NextSlide} className='size-8 hover:bg-gray-600 rounded-lg duration-300 transition-all '>
                <img src="Navigation2.png" alt="" />
            </button>
        </div>
    </section>
    </>
  )
}

export default Slider