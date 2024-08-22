import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/Group.png'
import { GiProgression } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io";
const List = () => {
    return (
        <div className='bg-muted w-[100%]  rounded-md p-4 mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center '>
                    <div className='flex justify-center items-center gap-2'>
                        <Image src={logo} alt='logo' width={40} height={40} />
                        <div>
                            <h1 className='font-bold'>BTC</h1>
                            <h1 className='text-gray-500'>Bitcoin</h1>
                        </div>
                    </div>
                </div>
                <div className='border rounded-full border-3 border-green-500 p-2'>
                    <h1 className='text-green-500'>7.65 %</h1>
                </div>

                <div className='flex justify-center  items-center gap-2'>
                    <GiProgression className=' cursor-pointer text-green-500' size={25} />
                    <h1 className='text-green-500 font-bold'>$20,447</h1>
                </div>
                <h1 className='text-gray-500'>56,584,112,589</h1>
                <h1 className='text-gray-500 '>56,584,112,589</h1>
                <IoMdHeartEmpty className=' cursor-pointer text-green-500' size={30} />

            </div>
        </div>
    )
}

export default List
