import React, { useEffect, useState } from 'react';
import './imgslider.css'; // Make sure to create and import this CSS file

function Imgslider() {
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const slider = [
        { src: "https://i.pinimg.com/originals/2a/cd/b1/2acdb1dc422f9707aedd084f7bfbb3db.jpg" },
        { src: "https://i.pinimg.com/originals/8a/89/1c/8a891ce39159faa10cf133449db4a415.jpg" },
        { src: "https://i.pinimg.com/originals/33/8e/de/338ede5f9f949b9c4cc6c1c0c15c6a00.jpg" }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimating(true);
            setTimeout(() => {
                setIndex((index + 1) % slider.length);
                setAnimating(false);
            }, 1000); // This should match the CSS animation duration
        }, 3000);

        return () => clearTimeout(timer);
    }, [index, slider.length]);

    return (
        <div className="slider-container">
            <div className={`slider-wrapper ${animating ? 'animate' : ''}`} style={{ transform: `translateX(-${index * 100}%)` }}>
                {slider.map((item, idx) => (
                    <img key={idx} className="slider-image" src={item.src} alt={`sliderImage-${idx}`} />
                ))}
            </div>
        </div>
    );
}

export default Imgslider;
