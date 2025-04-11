import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Courses = () => {
  return (
    <>
    <div>
        <Header/>
        <div className='bg-sky-100 p-30'>        
            <h1 className='font-bold text-4xl'>Courses</h1>
            </div>
    </div>
    <div className='flex'>
      <div className='p-20 w-1/2 '>
        <img src="./2.jpg" alt="course" />

      </div>
      <div className='m-30'>
        <h1 className='text-3xl mb-5 font-bold'>List of Courses at SD HUB </h1>
        <ul className='list-disc'>
          <li>Digtal Marketing+Graphic Design</li>
          <li>Web Development</li>  
          <li>Tally Prime</li>
          <li>Office Advertsing</li>
          <li>web Design</li>
        </ul>

      </div>
    </div>
    <Footer/>

    </>
  )
}

export default Courses