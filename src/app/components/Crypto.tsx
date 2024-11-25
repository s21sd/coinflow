"use client"
import { useEffect, useMemo, useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import Card from "@/utils/Card";
import List from "@/utils/List";

interface Coin {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    image: string;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation?: number | null;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply?: number | null;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi?: null;
    last_updated: string;
}

export function Crypto({ searchInput }: { searchInput: string }) {
    const [coins, setCoins] = useState<Coin[]>([]);

    const fetchCoins = async () => {
        try {
            const response = await fetch(`/api`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setCoins(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchCoins();
    }, []);

    const filertedCoins = useMemo(() => {
        if (!searchInput) {
            return coins;
        }
        return coins.filter(coin =>
            coin.name.toLowerCase().includes(searchInput.toLowerCase())
        )
    }, [searchInput, coins])


    return (
        <Tabs defaultValue="account" className="w-[90%] mx-auto">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Grid</TabsTrigger>
                <TabsTrigger value="password">List</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <ScrollArea className='flex h-screen mb-10'>

                    <div className="flex justify-between items-center flex-wrap gap-10 mt-10 ">
                        {filertedCoins.map((coin, index) => (
                            <Card key={index} coin={coin} />
                        ))}
                    </div>
                </ScrollArea>
            </TabsContent>
            <TabsContent value="password">
                <ScrollArea className="flex justify-between items-center h-screen flex-wrap gap-5">
                    {filertedCoins.map((coin, index) => (
                        <List key={index} coin={coin} />
                    ))}
                </ScrollArea>
            </TabsContent>
        </Tabs>
    );
}
