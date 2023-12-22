'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNode, faJava, faPython, faGithub, faUbuntu, faBootstrap, faFirefox, faWindows, faAndroid, faNodeJs, faChromecast } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { Accordion } from 'keep-react';
import { CaretDown, CaretUp } from "phosphor-react";
import img from '@/public/sakib4.jpg'


const skills = [

    {
        Title: 'Programming Language',
        Array: [
            { name: 'Python', icon: faPython, level: 8.8 },
            { name: 'C', img: '/Icon/C.png', level: 5 },
            { name: 'Java', icon: faJava, level: 8.5 },
            { name: 'Csharp', img: '/Icon/csharp.png', level: 8.5 },
            { name: 'JavaScript', icon: faJs, level: 9 },
            { name: 'C++', img: '/Icon/Cpp.png', level: 3 },
            { name: 'ES6', icon: faJs, level: 8 },
            { name: 'Arduino', img: '/Icon/Arduino.png', level: 8 },
        ],

    },

    {
        Title: 'FrontEnd Development',
        Array: [
            { name: 'React', icon: faReact, level: 8 },
            { name: 'Next.js', img: '/Icon/next.png', level: 5 },
            { name: 'HTML', icon: faHtml5, level: 8.6 },
            { name: 'CSS', icon: faCss3, level: 7 },
            { name: 'Tailwind', img: '/Icon/tailwind.png', level: 8.5 },
            { name: 'Bootstrap', icon: faBootstrap, level: 7 },
            { name: 'Daisyui', img: '/Icon/daisyui.png', level: 7.6 },
            { name: 'KeepReact', img: '/Icon/keep.svg', level: 7 },
        ],

    },

    {
        Title: 'BackEnd Development',
        Array: [
            { name: 'Node.js', icon: faNodeJs, level: 8 },
            { name: 'Express.js', icon: faNode, level: 6 },
            { name: 'MongoDb', img: '/Icon/mongo.png', level: 6 },
            { name: 'FireBase', img: '/Icon/firebase.png', level: 6 },
            { name: 'Postman', img: '/Icon/Postman.png', level: 6 },
            { name: 'Django', img: '/Icon/django.png', level: 1 },
            { name: 'Nodemon', img: '/Icon/npm.png', level: 10 },
            { name: 'bcrypt', img: '/Icon/npm.png', level: 3 },
        ],

    },

    {
        Title: 'Graphical Interface',
        Array: [
            { name: 'Illustrator', img: '/Icon/ai.png', level: 9 },
            { name: 'Photoshop', img: '/Icon/ps.png', level: 8 },
            { name: 'Canva', img: '/Icon/Canva.png', level: 9 },
            { name: 'Adobe XD', img: '/Icon/Xd.png', level: 7 },
        ],

    },

    {
        Title: 'Office and Docs',
        Array: [
            { name: 'Docs', img: '/Icon/docs.png', level: 7 },
            { name: 'SpaceSheet', img: '/Icon/sheet.png', level: 7 },
            { name: 'MsAccess', img: '/Icon/access.png', level: 8 },
            { name: 'Powerpoint', img: '/Icon/PowerPoint.png', level: 8 },
        ],

    },

    {
        Title: 'Oprating System',
        Array: [
            { name: 'Windows', icon: faWindows, level: 10 },
            { name: 'Ubuntu', icon: faUbuntu, level: 9 },
            { name: 'Android', icon: faAndroid, level: 10 },
            { name: 'Chrome OS', icon: faChromecast, level: 9 },
        ],

    },

    {
        Title: 'Others',
        Array: [
            { name: 'Github', icon: faGithub, level: 8 },
            { name: 'VS Code', img: '/Icon/code.png', level: 9 },
            { name: 'FireFox', icon: faFirefox, level: 10 },
            { name: 'Arduino', img: '/Icon/arduino_2.png', level: 9 },
        ],
    },

];

const SkillCard = ({ skill }) => {
    return (
        <div className=" w-32 h-32 p-3 flex flex-col items-center justify-center border">
            <figure className='flex justify-center items-center h-16 w-16 overflow-hidden '>
                {
                    skill.icon ?
                        <FontAwesomeIcon icon={skill.icon} className="text-md mb-2 h-12 w-12 text-black textAnimation" />
                        : <img src={skill.img} alt={skill.name} className="mb-2 h-12 w-12" />
                }
            </figure>
            <h3 className="text-md font-semibold mb-2">{skill.name}</h3>
            <progress className="progress progress-accent w-full h-1" value={skill.level * 10} max="100"></progress>
        </div>
    );
};

const page = () => {
    return (
        <div className="hero my-8">
            <div className="hero-content md:items-start flex-col lg:flex-row">
                <div className='md:w-1/2'>
                    <div className="flex justify-center md:justify-start">
                        <figure className='w-72 h-72 mb-8 overflow-hidden flex items-center justify-center rounded shadow-xl glow'>
                            <Image src={img} alt='Sakib Picture' />
                        </figure>
                    </div>
                    <div className='textAnimation'>
                        <h1 className="text-4xl font-bold">Things I worked With .... !</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className=''>Language: <span className=' text-green-200'>English and Bangla both Reading and Speaking .</span></p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Accordion
                        openIcon={<CaretUp />}
                        closeIcon={<CaretDown />}
                        iconPosition="right"
                        // alwaysOpen={true}
                        flush={true}
                    >
                        {
                            skills.map((Key, index) => (
                                <Accordion.Panel key={index}>
                                    <Accordion.Title className='text-black'>
                                        {Key.Title}
                                    </Accordion.Title>
                                    <Accordion.Content className='flex justify-start'>
                                        <div className='flex flex-wrap justify-center gap-2 py-2'>
                                            {Key.Array.map((skill, index) => (
                                                <SkillCard key={index} skill={skill} />
                                            ))}
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default page;