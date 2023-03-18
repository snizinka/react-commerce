import React from 'react'
import { logo, payment } from '../assets';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';
import { ImGithub } from 'react-icons/im';

function Footer() {
    return (
        <div className='bg-black text-[#949494] py-20 font-titleFont'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
                <div className='flex flex-col gap-7'>
                    <p className='text-[30px] font-bold text-gray-400'>OSKANS</p>
                    <p className='text-white text-sm tracking-wide'>oskans.com</p>
                    <img className='w-56' src={payment} alt="payment" />
                    <div className='flex gap-5 text-lg text-gray-400'>
                        <ImGithub className='hover:text-white duration-300 cursor-pointer'></ImGithub>
                        <FaYoutube className='hover:text-white duration-300 cursor-pointer'></FaYoutube>
                        <FaFacebookF className='hover:text-white duration-300 cursor-pointer'></FaFacebookF>
                        <FaTwitter className='hover:text-white duration-300 cursor-pointer'></FaTwitter>
                        <FaInstagram className='hover:text-white duration-300 cursor-pointer'></FaInstagram>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p>Ukraine, Sumy, Lunlinska 10</p>
                        <p>Mobile: 0997434796</p>
                        <p>Telegram: 0997434796</p>
                        <p>e-mail: bogdanosckinss@gmail.com</p>
                    </div>
                </div>

                <div className=''>
                    <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                    <div className='flex flex-col gap-2 text-base'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill></BsPersonFill></span>{" "}my account</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal></BsPaypal></span>{" "}checkout</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome></FaHome></span>{" "}order tracking</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn></MdLocationOn></span>{" "}help & support</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center'>
                    <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail' type="text" />
                    <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer