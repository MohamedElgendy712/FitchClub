import React from 'react'
import './Join.css'

const Join = () => {
    return (
        <div className='join' id='join-us'>
            <div className='left-j'>
                <hr/>
                <div>
                    <span className='stroke-text'>ready to</span>
                    <span>level up</span>
                </div>
                <div>
                    <span >your body</span>
                    <span className='stroke-text'>with us</span>
                </div>
            </div>
            <div className='right-j'>
                <form action='' className='email-container'>
                    <input type="email" name='email' placeholder='Enter your Email address'/>
                    <button className='btn btn-j'>join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join