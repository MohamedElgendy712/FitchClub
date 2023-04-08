import React from 'react'
import Header from '../header/Header'
import './Hero.css'
import Hero_image from '../../assets/hero_image.png'
import Hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

function Hero() {

    const transition = {tpye:'spring' , duration : 2};
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className='hero' id='hero'>
            <div className='blur hero-blur'></div>
            <div className='left-h'>
                <Header/>

             {/* The best ad */}
                <div className='the-best-ad'>
                    <motion.div 
                        initial={{left: mobile ? '165px' : '238px'}}
                        whileInView={{left:'9px'}}
                        transition={{...transition , type:'tween'}}/>
                    <span>the best fitness club in the town</span>
                </div>

            {/* Hero heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>shape</span>
                        <span> your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

            {/* Figures */}
                <div className='figures'>
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={40} delay='4' preFix="+"/>
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>
            
            {/* Hero buttons */}
                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className='right-h'>
                <button className='btn'>Join now</button>

            {/* Heart Rate */}
                <motion.div
                    initial={{right:'-1rem'}}
                    whileInView={{right:'4rem'}}
                    transition={{transition , duration : 1}}
                    className='heart-rate'>
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

            {/* Hero images */}
                <img src={Hero_image} alt="" className='hero-image'/>
                <motion.img
                    initial={{right:'11rem'}}
                    whileInView={{right:'20rem'}}
                    transition={transition}
                    src={Hero_image_back} 
                    alt="" 
                    className='hero-image-back'/>

            {/* Calories */}
                <motion.div
                    initial={{right: '37rem'}}
                    whileInView={{right: '28rem'}}
                    transition={transition}
                    className='calories'>
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero