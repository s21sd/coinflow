"use client";
import React, { useState, useEffect } from "react";
import Linechart from "../components/Linechart";
import { useSearchParams } from "next/navigation";

const Page = () => {
    const searchParams = useSearchParams();
    const coinname = searchParams.get("coinname")?.toLowerCase() || null;

    const [timeRange, setTimeRange] = useState(7);
    const [chartData, setChartData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (coinsname: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/${coinsname}/market_chart?vs_currency=inr&days=${timeRange}`
            );
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();

            const labels = data.prices.map(([timestamp]: [number, number]) =>
                new Date(timestamp).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                })
            );
            const prices = data.prices.map(([, price]: [number, number]) => price);
            const volumes = data.total_volumes.map(
                ([, volume]: [number, number]) => volume
            );
            const marketCaps = data.market_caps.map(
                ([, marketCap]: [number, number]) => marketCap
            );

            setChartData({
                labels,
                datasets: [
                    {
                        label: "Price (INR)",
                        data: prices,
                        fill: true,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)",
                        borderWidth: 2,
                    },
                    {
                        label: "Total Volume (INR)",
                        data: volumes,
                        fill: true,
                        backgroundColor: "rgba(153,102,255,0.2)",
                        borderColor: "rgba(153,102,255,1)",
                        borderWidth: 2,
                    },
                    {
                        label: "Market Cap (INR)",
                        data: marketCaps,
                        fill: true,
                        backgroundColor: "rgba(255,159,64,0.2)",
                        borderColor: "rgba(255,159,64,1)",
                        borderWidth: 2,
                    },
                ],
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to load chart data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (coinname) {
            fetchData(coinname);
        } else {
            setError("No coin name provided in the query.");
        }
    }, [timeRange, coinname]);

    const handleTimeRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeRange(Number(event.target.value));
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
        },
    };

    return (
        <div className="mt-10 p-4">
            <h1 className="font-bold text-black text-2xl">Cryptocurrency Chart</h1>

            <div className="mt-4 mb-8">
                <label htmlFor="timeRange" className="mr-4 font-medium text-lg">
                    Select Time Range:
                </label>
                <select
                    id="timeRange"
                    value={timeRange}
                    onChange={handleTimeRangeChange}
                    className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value={7}>7 Days</option>
                    <option value={15}>15 Days</option>
                    <option value={30}>30 Days</option>
                    <option value={60}>60 Days</option>
                    <option value={120}>120 Days</option>
                </select>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {chartData && <Linechart data={chartData} options={chartOptions} />}
        </div>
    );
};

export default Page;
