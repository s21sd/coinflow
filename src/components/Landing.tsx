import Image from 'next/image';
import React from 'react';
import bitcoin from '../../public/assets/binance.png'
import dogecoin from '../../public/assets/dogecoin.png'
import Group3 from '../../public/assets/Group (3).png'
import Group4 from '../../public/assets/Group.png'
import { FaGreaterThan } from "react-icons/fa";

import { RiArrowRightCircleFill } from 'react-icons/ri';
const Landing = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className="flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Unlock the Future of Finance:
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Discover a new era of financial freedom with our cutting-edge platform.
                        Exchange, <span className='font-bold'>buy</span>, and trade with confidence, knowing that you're backed by the latest technology and security measures.
                        Experience seamless transactions, <span className='font-bold'>real-time updates</span>, and unparalleled customer support, all designed to make your financial journey smoother and more efficient.
                    </p>

                    <div className="flex justify-center">
                        <button className="inline-flex text-black bg-[#DEEA34] border-0 py-2 px-6 focus:outline-none rounded text-lg">
                            Tally Chart
                        </button>
                        <button className="ml-4 inline-flex bg-gray-100 border-0 py-2 px-6 focus:outline-none text-black rounded text-lg">
                            Get the App
                        </button>
                    </div>
                </div>
                <div className='w-full mt-10 sm:mt-0 sm:w-[50%]'>
                    <video
                        className='rounded-xl w-full h-full object-cover'
                        loop
                        muted
                        autoPlay
                        src='/assets/videos/phoneview.mp4'
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="w-[90%] flex mx-auto justify-between items-center">
                <div className="bg-white w-[200px] h-[120px] overflow-hidden shadow-2xl shadow-white rounded-[18px]  ">
                    <div className="px-4 py-5 sm:p-6">
                        <div className='grid'>
                            <Image alt='logo' width={35} height={35} src={Group4} />
                            <div className='flex gap-1'>
                                <h1 className="text-sm leading-5 font-bold text-gray-500 ">
                                    Bitcoin
                                </h1>
                                <h1 className="text-sm leading-5  text-gray-300 ">
                                    BTC
                                </h1>
                            </div>
                            <h1 className='text-[#5DEB51]'>+1.53</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[120px] w-[200px] overflow-hidden shadow-2xl shadow-white rounded-[18px]   ">
                    <div className="px-4 py-5 sm:p-6">
                        <div className='grid'>
                            <Image alt='logo' width={35} height={35} src={bitcoin} />
                            <div className='flex gap-1'>
                                <h1 className="text-sm leading-5 font-bold text-gray-500 ">
                                    Ethereum
                                </h1>
                                <h1 className="text-sm leading-5  text-gray-300 ">
                                    ETH
                                </h1>
                            </div>
                            <h1 className='text-[#5DEB51]'>+1.53</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[200px] h-[120px] overflow-hidden shadow-2xl shadow-white rounded-[18px]   ">
                    <div className="px-4 py-5 sm:p-6">
                        <div className='grid'>
                            <Image alt='logo' width={28} height={28} src={Group3} />
                            <div className='flex gap-1'>
                                <h1 className="text-sm leading-5 font-bold text-gray-500 ">
                                    Binance
                                </h1>
                                <h1 className="text-sm leading-5  text-gray-300 ">
                                    BUSD
                                </h1>
                            </div>
                            <h1 className='text-[#5DEB51]'>+1.53</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[200px] h-[120px] overflow-hidden shadow-2xl  shadow-white rounded-[18px]   ">
                    <div className="px-4 py-5 sm:p-6">
                        <div className='grid'>
                            <Image alt='logo' width={35} height={35} src={dogecoin} />
                            <div className='flex gap-1'>
                                <h1 className="text-sm leading-5 font-bold text-gray-500 ">
                                    DogeCoin
                                </h1>
                                <h1 className="text-sm leading-5  text-gray-300 ">
                                    DOGE
                                </h1>
                            </div>
                            <h1 className='text-[#5DEB51]'>+1.53</h1>
                        </div>
                    </div>
                </div>
            </div>


            {/* Chart Show */}
            <div className='mt-20'>
                <div className='flex justify-center items-center gap-2'>
                    <FaGreaterThan />
                    <h1 className='text-center font-bold text-xl'>View More Prices </h1>
                </div>
                <div className='mt-10'>
                    <section className="bg-white shadow-2xl shadow-white rounded-[18px] body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-20">
                                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Explore the latest market updates</h1>
                            </div>
                            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                                <table className="table-auto w-full text-left whitespace-no-wrap">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Coin</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm bg-gray-100">Volume</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm bg-gray-100">Market cap</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-900 text-sm bg-gray-100">Change</th>
                                            <th className="w-10 title-font tracking-wider font-bold text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br mr-2">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border border-3px rounded-sm p-2 m-2'>
                                            <td className="px-4 py-3 flex items-center">
                                                <Image src={Group4} alt="Bitcoin" width={20} height={20} className="w-6 h-6 mr-2" />
                                                Bitcoin
                                            </td>
                                            <td className="px-4 py-3">5 Mb/s</td>
                                            <td className="px-4 py-3">15 GB</td>
                                            <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                                            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$20</td>

                                            <td className="w-10 text-center">

                                            </td>
                                        </tr>
                                        <tr className='border border-3px rounded-sm p-2 m-2'>
                                            <td className="px-4 py-3 flex items-center">
                                                <Image src={Group3} alt="Bitcoin" width={20} height={20} className="w-6 h-6 mr-2" />
                                                Ethereum
                                            </td>
                                            <td className="border-t-2 border-gray-200 px-4 py-3">Ethereum ETH</td>
                                            <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                                            <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                                            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$20</td>
                                            <td className="border-t-2 border-gray-200 w-10 text-center">

                                            </td>
                                        </tr>
                                        <tr className='border border-3px rounded-sm p-2 m-2'>
                                            <td className="px-4 py-3 flex items-center">
                                                <Image src={bitcoin} alt="Bitcoin" width={20} height={20} className="w-6 h-6 mr-2" />
                                                Binance
                                            </td>
                                            <td className="border-t-2 border-gray-200 px-4 py-3">Binance BUSD</td>
                                            <td className="border-t-2 border-gray-200 px-4 py-3">50 Mb/s</td>
                                            <td className="border-t-2 border-gray-200 px-4 py-3">50 GB</td>
                                            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$40</td>
                                            <td className="border-t-2 border-gray-200 w-10 text-center">

                                            </td>
                                        </tr>
                                        <tr className='border border-3px rounded-sm p-2 m-2'>
                                            <td className="px-4 py-3 flex items-center">
                                                <Image src={dogecoin} alt="Bitcoin" width={20} height={20} className="w-6 h-6 mr-2" />
                                                DogeCoin
                                            </td>
                                            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">DogeCoin DOGE</td>
                                            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">100 Mb/s</td>
                                            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">200 GB</td>
                                            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$60</td>
                                            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-center items-center gap-2 text-center mt-10">
                                <FaGreaterThan />
                                <h1>Explore Cryptocurrencies</h1>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        </div>
    );
}

export default Landing;
