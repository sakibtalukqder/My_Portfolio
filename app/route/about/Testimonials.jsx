"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni pariatur aspernatur accusamus quam tempora delectus asperiores optio dolor corrupti id esse maiores temporibus eaque, sit totam itaque tenetur consequatur perspiciatis.",
        author: "John Doe",
        profession: "App Developer",
        rating: 5,
        image: "https://source.unsplash.com/300x300/?businessman",
    },
    {
        id: 2,
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni pariatur aspernatur accusamus quam tempora delectus asperiores optio dolor corrupti id esse maiores temporibus eaque, sit totam itaque tenetur consequatur perspiciatis.",
        author: "Jane Smith",
        profession: "App Developer",
        rating: 4,
        image: "https://source.unsplash.com/300x300/?girl",
    },
    {
        id: 3,
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni pariatur aspernatur accusamus quam tempora delectus asperiores optio dolor corrupti id esse maiores temporibus eaque, sit totam itaque tenetur consequatur perspiciatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni pariatur aspernatur accusamus quam tempora delectus asperiores optio dolor corrupti id esse maiores temporibus eaque, sit totam itaque tenetur consequatur perspiciatis.",
        profession: "App Developer",
        author: "Devid Malan",
        rating: 3,
        image: "https://source.unsplash.com/300x300/?man",
    },
    // Add more testimonials as needed
];

const Testimonials = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

    return (
        <>
        <br />
            <div className='text-xl bg-blue-200 text-center p-3'>Testimonials</div>
            <div className="flex flex-col md:flex-row mx-auto mb-8 py-4 items-start shadow-lg">
                <div className="w-full md:w-1/4 px-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`cursor-pointer w-full p-2 mb-2 rounded-md ${selectedTestimonial.id === testimonial.id ? 'bg-gray-100' : 'hover:bg-blue-50'
                                }`}
                            onClick={() => setSelectedTestimonial(testimonial)}
                        >
                            <div className='flex flex-col md:flex-row gap-2'>
                                <figure className=' h-16 w-16 rounded-full overflow-hidden'>
                                    <img src={testimonial.image} alt='user image' />
                                </figure>
                                <div>
                                    {testimonial.author}
                                    <p className='text-sm text-gray-600'>{testimonial.profession}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-3/4 h-full ">
                    <div className="bg-white p-6 rounded-lg">
                        <p className="text-gray-700">- {selectedTestimonial.author}</p>
                        <div className="flex items-center my-2">
                            {[...Array(selectedTestimonial.rating)].map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} className="h-5 w-5 text-yellow-500" />
                            ))}
                            <span className="ml-2 text-gray-600">{selectedTestimonial.rating}/5</span>
                        </div>
                        <p className="text-gray-800">{selectedTestimonial.quote}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
