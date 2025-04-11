import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const About = () => {
    return (
        <>
            <div>
                <Header />
                <div className='bg-sky-100 p-30 ' >
                    <h1 className='text-5xl font-bold'>About us</h1>
                </div>
                <div className='flex'>
                    <div className='p-40' >
                        <img src="./pic-22.jpg" alt="imgames" />

                    </div>
                    <div className='m-8 p-8 text-small'>
                        <h1 className='text-xl font-bold'>Dedicated to Your Success</h1>
                        <br />
                        <p>Welcome to Skills Development Hub, your premier destination for free job-oriented technology training programs. At Skills Development Hub, we are dedicated to empowering individuals with the skills and knowledge they need to succeed in today’s fast-paced and technology-driven world.</p>
                        <p>Managed by Professionals Solidarity Forum (PSF) and supported by Helping Hand Foundation (HHF), we strive to make quality education accessible to all. Our skills development centre is committed to provide high-quality, hands-on training in various technology-related fields + softskills and language skills, helping learners acquire the skills necessary to secure employment and thrive in their careers.</p>
                        <p>With a team of experienced instructors and a curriculum designed to meet industry standards, Skills Development Hub offers a dynamic learning environment where students can develop their talents and unleash their full potential. Whether you’re a beginner looking to kickstart your career in tech or a seasoned professional seeking to upgrade your skills, we have programs tailored to suit your needs.</p>

                    </div>
                </div>
                <div className='flex '>
                    <div className='p-20'>
                        <img className='w-500 '  src="./psf.png" alt="psf" />

                    </div>
                    <div className='m-10 p-10 text-small'>
                        <p>MANAGED BY</p>
                        <h1 className='font-bold'>PSF – Professionals Solidarity Foundation</h1>
                        <p>PSF’s vision is to empower professionals to use their skills, time, and creativity to bring a positive change in self and society. Committed to addressing the needs of seasoned professionals and fresh graduates alike, PSF offers top-tier, industry-specific training and comprehensive job and career guidance. Our mission is to support professionals in achieving excellence not only in their careers but also in their personal well-being, fostering a community where growth and positive impact are paramount.</p>
                        <p></p>

                    </div>
                </div>

                <div className='flex'>
                    <div className='p-30'>
                        <img className='w-300' src="./seed_Logo3.png" alt="seed" />

                    </div>
                    <div className='m-10 p-10 text-small'>
                    
                        <h1>SPONSORED BY</h1>
                        <p>SEED-Support for Education and Economic Development; is a USA based Charity Organization formed solely to help improve the quality of life for the under-privileged in India by providing the best Educational and Economical opportunities. Elevate the quality of their lives by providing optimum Medical Care, Quality Education & Hands-on Technical Skills trainings, and providing other prospects to improve the literacy status.</p>

                    </div>
                </div>
                <Footer/>


            </div>

        </>
    )
}

export default About