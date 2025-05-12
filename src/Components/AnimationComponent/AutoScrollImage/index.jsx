import { useState, useEffect } from "react";
import "./index.scss";

const images = [
"https://picsum.photos/id/1018/800/400",
"https://picsum.photos/id/1025/800/400",
"https://picsum.photos/id/1039/800/400",
"https://picsum.photos/id/1041/800/400",
];

const AutoScrollImage = () => {
const [current, setCurrent] = useState(0);
const length = images.length;

useEffect(() => {
const autoSlide = setInterval(() => {
    setCurrent((prev) => (prev + 1) % length);
}, 4000);

return () => clearInterval(autoSlide);
}, [length]);

return (
<div className="slider">
    {images.map((img, index) => (
    <div
        className={index === current ? "slide active" : "slide"}
        key={index}
    >
        {index === current && <img src={img} alt={`slide ${index}`} />}
    </div>
    ))}
</div>
);
};

export default AutoScrollImage;
