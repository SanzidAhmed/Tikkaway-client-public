import React from 'react';

const HeaderBanner = () => {
    return (
        <div>
            <div className="carousel w-full md:h-[800px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img  src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="md:btn md:btn-circle">❮</a>
                        <a href="#slide2" className="md:btn md:btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.pexels.com/photos/1893566/pexels-photo-1893566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="md:btn md:btn-circle">❮</a>
                        <a href="#slide3" className="md:btn md:btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="md:btn md:btn-circle">❮</a>
                        <a href="#slide4" className="md:btn md:btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="md:btn md:btn-circle">❮</a>
                        <a href="#slide1" className="md:btn md:btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;