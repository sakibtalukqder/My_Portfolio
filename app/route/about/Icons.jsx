import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
    return (
        <div className="flex space-x-4 p-4 ps-0 md:ps-4 justify-center items-center">
            <a href="https://www.facebook.com/sakibtalukqder" target='/' className="text-blue-600 hover:text-blue-800 w-8">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/sakibtalukqder" target='/' className="text-pink-600 hover:text-pink-800 w-8">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/sakibtalukqder" target='/' className="text-gray-600 hover:text-gray-800 w-8">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="/route/contract" className="text-red-600 hover:text-red-800 w-8">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
        </div>
    );
};

export default Icons;