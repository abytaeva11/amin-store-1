import React, { useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { IoRemoveOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const fakeCarouselData = [
    {
        id: 1,
        image: 'https://example.com/image1.jpg',
        text: 'Ноутбуки и ПК - 1',
        link: '/pc3',
    },
    {
        id: 2,
        image: 'https://example.com/image2.jpg',
        text: 'Ноутбуки и ПК - 2',
        link: '/pc2',
    },
    {
        id: 3,
        image: 'https://example.com/image3.jpg',
        text: 'Ноутбуки и ПК - 3',
        link: '/pc1',
    },
    {
        id: 4,
        image: 'https://example.com/image4.jpg',
        text: 'Ноутбуки и ПК - 4',
        link: '/pc',
    },
];

export const HomeSliderModule = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (nextSlide: number): void => {
        setCurrentSlide(nextSlide);
    };


    const getCurrentItem = () => {
        return fakeCarouselData[currentSlide];
    };

    return (
        <div className="home-global">
            <div className="carousel w-[80%] pt-3">
                {fakeCarouselData.map((item, index) => (
                    <div
                        key={item.id}
                        id={`item${item.id}`}
                        className={`carousel-item w-full relative ${index === currentSlide ? 'opacity-100' : 'opacity-40'
                            }`}
                    >
                        <img src={item.image} className="w-full" alt={`Slide ${item.id}`} />
                        <div className="absolute flex flex-col h-full justify-center ml-[70px] items-center text-start ">
                            <h1 className="text-white text-4xl py-10">{item.text}</h1>
                            <NavLink to={item.link}>
                                <button className="w-[253px] h-[56px] rounded-lg text-center bg-blue-100">
                                    перейти
                                </button>
                            </NavLink>
                        </div>
                        <div className="absolute w-[90%] h-[90%] items-end justify-end flex">
                            <a
                                href={`#item${index === 0 ? fakeCarouselData.length : index}`}
                                className="btn bg-gray-700 text-white border-none mr-[15px]"
                                onClick={() => changeSlide(index === 0 ? fakeCarouselData.length - 1 : index - 1)}
                            >
                                <HiOutlineArrowLeft />
                            </a>
                            <a
                                href={`#item${index === fakeCarouselData.length - 1 ? 1 : index + 2}`}
                                className="btn bg-gray-700 text-white border-none"
                                onClick={() => changeSlide(index === fakeCarouselData.length - 1 ? 0 : index + 1)}
                            >
                                <HiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                {fakeCarouselData.map((item, index) => (
                    <a
                        key={item.id}
                        href={`#item${item.id}`}
                        className={`text-gray-700 text-7xl ${index === currentSlide ? 'opacity-100' : 'opacity-40'}`}
                        onClick={() => changeSlide(index)}
                    >
                        <h3>
                            <IoRemoveOutline />
                        </h3>
                    </a>
                ))}
            </div>
        </div>
    );
};

