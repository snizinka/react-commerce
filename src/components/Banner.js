import React, { useState } from 'react'
import { slideo, slidet, slideth } from '../assets';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        slideo,
        slidet,
        slideth
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 :(prev)=>prev-1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 :(prev)=>prev+1)
    }

    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className='w-screen h-[650px] relative'>
                <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                    {
                        data.map(im => {
                            return <img className='w-screen h-full object-cover' loading='prority' src={im} alt="slide" />
                        })
                    }
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                    <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <HiArrowLeft></HiArrowLeft>
                    </div>
                    <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <HiArrowRight></HiArrowRight>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner