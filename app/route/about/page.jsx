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
            <Social />
            <Testimonials />
        </div>
    );
};

export default page;