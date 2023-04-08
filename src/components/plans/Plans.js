import React from 'react'
import './Plans.css'
import { plansData } from "../../data/plansData";
import WhiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    return (
        <div className='plans-container' id='plans'>
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>
            <div className='plans-header'>
                <span className='stroke-text'>ready to start</span>
                <span>your journey</span>
                <span className='stroke-text'>now with us</span>
            </div>

            {/* plans cards */}
            <div className="plans">
                {plansData.map((plan , i) => (
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        {/* Features */}
                        <div className='features'>
                            {plan.features.map((feature , i)=>(
                                <div className='feature' >
                                    <img src={WhiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>see more benefits -&gt; </span>
                        </div>
                        <button className='btn'>join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans