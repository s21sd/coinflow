import Image from 'next/image';
import React from 'react';
import { GiProgression } from 'react-icons/gi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { FaArrowTrendDown } from "react-icons/fa6";

const Card = ({ coin }: { coin: any }) => {
    const router = useRouter();
    const priceChangePercentage = coin.price_change_percentage_24h;
    const handleClick = (coinname: string) => {
        router.push(`/details/?coinname=${coinname}`)
    }

    return (
        <div onClick={() => handleClick(coin.name)} className='bg-muted cursor-pointer w-[300px] h-[220px] rounded-md p-4' >
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <Image src={coin.image} alt={`${coin.name} logo`} width={40} height={40} />
                        <div>
                            <h1 className='font-bold uppercase'>{coin.symbol}</h1>
                            <h1 className='text-gray-500'>{coin.name}</h1>
                        </div>
                    </div>
                    <IoMdHeartEmpty className='cursor-pointer text-green-500' size={30} />
                </div>

                <div className='flex items-center gap-3 mt-2'>
                    <div className={`border rounded-full p-2 ${priceChangePercentage > 0 ? 'border-green-500' : 'border-red-500'}`}>
                        <h1 className={`${priceChangePercentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {priceChangePercentage.toFixed(2)}%
                        </h1>
                    </div>
                    {
                        priceChangePercentage > 0 ? <GiProgression className='text-green-500' size={25} /> : <FaArrowTrendDown className='text-red-500' size={25} />
                    }

                </div>

                <div className='mt-3'>
                    <h1 className={`${priceChangePercentage > 0 ? 'text-green-500' : 'text-red-500'} font-bold`}>
                        ${coin.current_price.toLocaleString()}
                    </h1>
                </div>
                <div className='text-gray-500'>
                    <h1>Total Volume: {coin.total_volume.toLocaleString()}</h1>
                    <h1>Market Cap: {coin.market_cap.toLocaleString()}</h1>
                </div>
            </div>
        </div >
    );
};

export default Card;
