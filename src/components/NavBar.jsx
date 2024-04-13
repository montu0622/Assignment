import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {Accordion} from 'react-bootstrap';
import { FaAngleDown, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";


const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    const  handleMobileNav =()=>{
        setIsActive(!isActive)
    }
    
    return (
        <>

            <div className="header_wrapper">
                <nav className="navbar_container">
                    {
                        windowWidth < 990 ?
                            <>

                            </>
                            :
                            <>
                                <div className="top_nav_bar">
                                    <ul>
                                        <li><Link to="#" className="Nav_Link">Contact  Sale</Link></li>
                                        <li><Link to="#" className="Nav_Link">Sign In</Link></li>
                                    </ul>
                                </div>
                            </>
                    }

                    <div className="menu_bar">
                        <ul className="menu_bar_right">
                            {windowWidth < 990 ?
                                <>
                                    <li><Link to="#" className="menu_link">INTERCOM</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to="#" className="menu_link">INTERCOM</Link></li>

                                    <li className="products"><Link to="#" className="menu_link " >Products <FaAngleDown /></Link>

                                        <ul className="Product_dropdown_menu">
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                        </ul>

                                    </li>
                                    <li className="resoreces"><Link to="#" className="menu_link ">Resorces <FaAngleDown /></Link>
                                        <ul className="Resorece_dropdown_menu">
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                            <li><Link to="#" className="Demo">DEMO</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" className="menu_link">Customers</Link></li>
                                    <li><Link to="#" className="menu_link">Pricing</Link></li>
                                </>
                            }

                        </ul>
                        <ul className="menu_bar_left" onClick={handleClick}>
                            {
                                windowWidth < 990 ? <>
                                    {click ?
                                        <li className="icons"  onClick={handleMobileNav}><FaTimes /></li>

                                        :
                                        <li className="icons" onClick={handleMobileNav}><FaBars /></li>
                                    }



                                </>
                                    :
                                    <>
                                        <li><Link to='#' className="menu_button_start">Start free trial&nbsp;&nbsp;<FaArrowRight /></Link></li>
                                        <li><Link to='#' className="menu_botton_view">View demo</Link></li>

                                    </>

                            }


                        </ul>
                    </div>

                </nav>

            </div>
            {
                windowWidth < 990 ?
                 <>
                      <div className="mobie_menu" id={ isActive ? "mobile_nav": " "} >
                <nav>
                       <Accordion>
                            <Accordion.Item eventKey="0" className="item">
                                <Accordion.Header>Products</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="item">
                                <Accordion.Header>Resorces</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                        <li><Link to="#" className="mobile_link">DEMO</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                       </Accordion>
                      
                </nav>
                        <ul>
                        <li><Link to="#" className="mobile_linke ">Customers</Link></li>
                        <li><Link to="#" className="mobile_linke ">Pricing</Link></li>
                        <li><Link to='#' className="mobile_linke  menu_button_start start">Start free trial&nbsp;&nbsp;<FaArrowRight /></Link></li>
                        <li><Link to='#' className="mobile_linke menu_botton_view view">View demo</Link></li>
                       </ul>
            </div>
                
                </> :
                
                <>
               
                </>
            }
           
        </>
    );
};

export default NavBar;