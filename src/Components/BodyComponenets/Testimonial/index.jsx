import { useState }  from 'react'
import './index.scss';
import { imageFile } from '../../../utils';
import { useTheme } from '../../../context/ThemeContext';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

    const testimonials = [
    {
        name: "Prasana",
        location: "Tiruchengode, Namakkal",
        description:
        "Hey 👋, my name is Varun Bhabhra! I'm a self-taught developer & designer from West Bengal, India, who is really into unique designs, user experience and writing clean code."
    },
    {
        name: "Sathya",
        location: "Tiruchengode, Namakkal",
        description:
        "Working with Varun was a great experience. He understands UI/UX deeply and delivers professional results."
    },
    {
        name: "Thamarai",
        location: "Tiruchengode, Namakkal",
        description:
        "Varun is a passionate and skilled developer. Highly recommend him for creative frontend solutions."
    },
    {
        name: "Nicky",
        location: "Tiruchengode, Namakkal",
        description:
        "Loved the dedication and unique ideas Varun brings to the table. Great work!"
    }
    ];

const Testimonial = () => {
    const { isDarkMode } = useTheme();
    const [index, setIndex] = useState(0);

    // Use different images based on theme
    const TestimonialImage = isDarkMode ? imageFile.Testimonial_img1 : imageFile.Testimonial_img;


    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const { name, location, description } = testimonials[index];
    return (
        <div className='Testimonial_container'>
            <div className='Testimonial_wrapper'>
                <div className='Testimonial_left_container'>
                    <div className='Testimonial_left_header'>
                        <h2 className='Testimonial_left_heading'>Testimonial</h2>
                        <p className='Testimonial_left_para'>
                            A self-taught developer with expertise in multiple technologies. 
                        </p>
                    </div>
                    <div className='Testimonial_left_body'>
                        <img className='Testimonial_left_img' src={TestimonialImage}  alt='Image' />
                    </div>
                </div>
                <div className='Testimonial_right_container'>
                    <div className="avatar" />
                    <h3 className="name">{name}</h3>
                    <p className="location">{location}</p>
                    <p className="desc">{description}</p>

                    <div className="arrows">
                    <div className="arrow left" onClick={handlePrev}><FaArrowLeft /></div>
                    <div className="arrow right" onClick={handleNext}><FaArrowRight /></div>
                    </div>

                    <div className="dots">
                    {testimonials.map((_, i) => (
                        <span
                        key={i}
                        className={`dot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;