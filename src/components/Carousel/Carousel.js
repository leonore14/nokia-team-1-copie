import React, {useState} from 'react';
import './Carousel.css';
import Carouselimg from './Carouselimg';
import i1 from './picts/1.jpg'
import i2 from './picts/2.jpg'
import i3 from './picts/3.jpg'
import i4 from './picts/4.jpg'
import i5 from './picts/5.jpg'

const Carousel = () => {
    let sliderArr = [<Carouselimg src={i1} />, <Carouselimg src={i2} />, <Carouselimg src={i3} />, <Carouselimg src={i4} />, <Carouselimg src={i5} />]
    const [x, setX] = useState(0);
    const goLeft = () => {        
        x === 0 ? setX(-100*(sliderArr.length - 1)) : setX(x + 100)
    };
    const goRight = () => {
        x === -100*(sliderArr.length - 1) ? setX(0) : setX(x - 100)
    };

    //setInterval(goRight, 5000)
    


    
    return(
            <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )

                })
            }
            <button class="goLeft" onClick={goLeft}>
            <i class="gg-chevron-left"></i>
            </button>
            <button class="goRight" onClick={goRight}>
            <i class="gg-chevron-right"></i>
            </button>
        </div>
    )
}

export default Carousel