// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-8 border-t flex flex-start'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, molestiae veritatis est nemo quam aperiam consectetur qui quas ratione perspiciatis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore blanditiis nobis doloribus voluptates facilis architecto reprehenderit doloremque ipsam hic.</p>
        <b className='text-gray-600'>Our Mission</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quas voluptatibus voluptates obcaecati fugit molestias veritatis, voluptatem corporis maxime repudiandae?</p>
        </div>
      </div>
      <div className='text-4xl py-4 flex flex-start'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, iure officia nulla dolore culpa fuga.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, iure officia nulla dolore culpa fuga.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, iure officia nulla dolore culpa fuga.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
