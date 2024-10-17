import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/Group.png';
import { GiProgression } from 'react-icons/gi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaArrowTrendDown } from 'react-icons/fa6';

const List = ({ coin }: { coin: any }) => {
    const priceChangePercentage = coin.price_change_percentage_24h;

    return (
        <div className='bg-muted w-full rounded-md p-4 mx-auto mt-3'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Image src={coin.image} alt={`${coin.name} logo`} width={40} height={40} />
                    <div>
                        <h1 className='font-bold uppercase'>{coin.symbol}</h1>
                        <h1 className='text-gray-500'>{coin.name}</h1>
                    </div>
                </div>

                <div className={`border rounded-full p-2 ${priceChangePercentage > 0 ? 'border-green-500' : 'border-red-500'}`}>
                    <h1 className={`${priceChangePercentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {priceChangePercentage.toFixed(2)}%
                    </h1>
                </div>

                <div className='flex items-center gap-2'>
                    {
                        priceChangePercentage > 0 ? <GiProgression className='text-green-500' size={25} /> : <FaArrowTrendDown className='text-red-500' size={25} />
                    }
                    <h1 className={`${priceChangePercentage > 0 ? 'text-green-500' : 'text-red-500'} font-bold`}>
                        ${coin.current_price.toLocaleString()}
                    </h1>
                </div>

                <h1 className='text-gray-500'>{coin.total_volume.toLocaleString()}</h1>
                <h1 className='text-gray-500'>{coin.market_cap.toLocaleString()}</h1>

                <IoMdHeartEmpty className='cursor-pointer text-green-500' size={30} />
            </div>
        </div>
    );
}

export default List;
