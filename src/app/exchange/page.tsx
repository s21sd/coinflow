"use client";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon, RefreshCwIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function CryptoConverter() {
    const [cryptolist, setCryptoList] = useState<any>([]);
    const [fromCurrency, setFromCurrency] = useState("Bitcoin");
    const [toCurrency, setToCurrency] = useState("Ether");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState<number | null>(null);

    const apiurl = "https://api.coingecko.com/api/v3/exchange_rates";

    // Fetch cryptocurrency rates
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiurl);
                const json = await response.json();
                const data = json.rates;

                const tempArray = Object.entries(data).map(([key, value]: any) => ({
                    value: value.name,
                    label: value.name,
                    rate: value.value,
                }));

                setCryptoList(tempArray);
            } catch (error) {
                console.error("Failed to fetch exchange rates:", error);
            }
        };

        fetchData();
    }, []);

    // Handle conversion
    const handleConvert = () => {
        if (!amount || isNaN(parseFloat(amount))) {
            setResult(null);
            return;
        }

        const fromRate = cryptolist.find((item: any) => item.value === fromCurrency)?.rate || 1;
        const toRate = cryptolist.find((item: any) => item.value === toCurrency)?.rate || 1;

        const convertedAmount = (parseFloat(amount) * toRate) / fromRate;
        setResult(convertedAmount);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
            >
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Crypto Converter
                </h1>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex items-center space-x-4">
                        <div className="flex-1">
                            <label htmlFor="fromCurrency" className="block text-gray-700 font-medium mb-2">
                                From
                            </label>
                            <select
                                id="fromCurrency"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}
                            >
                                {cryptolist.map((crypto: any) => (
                                    <option key={crypto.value} value={crypto.value}>
                                        {crypto.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <ArrowRightIcon className="w-6 h-6 text-gray-400 mt-8" />
                        <div className="flex-1">
                            <label htmlFor="toCurrency" className="block text-gray-700 font-medium mb-2">
                                To
                            </label>
                            <select
                                id="toCurrency"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                                value={toCurrency}
                                onChange={(e) => setToCurrency(e.target.value)}
                            >
                                {cryptolist.map((crypto: any) => (
                                    <option key={crypto.value} value={crypto.value}>
                                        {crypto.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            placeholder="Enter amount"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center space-x-2"
                        onClick={handleConvert}
                    >
                        <span>Convert</span>
                        <RefreshCwIcon className="w-5 h-5" />
                    </motion.button>
                </form>

                {result !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 p-4 bg-gray-100 rounded-lg"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Result:</h2>
                        <p className="text-2xl font-bold text-purple-600">
                            {amount} {fromCurrency} = {result.toFixed(6)} {toCurrency}
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
