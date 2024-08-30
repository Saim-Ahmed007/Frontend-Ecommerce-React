// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas voluptatem aperiam inventore eveniet deserunt magnam optio laboriosam iure voluptas.</p>
        </div>
        <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
        </div>
        <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+8801701351383</li>
                    <li>Saimahmed007@gmail.com</li>
                    
                </ul>
        </div>
    </div>
      <div>
        <hr />
        <p className='text-sm text-center py-5'>CopyRight 2024@ Saim Ahmed All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
