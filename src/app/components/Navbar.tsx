import React from "react"
export const Navbar = () => {
    return (
        <div className="w-[90%] rounded-[12px] mx-auto bg-white mt-10">
            <div>
                <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                    <h1 className="flex title-font cursor-pointer tems-center mb-4 md:mb-0 ml-3 text-xl text-[#1F0E50] font-bold">
                        CoinFlow
                    </h1>
                    <div className="flex flex-wrap items-center text-black font-medium justify-between w-[30%]">
                        <a className="mr-5 hover:text-[#1F0E50] cursor-pointer">Price</a>
                        <a className="mr-5 hover:text-[#1F0E50] cursor-pointer">Market</a>
                        <a className="mr-5 hover:text-[#1F0E50] cursor-pointer">Learn</a>
                        <a className="mr-5 hover:text-[#1F0E50] cursor-pointer">About Us</a>
                    </div>
                    <div className="flex justify-between gap-3">
                        <button className="inline-flex cursor-pointer text-white items-center bg-[#574A7B] border-0 py-1 px-3 focus:outline-none  rounded-md mt-4 md:mt-0">Sign-In
                        </button>
                        <button className="inline-flex cursor-pointer text-black items-center bg-[#DEEA34] hover:bg-[#d5e21e] border-0 py-1 px-3 focus:outline-none rounded-md mt-4 md:mt-0">Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}