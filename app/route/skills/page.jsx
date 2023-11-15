'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faC } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faNode, faJava, faCSharp, faPython } from '@fortawesome/free-brands-svg-icons';

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
    { name: 'C#', icon: 'fa-csharp', level: 6 },
];

const SkillCard = ({ skill }) => {
    return (
        <div className=" w-64 h-64  p-4 rounded-md shadow-md flex flex-col items-center justify-center">
            <figure className='flex justify-center items-center h-32 w-32'>
                <FontAwesomeIcon icon={skill.icon} className="text-4xl mb-4 h-20 w-20" />
            </figure>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <progress className="progress progress-accent w-56" value={skill.level * 10} max="100"></progress>
        </div>
    );
};

const page = () => {
    return (
        <>
            <div className='text-xl bg-orange-600 text-center p-3 mt-4'>My Skills </div>
            <div className="flex flex-wrap justify-center gap-2 py-2">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </>
    );
};

export default page;