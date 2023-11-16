'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faC } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faNode, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import img from '@/public/sakib1.jpg'
import Image from 'next/image';

const skills = [
    { name: 'Python', icon: faPython, level: 7 },
    { name: 'JavaScript', icon: faJs, level: 8 },
    { name: 'Java', icon: faJava, level: 5 },
    { name: 'React', icon: faReact, level: 8 },
    { name: 'Node.js', icon: faNode, level: 7 },
    { name: 'Next.js', icon: faReact, level: 5 },
    { name: 'Express.js', icon: faNode, level: 6 },
    { name: 'MongoDb', icon: faDatabase, level: 6 },
    { name: 'HTML', icon: faHtml5, level: 8 },
    { name: 'CSS', icon: faCss3, level: 7 },
    { name: 'C', icon: faC, level: 5 },
    { name: 'C#', icon: faC, level: 6 },
];

const SkillCard = ({ skill }) => {
    return (
        <div className=" w-32 h-32 p-1 flex flex-col items-center justify-center">
            <figure className='flex justify-center items-center h-32 w-32'>
                <FontAwesomeIcon icon={skill.icon} className="text-xl mb-2 h-16 w-16" />
            </figure>
            <progress className="progress progress-accent" value={skill.level * 10} max="100"></progress>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
        </div>
    );
};

const page = () => {
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className='md:w-1/2'>
                    <div className="flex justify-center md:justify-start">
                        <figure className='w-72 h-72 mb-8 overflow-hidden flex items-center justify-center'>
                            <Image src={img} alt='Sakib Picture' />
                        </figure>
                    </div>
                    <h1 className="text-4xl font-bold">Things I worked With .... !</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className="md:w-1/2 flex flex-wrap justify-center gap-2 py-2">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;