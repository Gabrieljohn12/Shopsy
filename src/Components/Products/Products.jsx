import React from 'react';
import img1 from '../../assets/Women/img1.jpg'
import img2 from '../../assets/Women/img2.jpg'
import img3 from '../../assets/Women/img3.jpg'
import img4 from '../../assets/Women/img4.jpg'
import img5 from '../../assets/Women/img5.jpg'
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: 'Women Ethnic',
    rating: 5.0,
    color: 'Green',
    aosDelay: '0',
  },
  {
    id: 2,
    img: img2,
    title: 'Women Western',
    rating: 4.5,
    color: 'Black',
    aosDelay: '200',
  },
  {
    id: 3,
    img: img3,
    title: 'Gown',
    rating: 4.7,
    color: 'Pink',
    aosDelay: '400',
  },
  {
    id: 4,
    img: img4,
    title: 'Overall',
    rating: 4.0,
    color: 'Gold',
    aosDelay: '300',
  },
  {
    id: 5,
    img: img5,
    title: 'Gown',
    rating: 4.5,
    color: 'Berg',
    aosDelay: '400',
  },
]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
       {/*  Header section */}
       <div className='text-center mb-10 max-w-[600px] mx-auto'>
         <p className='text-xl text-primary'>Top Selling Products for you</p>
         <h1 data-aos='fade-up' className='text-3xl font-bold '>Products</h1>
         <p data-aos='fade-up' className='text-xs text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta minus nam nisi eaque libero velit animi vero excepturi officiis.
         </p>
       </div>
       {/*  Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-4'>
            {/*  card section */}
            {ProductsData.map((data) => (
              <div data-aos='fade-up' data-aos-delay={data.aosDelay} key={data.id} className='space-y-3'>
                <img src={data.img} alt="" className='h-[220px] w-[200px] object-cover rounded-md' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* veiw all button */}
          <div className='flex justify-center'>
            <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All Button </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
