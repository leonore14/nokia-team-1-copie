import React from 'react';

const Carouselimg = ({ src }) => {
    let imgStyles={
        width:100+"%",
        height: "auto",
    }
    return <img src={src} alt="slide-image" style={imgStyles}/>
}

export default Carouselimg;