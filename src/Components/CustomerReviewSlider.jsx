import React from 'react'
import Slider from 'react-slick';

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomerReviewSlider({book}) {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <Slider {...sliderSettings}>
                {book.review.map((user, index) => (
                    <div key={index} className='p-4'>
                        <div className='bg-gray-800 p-6 rounded-lg shadow-md h-full'>
                            <div className="flex items-center gap-3">
                                <div className='user-img w-22 h-22 rounded-full overflow-hidden'>
                                    <img loading='lazy' className='w-full h-full object-cover' src={user.image} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-100 mb-2">{user.name}</h3>
                                    <h3 className="font-semibold text-gray-100 mb-2">{user.title}</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 mt-5">
                                <p className="text-gray-200 ">{user.comment}</p>
                                <p className="text-gray-200 shrink-0">{new Date(user.date).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default CustomerReviewSlider