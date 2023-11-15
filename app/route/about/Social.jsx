import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
    return (
        <div className='my-8'>
            <h1 className=' text-2xl my-1 font-bold text-center'>Follow Me on Social Media</h1>
            <div className="flex space-x-4 p-4 justify-center items-center">
                <a href="#" className="text-blue-600 hover:text-blue-800 w-8">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800 w-8">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 w-8">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="#" className="text-red-600 hover:text-red-800 w-8">
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
            </div>
        </div>
    );
};

export default Social;
