import React from 'react'

const Footer = () => {
    return (
        <>
                <div className='bg-sky-900 flex p-10' >
            <div>


                    <div className='m-2 gap-1 px-5 '>
                        <img className='w-50' src="./footerLogo.png" alt="sd hub" />
                        <br />
                        <p>We believe that access to quality education should not be limited by financial constraints, </p>
                        <p>and we strive to level the playing field for all.</p>
                    </div>
                </div>
                <div>
                    <div className='m-2 gap-1 flex flex-col p-10 '>
                        <a href="#">Quick link</a>
                        <a href="#">Contact us</a>
                        <a href="#">About us</a>
                        <a href="#">Courses</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer