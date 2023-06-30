import React from "react"
import { GiSchoolBag, GiArchiveResearch, GiRoundStar, GiAtomicSlashes, GiAtom, GiPriceTag, GiMoneyStack}  from "react-icons/gi"

class Prices extends React.Component {

    render() {
        return (
            <div className='w-full lg:pt-12 font-montserrat App-header' id="Prices">
                <div className='w-full h-full m'>
                    <div className='grid max-w-[1240px] mx-auto'>
                        <div className="mx-auto pb-5 text-gray-100">
                            <GiMoneyStack size="10rem" />
                        </div>
                        <h1 className="text-5xl font-bold text-gray-100 text-center">Our Prices</h1>
                        <p className='text-[1.5rem] text-gray-400 m-10 text-center'>
                            Choose the plan that better fits your needs!
                        </p>
                    </div>


                    <div className="w-11/12 py-[2rem] mx-auto px-4 bg-white text-black rounded">

                    <div className=" grid lg:grid-cols-4 sm:grid-cols-2 place-items-center gap-6">
                  
                  
                            <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                                
                                <div className="h-20">

                                    <GiAtomicSlashes size="50" className="p-4 bg-[#44AF58] text-white rounded-t mx-auto w-full" />

                                </div>

                                <div className="px-10 pt-5 h-full">

                                    <h5 className="mb-4 text-xl text-gray-500 dark:text-gray-400">Free plan</h5>
                                        <div className="flex items-baseline text-gray-900 dark:text-white  flex-wrap">
                                            <span className="text-3xl font-semibold">$</span>
                                            <span className="text-5xl font-extrabold tracking-tight">0</span>
                                        </div>
                                        
                                        <ul role="list" className="space-y-5 my-7">
                                            <li className="flex space-x-3">
                                                
                                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">Limited use</span>
                                            </li>
                                            <li className="flex space-x-3">
                                                
                                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">5 results per month</span>
                                            </li>

                                        </ul>

                                </div>

                                <div className="mt-auto">

                                    <button type="button" className="text-white text-xl bg-[#2556A4] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" style={{borderEndEndRadius: "0.5rem", borderEndStartRadius: "0.5rem"}}>Choose plan</button>

                                </div>
                                
                            </div> {/* Card */}

                            <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                                
                                <div className="h-20">

                                    <GiSchoolBag size="50" className="p-4 bg-[#44AF58] text-white rounded-t mx-auto w-full" />

                                </div>

                                <div className="px-10 pt-5 h-full">
                                
                                    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Student plan</h5>
                                    <div className="flex items-baseline text-gray-900 dark:text-white flex-wrap">
                                        <span className="text-3xl font-semibold">$</span>
                                        <span className="text-5xl font-extrabold tracking-tight">49</span>
                                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                    </div>
                                    
                                    <ul role="list" className="space-y-5 my-7">
                                        <li className="flex space-x-3">
                                            
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">Student discount</span>
                                        </li>
                                        <li className="flex space-x-3">
                                            
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">549$/year</span>
                                        </li>
                                    </ul>

                                </div>

                                <div className="mt-auto">

                                    <button type="button" className="text-white text-xl bg-[#2556A4] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" style={{borderEndEndRadius: "0.5rem", borderEndStartRadius: "0.5rem"}}>Choose plan</button>

                                </div>    

                            </div> {/* Card */}

                            <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                                
                            <div className="h-20">

                                <GiArchiveResearch  size="50" className="p-4 bg-[#44AF58] text-white rounded-t mx-auto w-full" />

                            </div>

                            <div className="px-10 pt-5 h-full">

                                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Basic plan</h5>
                                <div className="flex items-baseline text-gray-900 dark:text-white flex-wrap">
                                    <span className="text-3xl font-semibold">$</span>
                                    <span className="text-5xl font-extrabold tracking-tight">79.99</span>
                                    <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                
                                <ul role="list" className="space-y-5 my-7">
                                    <li className="flex space-x-3">
                                        
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">Some advantages</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">$899.99/year</span>
                                    </li>

                                </ul>

                            </div>

                                <div className="mt-auto">

                                    <button type="button" className="text-white text-xl bg-[#2556A4] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" style={{borderEndEndRadius: "0.5rem", borderEndStartRadius: "0.5rem"}}>Choose plan</button>

                                </div>                             
                            </div> {/* Card */}
                            
                            <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                                
                                                                
                                <div className="h-20">

                                    <GiRoundStar size="50" className="p-4 bg-[#44AF58] text-white rounded-t mx-auto w-full" />

                                </div>
                                
                                <div className="px-10 pt-5 h-full">

                                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Premium plan</h5>
                                <div className="flex items-baseline text-gray-900 dark:text-white flex-wrap">
                                    <span className="text-3xl font-semibold">$</span>
                                    <span className="text-5xl font-extrabold tracking-tight">99.99</span>
                                    <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                </div>

                                <ul role="list" className="space-y-5 my-7">
                                    <li className="flex space-x-3">
                                        
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">The best</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">$1,099/year</span>
                                    </li>
                                </ul>

                                </div>

                                <div className="mt-auto">

                                    <button type="button" className="text-white text-xl bg-[#2556A4] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" style={{borderEndEndRadius: "0.5rem", borderEndStartRadius: "0.5rem"}}>Choose plan</button>

                                </div>                             
                            </div> {/* Card */}


                            {/* <div className="w-full shadow-md hover:shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(105) duration-300 bg-[#F3F3F3]">
                                <GiSchoolBag size="68" className="w-20 p-4 bg-[#44AF58] text-white rounded-lg mx-auto mt-[-3rem]" />
                                <h2 className="text-[1.4rem] font-bold text-center py-4">Student</h2>
                                <p className="text-[1.5rem] font-bold font-face-montserrat pb-2">$49.99</p>
                                <div className="text-[1rem] pb-5">
                                    <p>Get a student discount!</p>
                                    <p><b>$549.99</b> for 1 year</p>
                                </div>
                                <button href="" className="text-[1.1rem] p-2.5">Apply here</button>
                            </div>
                            <div className="w-full shadow-md hover:shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(105) duration-300 bg-[#F3F3F3]">
                                <GiArchiveResearch size="68" className="w-20 p-4 bg-[#44AF58] text-white rounded-lg mx-auto mt-[-3rem]" />
                                <h2 className="text-[1.4rem] font-bold text-center py-4">Basic Plan</h2>
                                <p className="text-[1.5rem] font-bold font-face-montserrat pb-2">$79.99</p>
                                <div className="text-[1rem] pb-5">
                                    <p>Sign up for 1 year!</p>
                                    <p>Pay only <b>$899.99</b></p>
                                </div>
                                <button href="" className="text-[1.1rem] p-2.5">Start Free Trial</button>
                            </div>
                            <div className="w-full shadow-md hover:shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(105) duration-300 bg-[#F3F3F3]">
                                <GiRoundStar size="68" className="w-20 p-4 bg-[#44AF58] text-white rounded-lg mx-auto mt-[-3rem]" />
                                <h2 className="text-[1.4rem] font-bold text-center py-4">Premium</h2>
                                <p className="text-[1.5rem] font-bold font-face-montserrat pb-2">$99.99</p>
                                <div className="text-[1rem] pb-5">
                                    <p>Get the best!</p>
                                    <p><b>$1,099.99</b> per year</p>
                                </div>
                                <button href="" className="text-[1.1rem] p-2.5">Start Free Trial</button>
                            </div> */}
    
    
                        </div>
                    </div>
    
    
                </div>
            </div>
        )
    }    
}

export default Prices