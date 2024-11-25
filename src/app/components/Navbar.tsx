"use client"
import React, { useState, useEffect } from "react"
import { signInWithPopup, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../redux/store';
import { logIn, logOut } from '../redux/features/auth-slice';
import { auth, provider } from "@/utils/Firebase";
import { toast } from "sonner";
import Image from "next/image";
import { IoExit } from "react-icons/io5";

export const Navbar = () => {
    const router = useRouter();
    const authenticated = useAppSelector((state) => state.authReducer);
    const dispatch = useDispatch<AppDispatch>()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            const { uid, photoURL, displayName, email } = res.user;
            dispatch(logIn({

                isAuth: true,
                user: {
                    uid,
                    photoURL,
                    displayName,
                    email
                }
            }));

            localStorage.setItem('photoURL', photoURL!);
            localStorage.setItem('displayName', displayName!);
            router.push('/dashboard');

        }).catch((error) => {
            toast.error(`Sign-in failed: ${error.message}`);
        });
    }

    const logoutWithGoogle = () => {
        signOut(auth).then(() => {
            toast.success("Sign-out successful");
            dispatch(logOut());
            router.push('/');
        }).catch((error) => {
            toast.error(`Sign-out failed: ${error.message}`);
        });
    }

    return (
        <div className="w-[90%] rounded-[12px] mx-auto bg-white mt-10">
            <div>
                <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                    <h1 className="flex title-font cursor-pointer items-center mb-4 md:mb-0 ml-3 text-xl text-[#1F0E50] font-bold">
                        CoinFlow
                    </h1>
                    <div className="flex flex-wrap items-center text-black font-medium justify-between w-[30%]">
                        <a className="mr-5 hover:text-[#1F0E50] cursor-pointer">Price</a>
                        <a className="mr-5 hover:text-[#1F0E50] cursor-pointer">Compare</a>
                        <a className="mr-5 hover:text-[#1F0E50] cursor-pointer">WatchList</a>
                        <a className="mr-5 hover:text-[#1F0E50] cursor-pointer">About Us</a>
                    </div>
                    <div className="flex justify-between gap-3">
                        {authenticated.isAuth && authenticated.user ? (
                            <div className='flex justify-between items-center gap-3'>
                                <Image className='rounded-full' src={authenticated.user.user.photoURL || ''} width={40} height={40} alt='profile' />
                                <button onClick={logoutWithGoogle} className="inline-flex items-center text-base mt-4 md:mt-0">
                                    <IoExit size={46} />
                                </button>
                            </div>
                        ) : (
                            <button onClick={signInWithGoogle} className="inline-flex cursor-pointer text-white items-center bg-[#574A7B] border-0 py-1 px-3 focus:outline-none rounded-md mt-4 md:mt-0">
                                Sign-In
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
