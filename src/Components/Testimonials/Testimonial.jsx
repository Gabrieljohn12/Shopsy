import React from 'react'
import Slider from 'react-slick';

const TestimonialData = [
    {
        id: 1,
        name: 'Victor',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.',
        img: "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?b=1&s=612x612&w=0&k=20&c=9imIwWTJpXEQGM6sUie2zeO7sKBQiSvpmkopyjv3ZdM=",
    },
    {
        id: 2,
        name: 'Satya Nadella',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.',
        img: "https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?b=1&s=612x612&w=0&k=20&c=jFxAg5CoMhiFu-ropZqYYmRtKGOtuLXJhCZ3UKwiwfw=",
    },
    {
        id: 3,
        name: 'Virat Kohli',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.',
        img: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=nMpH7tfH___WoQzbtoytLfYhwb3pgpDXXJyEHzwhgIM=",
    },
    {
        id: 4,
        name: 'Sachin Tendulkae',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.',
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
]

const Testimonial = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <div className='py-10 mb-10'>
      <div className='container'>
          {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
         <p className='text-xl text-primary'>What our customers are saying </p>
         <h1 data-aos='fade-up' className='text-3xl font-bold '>Testimonials</h1>
         <p data-aos='fade-up' className='text-xs text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.
         </p>
         </div>
           
           {/* Testimonial cards */}
            <div data-aos='zoom-in'>
              <Slider {...settings}>
                {TestimonialData.map((data) => (
                    <div className='my-6'>
                        <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                        <div className='mb-4'>
                            <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3'>
                            <p className='text-xs text-gray-500'>{data.text}</p>
                            <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                            </div>
                        </div>
                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                    </div>
                    </div>
                ))}
              </Slider>
            </div>
       </div>
    </div>
  )
}

export default Testimonial