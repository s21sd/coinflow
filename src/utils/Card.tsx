import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/Group.png'
import { GiProgression } from "react-icons/gi";

import { IoMdHeartEmpty } from "react-icons/io";
const Card = () => {
    return (
        <div className='bg-gray-600 w-[300px] h-[220px] rounded-md p-4'>
            <div>
                <div className='flex justify-between items-center '>
                    <div className='flex justify-center items-center gap-2'>
                        <Image src={logo} alt='logo' width={40} height={40} />
                        <div>
                            <h1 className='font-bold'>BTC</h1>
                            <h1 className='text-gray-300'>Bitcoin</h1>
                        </div>
                    </div>
                    <IoMdHeartEmpty className=' cursor-pointer text-green-500' size={30} />
                </div>

                <div className='flex justify-start items-center gap-3 mt-2'>
                    <div className='border rounded-full border-3 border-green-500 p-2'>
                        <h1 className='text-green-500'>7.65 %</h1>
                    </div>
                    <GiProgression className=' cursor-pointer text-green-500' size={25} />
                </div>

                <div className='mt-3'>
                    <h1 className='text-green-500 font-bold'>$20,447</h1>
                </div>
                <div className='text-gray-300'>
                    <h1>Total Volume: 56,584,112,589</h1>
                    <h1>Market Cap: 56,584,112,589</h1>
                </div>
            </div>
        </div>
    )
}

export default Card
