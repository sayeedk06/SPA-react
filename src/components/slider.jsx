import React, { useState } from 'react';
import SliderData from './SliderData'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Slider() {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;
    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0:current+1);
        console.log(current)
    }
    const previousSlide = () =>{
        setCurrent(current === 0 ? length-1:current -1);
        console.log(current)
    }
    return (
        
        <div className='slider'>
            <ArrowForwardIosIcon className='right-click' onClick={nextSlide}/>
            <ArrowBackIosIcon className='left-click' onClick={previousSlide}/>
            {SliderData.map( (slide, index) => {
                return (
                    <div className={index===current?'slide-change':'const-slide'}>
                        {index === current && (<img src= {slide.img} alt="text" className='slider-image'/>)}
                    </div>
                    
                )
            }
            
            )}
            
        </div>
    );
}

export default Slider;