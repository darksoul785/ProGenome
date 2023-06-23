import React from "react"
import { GiSchoolBag, GiArchiveResearch, GiRoundStar, GiAtomicSlashes, GiAtom, GiPriceTag, GiMoneyStack}  from "react-icons/gi"

class Prices extends React.Component {

    render() {
        return (
            <div className='w-full lg:pt-12 font-montserrat App-header' id="Prices">
                <div className='max-w-[1240px] mx-auto h-full'>
                    <div className='grid max-w-[1240px] mx-auto'>
                        <div className="mx-auto pb-5 text-gray-100">
                            <GiMoneyStack size="10rem" />
                        </div>
                        <h1 className="text-5xl font-bold text-gray-100 text-center">Our Prices</h1>
                        <p className='text-[1.5rem] text-gray-400 m-10 text-center'>
                            Choose the plan that better fits your needs!
                        </p>
                    </div>


                    <div className="w-full py-[2rem] px-4 bg-white text-black rounded-lg">
                        <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 grid-cols-2 gap-6">
                            <div className="w-full shadow-md hover:shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(105) duration-300 bg-[#F3F3F3]">
                                <GiAtomicSlashes size="68" className="w-20 p-4 bg-[#44AF58] text-white rounded-lg mx-auto mt-[-3rem]" />
                                <h2 className="text-[1.4rem] font-bold text-center py-4">Free</h2>
                                <p className="text-[1.5rem] font-bold font-face-montserrat pb-2.5">No Charge</p>
                                <div className="text-[1rem] pb-5">
                                    <p>Limited use </p>
                                    <p>5 Results per month</p>
                                </div>
                                <button href="" className="text-[1.1rem] p-2.5">Join now</button>
                            </div>
                            <div className="w-full shadow-md hover:shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(105) duration-300 bg-[#F3F3F3]">
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
                            </div>
    
    
                        </div>
                    </div>
    
    
                </div>
            </div>
        )
    }    
}

export default Prices