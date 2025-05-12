// import React from 'react'
import { Instagram, Github, Linkedin, ChartGantt } from 'lucide-react';
import { imageFile } from '../../../utils';
import './index.scss';
import AutoScrollImage from '../../AnimationComponent/AutoScrollImage';
export const HomePage = () => {
    return (
        <div className="HomePage_container">
            <div className="HomePage_wrapper">
                <div className="HomePage_Top_container">
                    <div className="HomePage_Top_box_container">
                        <div className='HomePage_Top_left_box'> 
                            <div className='HomePage_element_top'><h1 className='HomePage_element_text'>Front End Dev</h1></div>
                            <div className='HomePage_text_container'>
                                <h6 className='HomePage_text_h6'>👋 Hello there, I’m Gokul Sureshkumar</h6>
                                <h3 className='HomePage_text_h3'>Talk about your journey into full-stack development, what inspires you, and what excites you about building things with code.</h3>
                                <h4 className='HomePage_text_h4'>All the sites on your right are built from scratch in the following stack</h4>
                            </div>
                            <div className='HomePage_button_container'>
                            <button className='HomePage_button'>Download CV</button>
                                <button className='HomePage_button'>Contact Me</button>
                            </div>
                            <div className='HomePage_element_bottom'><h1 className='HomePage_element_bottom_text'>UI/UX</h1></div>
                        </div>
                        <div className="HomePage_Top_right_box">
                            <div className='HomePage_Top_image_box'>
                                <img className='img' src={imageFile.My_image}  alt='Image' />
                            </div>
                        </div>
                    </div>
                    <div className="HomePage_Top_Right_box_container">
                        <div className="HomePage_Top_Right_box_1"></div>
                        <div className="HomePage_Top_Right_box_2"><AutoScrollImage /></div>
                    </div>
                </div>
                <div className="HomePage_Bottom_container">
                    <div className="about_icon"><ChartGantt /></div>
                    <div className='about_heading'>
                        <h2>About Me</h2>
                    </div>
                    <div className="about_content">
                        <p>Talk about your journey into full-stack development, what inspires you,
                            and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you,
                            and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you,
                            and what excites you about building things with code.</p>
                    </div>
                    <div className="social_links">
                        <div className="social_icon"><Instagram /></div>
                        <div className="social_icon"><Github /></div>
                        <div className="social_icon"><Linkedin /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;