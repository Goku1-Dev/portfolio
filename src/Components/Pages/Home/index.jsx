// import React from 'react'
import './index.scss';
import HomePage from '../../BodyComponenets/HomePage';
import Experience from '../../BodyComponenets/Experience';
import Projects from '../../BodyComponenets/Prajects';
import MySkills from '../../BodyComponenets//MySkills';
import Testimonial from '../../BodyComponenets/Testimonial';

const Home = () => {
    return (
        <div className="Home_body_container">
            <div className='Body_Home'>
                <HomePage />
            </div>
            <div className='Body_Experience'>
                <Experience />
            </div>
            <div className='Body_Projects'>
                <Projects />
            </div>
            <div className='Body_MySkills'>
                <MySkills />
            </div>
            <div className='Body_Testimonial'>
                <Testimonial />
            </div>
        </div>
    )
}

export default Home