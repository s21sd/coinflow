"use client";
import React, { useState } from "react";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import user from '../../../public/assets/user.png'
import { useRouter } from "next/navigation";
import { GoReport } from "react-icons/go";
import { Crypto } from "./Crypto";

export function SidebarDemo() {
    const router = useRouter();

    const links = [
        {
            label: "Home",
            href: "#",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Assets",
            href: "#",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },

        {
            label: "Live Trade",
            href: "#",
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Reports",
            href: "#",
            icon: (
                <GoReport className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "#",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },

    ];
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 h-screen  w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",

            )}
        >
            <Sidebar open={open} setOpen={setOpen} animate={true}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <>
                            <Logo />
                        </>
                        <div className="mt-10 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink

                            link={{

                                label: "Sunny",
                                
                                href: "#",
                                icon: (
                                    <Image
                                        src={user}
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                        onClick={() => router.push('/profile')}


                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard />

        </div>
    );
}
export const Logo = () => {
    return (
        <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                CoinFlow
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>
    );
};
const Dashboard = () => {
    return (
        <div className=" w-screen bg-[#d4baff]">
            <div className="flex justify-between mt-10 w-[90%] mx-auto">
                <h1 className="text-3xl font-bold">Assets</h1>
                <div className="flex justify-center items-center gap-2">
                    {/* coinflowapikey123456@ */}
                    <div
                        className="p-4 overflow-hidden w-[50px] h-[50px] hover:w-[240px] bg-[#b9beca] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300"
                    >
                        <div className="flex items-center justify-center fill-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Isolation_Mode"
                                data-name="Isolation Mode"
                                viewBox="0 0 24 24"
                                width="22"
                                height="22"
                            >
                                <path
                                    d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text" placeholder="Search "
                            className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
                        />
                    </div>

                </div>
            </div>
            <div className="flex justify-between mt-10 w-[90%] mx-auto">
                <Crypto />
            </div>

        </div>
    );
};
