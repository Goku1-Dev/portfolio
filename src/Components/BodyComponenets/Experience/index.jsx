// import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { imageFile } from '../../../utils';
import './index.scss';

export const Experience = () => {
  return (
    <div className="Experience_container">
      <div className="Experience_wrapper">
        {/* Header Section */}
        <div className="Experience_header_container">
          <div className="Experience_header_wrapper">
            <div className='Experience_header_left'>
              <img className='Experience_header_img' src={imageFile.experience_img}  alt='Image' />
            </div>
            <div className='Experience_header_right'>
              <h2 className="Experience_header_right_heading">WORK EXPERIENCE</h2>
              <p className="Experience_header_right_para">
                Talk about your journey into full-stack development, what inspires you, 
                and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you, 
                and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you, 
                and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you, 
                and what excites you about building things with code.
              </p>
              <button className='Experience_header_right_button'>View More</button>
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="Experience_body_container">
          <div className="Experience_body_wrapper">
            <div className="Experience_body">
              <div className="Experience_card">
                <div className="icon"><ArrowUpRight /></div>
                <h3>Heading</h3>
                <p>
                  Talk about your journey into full-stack development, what inspires you, 
                  and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you, 
                  and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you, 
                  and what excites you about building things with code.
                </p>
              </div>
              <div className="Experience_card">
                <div className="icon"><ArrowUpRight /></div>
                <h3>Heading</h3>
                <p>
                  Talk about your journey into full-stack development, what inspires you, 
                  and what excites you about building things with code.
                </p>
              </div>
              <div className="Experience_card">
                <div className="icon"><ArrowUpRight /></div>
                <h3>Heading</h3>
                <p>
                  Talk about your journey into full-stack development, what inspires you, 
                  and what excites you about building things with code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

