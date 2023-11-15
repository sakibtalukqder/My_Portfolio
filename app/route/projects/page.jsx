// components/Portfolio.js
import React from 'react';
import Image from 'next/image';



const items = // data/portfolio.json
    [
        {
            "title": "Contract Management App",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "technologies": "React, ExpressJs, MomgoDb, Tailwind CSS",
            "imageName": "project1.png",
            "ctaLink": "https://frienemie.netlify.app/",
        },
        {
            "title": "Contract Page",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "technologies": "Html5, Css4, Bootstrap5, JavaScript(Vanilla)",
            "imageName": "project2.png",
            "ctaLink": "https://sakibtalukqder.github.io",
        },
        {
            "title": "Product Information (Watch)",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "technologies": "Html5, Css4, Bootstrap5, JavaScript(Vanilla)",
            "imageName": "project3.png",
            "ctaLink": "https://sakibtalukqder.github.io/watch",
        },
        {
            "title": "Basic Calculator",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "technologies": "Html5, Css4, JavaScript(Vanilla)",
            "imageName": "project4.png",
            "ctaLink": "https://sakibtalukqder.github.io/calculator",
        },
        {
            "title": "Social Organization",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "technologies": "Html5, Css4,Bootstrap5, JavaScript(Vanilla)",
            "imageName": "project5.png",
            "ctaLink": "https://pficlint.netlify.app",
        },
    ]


const page = () => {
    return (
        <div className="container mx-auto">
            <div className='text-2xl font-bold bg-blue-50 text-center p-3 mt-4'>My Works</div>
            {items.map((item, index) => {

                const { title, description, technologies, imageName, ctaLink } = item;
                const isReversed = index % 2 !== 0;
                const imageUrl = `/${imageName}`;

                return (
                    <div key={index} className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} my-8 justify-center items-center mx-2 md:mx-8`}>
                        <div className="md:w-1/2">
                            <Image src={imageUrl} alt={title} width={500} height={300} />
                        </div>
                        <div className="md:w-1/2 p-8">
                            <h2 className="text-2xl font-bold mb-4">{title}</h2>
                            <p className="mb-4">{description}</p>
                            <p className="mb-4">
                                <strong>Technologies used:</strong> {technologies}
                            </p>
                            <a href={ctaLink} className=" btn btn-success btn-sm">
                                {'View case study ==>'}
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default page;