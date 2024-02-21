"use client"

import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousels({images}) {
    console.log(images);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={1000}>
            {images.map((image, index) => (
                <Carousel.Item key={image.label}>
                    <img
                        src={image.src}
                        alt={image.label}

                    />
                    <Carousel.Caption>
                        <h3>{image.label}</h3>
                        <p>{image.content}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Carousels;
