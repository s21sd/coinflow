import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Card from "@/utils/Card"
import List from "@/utils/List"


export function Crypto() {
    const fetchCoins = async () => {
        try {
            const response = await fetch(`/api/coins`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    fetchCoins();
    return (
        <Tabs defaultValue="account" className="w-[90%] mx-auto">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Grid</TabsTrigger>
                <TabsTrigger value="password">List</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <div className="flex justify-between items-center flex-wrap gap-10 mt-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </TabsContent>
            <TabsContent value="password">
                <ScrollArea className="flex justify-between items-center h-screen flex-wrap gap-5">
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                </ScrollArea>
            </TabsContent>
        </Tabs>
    )
}
