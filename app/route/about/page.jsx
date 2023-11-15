import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education';
import Social from './Social';
import Testimonials from './Testimonials';

const page = () => {
    return (
        <div className=''>
            <AboutMe />
            <Education />
            <Testimonials />
            <Social />
        </div>
    );
};

export default page;