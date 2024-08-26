"use client"
import React, { useState } from 'react';
import List from '@/utils/List';
import Linechart from '../components/Linechart';
import Information from '../components/Information';

const Page = () => {
    const [timeRange, setTimeRange] = useState(7);

    const handleTimeRangeChange = (event: any) => {
        setTimeRange(event.target.value);
        // Logic to update data based on selected time range
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Price',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
            },
            {
                label: 'Total Volume',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
            },
            {
                label: 'Market Cap',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
            },

        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'rgba(75,192,192,1)',
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    return (
        <div className='mt-10 p-4'>
            <h1 className='font-bold text-black text-2xl'>Bitcoin</h1>

            <div className='mt-10'>
                {/* <List /> */}
            </div>
            <div className='mt-4 mb-8'>
                <label htmlFor="timeRange" className='mr-4 font-medium text-lg'>
                    Select Time Range:
                </label>
                <select
                    id="timeRange"
                    value={timeRange}
                    onChange={handleTimeRangeChange}
                    className='p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                >
                    <option value={7}>7 Days</option>
                    <option value={15}>15 Days</option>
                    <option value={30}>30 Days</option>
                    <option value={60}>60 Days</option>
                    <option value={120}>120 Days</option>
                </select>
            </div>

            <div>
                <Linechart data={data} options={options} />
            </div>

            <div className='mt-10'>
                <Information />
            </div>
        </div>
    );
};

export default Page;
