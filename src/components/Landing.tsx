import React from 'react';

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
        </div>
    );
}

export default Landing;
