"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const WorkSliderButtons = ({containerStyles, buttonStyles, iconsStyle}) => {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={buttonStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyle}/>
            </button>

            <button className={buttonStyles} onClick={() => swiper.slideNext()}> 
                <PiCaretRightBold className={iconsStyle}/>
            </button>
        </div>
    )
}

export default WorkSliderButtons;
