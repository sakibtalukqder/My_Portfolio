import React from 'react';
import Image from 'next/image';

const items = 
    [
        {
            "title": "My Portfolio ",
            "description": "(this.website)",
            "technologies": "NextJs, React, TailwindCSS, DaisyUi, KeepReact",
            "imageName": "/projects/project6.png",
            "ctaLink": "https://sakibtalukqder.netlify.app",
        },

        {
            "title": "Contract Management App",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "technologies": "React, ExpressJs, MomgoDb, Tailwind CSS",
            "imageName": "/projects/project1.png",
            "ctaLink": "https://frienemie.netlify.app",
        },

        {
            "title": "Contract Page",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "technologies": "Html5, Css4, Bootstrap5, JavaScript(Vanilla)",
            "imageName": "/projects/project2.png",
            "ctaLink": "https://sakibtalukqder.github.io",
        },

        {
            "title": "Product Information (Watch)",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "technologies": "Html5, Css4, Bootstrap5, JavaScript(Vanilla)",
            "imageName": "/projects/project3.png",
            "ctaLink": "https://sakibtalukqder.github.io/watch",
        },

        {
            "title": "Basic Calculator",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "technologies": "Html5, Css4, JavaScript(Vanilla)",
            "imageName": "/projects/project4.png",
            "ctaLink": "https://sakibtalukqder.github.io/calculator",
        },

        {
            "title": "Social Organization",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "technologies": "Html5, Css4,Bootstrap5, JavaScript(Vanilla)",
            "imageName": "/projects/project5.png",
            "ctaLink": "https://pficlint.netlify.app",
        },
    ]


const page = () => {
    return (
        <div className='my-8'>
            <div className='text-xl bg-green-50 text-gray-950 text-center p-3'>My Works & Experience </div>
            {
                items.map((item, ind) => (
                    <div key={ind} className="hero gap-7">
                        <div className={`hero-content flex-col ${ind % 2 == 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                            <>
                                <div className="text-center lg:text-left">
                                    <Image src={item.imageName} alt={item.title} width={500} height={300} />
                                </div>
                                <div className=" hero-content w-full max-w-sm shadow-2xl p-4 md:p-10">
                                    <div className=" ">
                                        <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                                        <p className="mb-4">{item.description}</p>
                                        <p className="mb-4">
                                            <strong>Technologies used:</strong> {item.technologies}
                                        </p>
                                        <a href={item.ctaLink} target='/' className=" btn btn-success btn-sm">
                                            {
                                                ind % 2 == 0 ? 'View case study ==>' : '<== View case study'
                                            }
                                        </a>
                                    </div>
                                </div>
                            </>

                        </div>
                    </div>
                ))
            }

        </div>
        )
    }
      
export default page;