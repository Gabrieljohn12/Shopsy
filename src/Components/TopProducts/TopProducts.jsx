import React from 'react'
import { FaStar } from 'react-icons/fa6';
import Img1 from '../../assets/Shirt/Img1.jpg';
import Img2 from '../../assets/Shirt/Img2.jpg';
import Img3 from '../../assets/Shirt/Img3.jpg';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Casual Wear',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.',
  },
  {
    id: 2,
    img: Img2,
    title: 'Printed Shirt',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.',
  },
  {
    id: 3,
    img: Img3,
    title: 'Women Shirt',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.',
  },
]

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className='container'>
        {/* Header section */}
        <div className='text-left mb-24  '>
         <p className='text-xl text-primary'>Top Rated Products for you</p>
         <h1 data-aos='fade-up' className='text-3xl font-bold '>Best Products</h1>
         <p data-aos='fade-up' className='text-xs text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.
         </p>
       </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-15 md:gap-5 place-items-center'>
          {ProductsData.map((data) => (
            <div data-aos='zoom-in' className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 max-w-[300px] group'>
              {/* image section */}
              <div className='h-[100px]'>
                <img src={data.img} alt="" className='max-w-[160px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
              </div>
              {/* details section */}
              <div className='p-4 text-center'>
               {/*  star rating */}
               <div className='w-full flex items-center justify-center gap-1'>
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
               </div>
               <h1 className='text-xl font-bold'>{data.title}</h1>
               <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
               <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' 
               onClick={handleOrderPopup}
               >Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts