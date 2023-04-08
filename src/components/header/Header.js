import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
const Header = () => {
    const [menuOpened , setMenuOpened] = useState(false);
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo'/>
        {
        mobile === true && menuOpened === false 
            ?<div 
                className='mobile-menu'
                onClick={()=> setMenuOpened(!menuOpened)}>
                <img 
                    src={Bars} 
                    alt=""  
                    style={{width:'1.5rem' , height:"1.5rem"}}
                />
            </div> 
            :<ul className='header_menu'>
                <li >
                    <Link
                        onClick={()=> setMenuOpened(!menuOpened)}
                        activeClass='active'
                        to='hero'
                        spy={true}
                        smooth={true}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={()=> setMenuOpened(!menuOpened)}
                        to='programs'
                        spy={true}
                        smooth={true}
                    >
                        Programs
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={()=> setMenuOpened(!menuOpened)}
                        to='reasons'
                        spy={true}
                        smooth={true}
                    >
                        Why us
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={()=> setMenuOpened(!menuOpened)}
                        to='plans'
                        spy={true}
                        smooth={true}
                    >
                        Plans
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={()=> setMenuOpened(!menuOpened)}
                        to='testimonials'
                        spy={true}
                        smooth={true}
                    >
                        Testimonials
                    </Link>
                </li>
            </ul>
        }
            
        </div>
    )
}

export default Header