import React from 'react'

const About = () => {
    return (
        <div className='w-full my-32' id="About">
            <div className='max-w-[1240px] mx-auto '>
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                    <div className='text-center'>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className='text-2xl py-6 p-2 text-gray-500 m-10'>
                            <b>Progenome</b> is a website that allows consultation of genetic sequences of nutrients in proteins and peptides, 
                            in a more <b>accessible</b>, <b>effective</b> and <b>efficient</b> way for all professionals and students in the
                            area of ​​biotechnology.
                        </p>
                    </div>

                    <div>
                        <img src="" alt="" />
                    </div>
                </div>

                <div className='grid md:grid-cols-3 gap-2 px-2 text-center m-5'>
                    <div className='border py-8 rounded-xl shadow-lg mt-2'>
                        <p className='text-6xl font-bold l text-green-600'>+5000</p>
                        <p className='text-gray-400 mt-2 text-[1.5rem]'>Text-based queries</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-lg mt-2'>
                        <p className='text-6xl font-bold l text-green-600'>2023</p>
                        <p className='text-gray-400 mt-2 text-[1.5rem]'>Now</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-lg mt-2'>
                        <p className='text-6xl font-bold text-green-600'>2023</p>
                        <p className='text-gray-400 mt-2 text-[1.5rem]'>Now</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About