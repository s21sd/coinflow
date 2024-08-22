import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Card from "@/utils/Card"
import List from "@/utils/List"

export function Crypto() {
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
                <div className="flex justify-between items-center flex-wrap gap-5">
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                </div>
            </TabsContent>
        </Tabs>
    )
}
