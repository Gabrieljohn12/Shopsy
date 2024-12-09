import React from 'react'
import image1 from '../../assets/hero/image1.jpg';
import image2 from '../../assets/hero/image2.jpg';
import image3 from '../../assets/hero/image3.jpg';
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: image1,
        title: "Upto 50% 0ff on all Men's Wear",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ratione quisquam? Beatae rem numquam, soluta dicta delectus at, officiis quod expedita corporis labore minus animi quidem repudiandae facere reprehenderit adipisci.",
    },
    {
        id: 2,
        img: image2,
        title: "Upto 30% 0ff on all Women's Wear",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ratione quisquam? Beatae rem numquam, soluta dicta delectus at, officiis quod expedita corporis labore minus animi quidem repudiandae facere reprehenderit adipisci.",
    },
    {
        id: 3,
        img: image3,
        title: "Upto 70% 0ff on all Products Sales", 
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ratione quisquam? Beatae rem numquam, soluta dicta delectus at, officiis quod expedita corporis labore minus animi quidem repudiandae facere reprehenderit adipisci.",
    }, 
]; 
 
const Hero = ({handleOrderPopup}) => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
       {/*  background pattern */}
         <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div> 
       {/* hero section */}
       <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
            {ImageList.map((data) => (
                <div>
                 <div className='grid grid-cols-1    sm:grid-cols-2'>
                   {/* text content section */}
                   <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0  text-center sm:text-left order-2 sm:order-1 relative z-10'>
                     <h1 
                      data-aos='zoon-in'
                      data-aos-duration='500'
                      data-aos-once='true'
                     className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}
                     </h1>
                     <p
                     data-aos='zoon-in'
                     data-aos-duration='500'
                     data-aos-delay='100' 
                     className='text-sm'>{data.description}</p>
                     <div 
                     data-aos='zoon-in'
                     data-aos-duration='500'
                     data-aos-delay='300'>
                       <button onClick={handleOrderPopup} className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                     </div>
                   </div>
                   {/* image-section */}
                   <div className="order-1 sm:order-2">
                       <div 
                       data-aos='zoon-in'
                       data-aos-once='true'
                        className='relative z-10'>
                           <img src={data.img} alt="" className='w-[300px] sm:h-[300px] sm:w-[300px] sm:scale-125 lg:scale-120 object-contain mx-auto' />
                       </div>
                   </div>
                </div>
               </div>
            ))}
        </Slider>
       </div>
    </div>
  )
}

export default Hero