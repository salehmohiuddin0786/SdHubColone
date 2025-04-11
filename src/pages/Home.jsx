import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
        <Header/>
        <div className='flex justify-center items-center h-screen ml-20'>
            <div className='w-1/2  ml-10'>
              <h1 className='text-5xl font-bold text-sky-900'>Empowering Individuals</h1>
              <h2 className='text-4xl font-bold text-blue-500'>To Build Careers</h2>
              <p>Our ultimate goal is to equip individuals not only in core domain skills but also softskills and language training to thrive in the competitive job market.</p>
              <br />
              <Link to='/Contact' className='btn btn-outline border-1 rounded-md p-1 bg-blue-500'>contact us</Link>

            </div>
            <div className='w-1/2 '>
              <img src="./Home.jpg" alt="" />
            </div>

        </div>
        <Footer/>
        </>
  )
}

export default Home