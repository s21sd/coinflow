"use client"
import { useEffect, useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import Card from "@/utils/Card";
import List from "@/utils/List";

export function Crypto() {
    const [coins, setCoins] = useState([]);

    const fetchCoins = async () => {
        try {
            const response = await fetch(`/api`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCoins(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    // useEffect(() => {
    //     fetchCoins();
    // }, []);
   

    return (
        <Tabs defaultValue="account" className="w-[90%] mx-auto">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Grid</TabsTrigger>
                <TabsTrigger value="password">List</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <ScrollArea className='flex h-screen mb-10'>

                    <div className="flex justify-between items-center flex-wrap gap-10 mt-10 ">
                        {coins.map((coin, index) => (
                            <Card key={index} coin={coin} />
                        ))}
                    </div>
                </ScrollArea>
            </TabsContent>
            <TabsContent value="password">
                <ScrollArea className="flex justify-between items-center h-screen flex-wrap gap-5">
                    {coins.map((coin, index) => (
                        <List key={index} coin={coin} />
                    ))}
                </ScrollArea>
            </TabsContent>
        </Tabs>
    );
}
