import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle  } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { BsColumnsGap } from "react-icons/bs";
import { TbDeviceMobileMessage, TbApiApp } from "react-icons/tb";
import { PiCodeBlockBold } from "react-icons/pi";
import { GoGraph } from "react-icons/go";


import Reactplayer from 'react-player';
import Photo from '../assets/images/photo1.jpg';
import BrandLogo from '../assets/images/images4.png';
import Pelle from '../assets/images/pelle-4.jpg';
import LinktreeLogo from '../assets/images/images3.png';
import Dane from '../assets/images/Dane.jpeg';
import TrueComm from '../assets/images/truecomm.png';
import Christian from '../assets/images/christian.jpeg';
import Omni1 from '../assets/images/omni1.jpg';
import Omni2 from '../assets/images/omni2.jpg';
import Omni3 from '../assets/images/omn3.jpg';
import Rebag from '../assets/images/rebag.png';
import Chaala from '../assets/images/Chaala.jpeg';
import Godt from '../assets/images/godt.png';

// import thumImg from '../assets/images/Black Minimalist Interiors Design YouTube Thumbnail.png';
// import introvideo from '../assets/videos/'
import './Responsive.css';
import './Body.css';
import SwiperCantainer from "./Swiper-box";

const Body = () => {
    return (
        <>

            <main>
                <section className="video_continer">
                    <div className="container_wrapper">
                        <h1>The only AI customer<br />services solution you need</h1>
                        <p>The only solution that combines an AI chatbot, help desk, and procative<br />
                            support-so you can keep costs low, support teams happy, and<br />
                            customers setisfied,
                        </p>
                        <ul className="buttons_links">
                            <li><Link to='#' className="button_start">Start free trial&nbsp;&nbsp;<FaArrowRight /></Link></li>
                            <li><Link to='#' className="botton_view">View demo &nbsp;&nbsp;<FaArrowRight /></Link></li>
                        </ul>

                        <div className="video_container">

                            <Reactplayer url={"https://www.youtube.com/watch?v=C-KyHvm521c"}
                                width="100%"
                                height="100%"
                                controls={true}
                                //  light={<img src={thumImg} alt="thumb"/>}
                                volume={1}
                                muted={true}
                                playIcon={true}

                            >

                            </Reactplayer>
                        </div>
                    </div>
                </section>
                <section className="patner_cantainer">
                    <div className="curve"></div>
                    <div className="patner_wrapper">
                        <span>TRUSTED BY +25,000 BUSINESSES</span>
                    </div>
                    <div className="logo_cantainer">
                        <SwiperCantainer />
                    </div>
                </section>
                <section className="help_cantainer">
                    <div className="help_wrapper">
                        <Link top="#" className="help_desk_link">HELP DESK</Link>
                        <h2>Get more done faster with our Al-enhanced workspace</h2>
                        <p>
                            Maximize productivity with one central workspace that connects
                            your inbox, tickets, and help center.
                        </p>
                        <Link to="/" className="learn_more_link">learn more about our help desk &nbsp; <FaArrowRight /></Link>
                    </div>
                </section>
                <section >
                    <div className="introduction_boxes">
                        <div className="box_wrapper">
                            <div className=" box1  box_cantainer1">
                                <div className="title_name"><span className="check_icon"><FaCheckCircle /></span>&nbsp;&nbsp; AI-enhanced</div>
                                <div className="data_cantainer">
                                    <div className="title_wrapper">
                                        <h6>
                                            Maximize productivity with the fastest shared inbox
                                        </h6>
                                        <p>Our shared inbox Al-enchanced and designed for speed and efficiency-so your team can work smarter and collaborate faster.</p>
                                    </div>
                                    <div className="image_box">
                                        <div className="image_wrapper">
                                            <img src={Photo} alt="project"/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className=" box1  box_cantainer2">
                                <div className="title_name"><span className="check_icon"><FaCheckCircle /></span>&nbsp;&nbsp; Omnichannel</div>
                                <div className="data_cantainer">
                                    <div className="title_wrapper">
                                        <h6>
                                            Better tickets for your team and your customers
                                        </h6>
                                        <p>Resolve complex issue quickly with tickets optimized for team collabortion and real-time customer updates.</p>
                                    </div>
                                    <div className="">
                                        <div className="image_wrapper " id="image2">
                                            <img src={Photo} alt="project"/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className=" box1   box_cantainer3">
                                <div className="title_name"><span className="check_icon"><FaCheckCircle /></span>&nbsp;&nbsp; Designed for efficiency</div>
                                <div className="data_cantainer">
                                    <div className="title_wrapper">
                                        <h6>
                                            Help your customers help themselves
                                        </h6>
                                        <p>Connect your help centeracross the whole platform-so yur customers can find the most accurate answers when and where they need them</p>
                                    </div>
                                    <div className="">
                                        <div className="image_wrapper" id="image3">
                                            <img src={Photo} alt="project"/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="review_cantainer">
                            <div className="brand_logo">
                                <img src={BrandLogo} alt="LOGO"/>
                            </div>
                            <div className="message_box">
                                <p>This thing I notice most about the inbox is the speed. In this text we show a 
                                    <strong>
                                    &nbsp;15% increase in the number of conversions handle.
                                    </strong>
                                    </p>

                                <div className="intro_wrapper">
                                        <div className="image_cantaner">
                                            <img src={Pelle} alt="Pelle"/>
                                        </div>
                                        <div className="carrier_cantainer">
                                            <h6>Pelle Blarke</h6>
                                            <p>International Strategy and Operation Manager, Walt</p>
                                        </div>
                                </div>
                            </div>
                    </div>
                </section>
                {/* ---------------- */}
                <section className="help_cantainer" id="chatbot_cantainer">
                    <div className="help_wrapper" >
                        <Link top="#" className="help_desk_link" id="chatbot">AI CHATBOT</Link>
                        <h2>Resolve 50% of your Customer question. Instantly</h2>
                        <p>
                            Fin, our breakthrough AI chatbot, user the most sophisticated AI technology to deliversafe, accurate answers that resolve customer question and reduce your team's ticket volume intantly.
                        </p>
                        <Link to="/" className="learn_more_link">learn more about Fin &nbsp; <FaArrowRight /></Link>
                    </div>
                </section>
                <section >
                    <div className="introduction_boxes">
                        <div className="box_wrapper">
                            <div className=" box1  box_cantainer1">
                                <div className="title_name"><span className="check_icon" id="checkIcon"><FaCheckCircle /></span>&nbsp;&nbsp; Dramatically reduce your support volume</div>
                                <div className="data_cantainer" id="dataCantainer">
                                    <div className="title_wrapper">
                                        <h6>
                                            An AI chatbot you can trust
                                        </h6>
                                        <p>Build-in safeguards ensure Fin answers questions base solely on your support content. No misleading answers. No off-topic conversations.</p>
                                    </div>
                                    <div className="image_box" id="imageBox">
                                        <div className="image_wrapper">
                                            <img src={Photo} alt="project"/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className=" box1  box_cantainer2">
                                <div className="title_name"><span className="check_icon" id="checkIcon"><FaCheckCircle /></span>&nbsp;&nbsp; Provides safe, trustworthy answers</div>
                                <div className="data_cantainer" id="dataCantainer">
                                    <div className="title_wrapper">
                                        <h6>
                                            Maximize productivity with the fastest shared inbox
                                        </h6>
                                        <p>Fin can triage complex problems and pass them to your human support teams without interruption-so your customers get the best possible experience.</p>
                                    </div>
                                    <div className="">
                                        <div className="image_wrapper " id="image2">
                                            <img src={Photo} alt="project"/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className=" box1   box_cantainer3">
                                <div className="title_name"><span className="check_icon" id="checkIcon"><FaCheckCircle /></span>&nbsp;&nbsp; Solve issues anwhere, any time, in any language  <i>(coming soon)</i></div>
                                <div className="data_cantainer" id="dataCantainer">
                                    <div className="title_wrapper">
                                        <h6>
                                            Connect it all with workflows
                                        </h6>
                                        <p>Easily build powerful, no-code automations for your customers and your teammates with Fin, other bots, triggers, conditions, and rules-all in one place.</p>
                                    </div>
                                    <div className="">
                                        <div className="image_wrapper" id="image3">
                                            <img src={Photo} alt="project"/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="review_cantainer">
                            <div className="brand_logo">
                                <img src={LinktreeLogo} alt="LOGO"/>
                            </div>
                            <div className="message_box">
                                <p>
                                    <strong>
                                    Within six days, Fin is successfully resolvng 42% of conversations. It's truly surpassed my expectations.
                                    </strong>
                                    </p>

                                <div className="intro_wrapper">
                                        <div className="image_cantaner">
                                            <img src={Dane} alt="Dane"/>
                                        </div>
                                        <div className="carrier_cantainer">
                                            <h6>Dane Burgess</h6>
                                            <p>Customer Support Director, Linktree</p>
                                        </div>
                                </div>
                            </div>
                    </div>
                </section>

                {/* =================== */}
                <section className="help_cantainer" id="proactive_cantainer">
                    <div className="help_wrapper" >
                        <Link top="#" className="help_desk_link" id="proactive">PROACTIVE SUPPORT</Link>
                        <h2>Give customers the support they need, before they need it </h2>
                        <p>
                            Onboard, educate, and notify your customers with in-context, automated messages-cutting support volume and keeping customers happy
                        </p>
                        <Link to="/" className="learn_more_link">learn more about proactive support &nbsp; <FaArrowRight /></Link>
                    </div>
                </section>
                <section >
                    <div className="introduction_boxes">
                        <div className="box_wrapper">
                            <div className=" box1  box_cantainer1">
                                <div className="title_name"><span className="check_icon" id="checkIcon_active"><FaCheckCircle /></span>&nbsp;&nbsp; Reduce inbound volume</div>
                                <div className="data_cantainer" id="dataCantainerActive">
                                    <div className="title_wrapper">
                                        <h6>
                                            Product tours
                                        </h6>
                                        <p>Keep new user inside your product-and out of your inbox-using automated, interactive onboarding.</p>
                                    </div>
                                    <div className="image_box" id="imageBox">
                                        <div className="image_wrapper">
                                            <img src={Photo} alt="project"/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className=" box1  box_cantainer2">
                                <div className="title_name"><span className="check_icon" id="checkIcon_active"><FaCheckCircle /></span>&nbsp;&nbsp; Increase CSAT</div>
                                <div className="data_cantainer" id="dataCantainerActive">
                                    <div className="title_wrapper">
                                        <h6>
                                            Outbound messages
                                        </h6>
                                        <p>Keep support volume low by letting customers know when issue aries with the largest selection of message types.</p>
                                    </div>
                                    <div className="">
                                        <div className="image_wrapper " id="image2">
                                            <img src={Photo} alt="project"/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className=" box1   box_cantainer3">
                                <div className="title_name"><span className="check_icon" id="checkIcon_active"><FaCheckCircle /></span>&nbsp;&nbsp; No engineering resources needed</div>
                                <div className="data_cantainer" id="dataCantainerActive">
                                    <div className="title_wrapper">
                                        <h6>
                                           Series
                                        </h6>
                                        <p>Create cohesive targetd message sequences across channels with a no-code visual builer</p>
                                    </div>
                                    <div className="">
                                        <div className="image_wrapper" id="image3">
                                            <img src={Photo} alt="project"/>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="review_cantainer">
                            <div className="brand_logo">
                                <img src={TrueComm} alt="LOGO"/>
                            </div>
                            <div className="message_box">
                                <p>Self-service and proactive support hve helped us 
                                    <strong>
                                    &nbsp;reduce inbound conversation volume by 20%
                                    </strong> &nbsp;
                                    over the past two years, even as our user base has continued to grow.
                                    </p>

                                <div className="intro_wrapper">
                                        <div className="image_cantaner">
                                            <img src={Christian} alt="Dane"/>
                                        </div>
                                        <div className="carrier_cantainer">
                                            <h6>Christian Parker</h6>
                                            <p>Director of Managed Services, TrueCommerce</p>
                                        </div>
                                </div>
                            </div>
                    </div>
                </section>

                {/* =============== */}
                <section className="help_cantainer" id="omnichannel_cantainer">
                    <div className="help_wrapper" >
                        <Link top="#" className="help_desk_link" id="omnichannel">MESSENGER AND OMNICHANNEL</Link>
                        <h2>Deliver conversation support where it works best for your cusomers</h2>
                        <p>
                            Maximize productivity with one central workspace that connects
                            your inbox, tickets, and help center.
                        </p>
                        <Link to="/" className="learn_more_link">learn more about messenger and omnichannel &nbsp; <FaArrowRight /></Link>
                    </div>
                </section>
                <section >
                    <div className="omnichannel_boxes">
                        <div className="omnichannel_box row">
                        <div className="title_name col-md-4 "><span className="check_icon" id="checkIcon_active"><FaCheckCircle /></span>&nbsp;&nbsp;   Deliver support and the exact right moment</div>
                        <div className="title_name col-md-4"><span className="check_icon" id="checkIcon_active"><FaCheckCircle /></span>&nbsp;&nbsp; Give your customers more flexibility and controls over support channels</div>
                        <div className="title_name col-md-4"><span className="check_icon" id="checkIcon_active"><FaCheckCircle /></span>&nbsp;&nbsp; A seamless, beautiful customer experiences</div>


                        </div>
                        <div className="omni_cantainer row">
                            <div className="col-md-6 omni_data">
                            <div className="title_wrapper">
                                        <h6>
                                           Customizable messenger
                                        </h6>
                                        <p>It's<i>your</i> messenger-so have it match your brand with infinite design options.</p>
                                    </div>
                                    <div className="omni_image_cantainer image_cantainer1">
                                        <img src={Omni1} alt="add_1"/>
                                    </div>
                                    <div className="omni_image_cantainer image_cantainer2">
                                        <img src={Omni2} alt="add_1"/>
                                    </div>
                                    <div className="omni_image_cantainer image_cantainer3">
                                        <img src={Omni3} alt="add_1"/>
                                    </div>
                                   
                            </div>
                            <div className="col-md-6 omni_data">
                            <div className="title_wrapper">
                                        <h6>
                                           Configurable experiences
                                        </h6>
                                        <p>Show and hide different contents, features-even entire spaces-to create bespoke messenger experience.</p>
                                    </div>
                                    <div className=" image_cantainer4">
                                        <img src={Omni1} alt="add"/>
                                    </div>
                            </div>
                            
                       
                        </div>
                        <div className="row omic_box">
                            <div className="col-md-3 col-sm-6 omnic_box_wrappper">
                                <div className="omic_icon"><CiMobile2/></div>
                                <div className="omic_data_details">
                                    <h6>Mobile</h6>
                                    <p>Bring the messenger to your mobile app with powerful iOS and Android SDKs.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 omnic_box_wrappper">
                            <div className="omic_icon"><BsColumnsGap/></div>
                            <div className="omic_data_details">
                                    <h6>Omnichannel<br/>messaging</h6>
                                    <p>Support customers using their preferred channel-whether that's email, SMS, social, or more.</p>
                                     </div>
                            </div>
                            <div className="col-md-3 col-sm-6 omnic_box_wrappper">
                            <div className="omic_icon"><MdOutlinePhone/></div>
                                    <div className="omic_data_details">
                                    <h6>Phone</h6>
                                    <p>Centeralize your phone support with <span>Intercom Phone.</span></p>
                                     </div>

                            </div>
                            <div className="col-md-3 col-sm-6 omnic_box_wrappper">
                                <div className="omic_icon"><TbDeviceMobileMessage/></div>
                                <div className="omic_data_details">
                                    <h6>Switch</h6>
                                    <p>Reduce Phone wait times by letting customers switch to messaging mid-call</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="review_cantainer">
                            <div className="brand_logo">
                                <img src={Rebag} alt="LOGO"/>
                            </div>
                            <div className="message_box">
                                <p>Intercom power our customer communications, delivering conversions, customer engagement, and personalized support.
                                    <strong>
                                    &nbsp;The messenger is the heart of this strategy.
                                    </strong> 
                                    
                                    </p>

                                <div className="intro_wrapper">
                                        <div className="image_cantaner">
                                            <img src={Chaala} alt="Dane"/>
                                        </div>
                                        <div className="carrier_cantainer">
                                            <h6>Geronimo Chala</h6>
                                            <p>Chief Consumer Offcer, Rebag</p>
                                        </div>
                                </div>
                            </div>
                    </div>
                </section>

                {/* ======= */}
                <section className="" id="plateform_cantainer">
                    <div className="help_wrapper flatform_wrapper" >
                        <Link top="#" className="help_desk_link" id="platform">PLATFORM</Link>
                        <h2>A single, powerful, easy-to-use platform</h2>
                        <p>
                            Get all your automation, conversations, tickets, customer data, and reporting working together seamlessly. Maximize team performance by connecting all your other tools to our platform.
                        </p>
                        <Link to="/" className="learn_more_link flate_link">learn more about Intercom Platform &nbsp; <FaArrowRight /></Link>
                    </div>
                </section>
                <section className="flatfrom_boxes">
                    <div className="omnichannel_boxes">
                        <div className="omnichannel_box row">
                        <div className="title_name col-md-4 " id="flat_tittle"><span className="flate_check" ><FaCheckCircle /></span>&nbsp;&nbsp; Maximize team performance with actionable insights</div>
                        <div className="title_name col-md-4" id="flat_tittle"><span className="flate_check" ><FaCheckCircle /></span>&nbsp;&nbsp; Stop switching between tools and speed up workflow</div>
                        <div className="title_name col-md-4" id="flat_tittle"><span className="flate_check" ><FaCheckCircle /></span>&nbsp;&nbsp; See all your data in one place</div>


                        </div>
                        <div className="omni_cantainer row">
                            <div className="col-md-6 omni_data " id="flatform_data">
                            <div className="title_wrapper flatform_tittle_wrapper">
                                        <h6>
                                           Reporting
                                        </h6>
                                        <p>Understand and improve the performance of your bots and team with flexible and Customizable reports</p>
                                    </div>
                                    <div className="omni_image_cantainer image_cantainer1" id="flate_images">
                                        <img src={Omni1} alt="add_1"/>
                                    </div>
                                    
                                   
                            </div>
                            <div className="col-md-6 omni_data " id="flatform_data">
                            <div className="title_wrapper flatform_tittle_wrapper">
                                        <h6>
                                           Series
                                        </h6>
                                        <p>View segment, and filter all your customer data-and model it however work best for your business</p>
                                    </div>
                                    <div className=" image_cantainer4 flateform_image" id="flateform_image">
                                        <img src={Omni1} alt="add"/>
                                    </div>
                            </div>
                            
                       
                        </div>
                        <div className="row omic_box ">
                            <div className="col-md-3 col-sm-6 flatform_box_wrapper">
                                <div className="platform_icon" ><GoGraph style={{color:"white"}}/></div>
                                <div className="omic_data_details flatform_data_details">
                                    <h6>Behavioral data</h6>
                                    <p>Craft the best customer support experiences using a complete picture of past action</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 flatform_box_wrapper">
                            <div className="platform_icon " ><PiCodeBlockBold style={{color:"white"}}/></div>
                            <div className="omic_data_details flatform_data_details">
                                    <h6>Custom Actions</h6>
                                    <p>Power bots and workflows with live customer data store in other tools-no engineering resources required</p>
                                     </div>
                            </div>
                            <div className="col-md-3 col-sm-6 flatform_box_wrapper">
                            <div className="platform_icon " ><BsColumnsGap style={{color:"white"}}/></div>
                                    <div className="omic_data_details flatform_data_details">
                                    <h6>App and <br/> integration</h6>
                                    <p>Get all your tools working as one-and add more to existing workflow-with 300+ apps</p>
                                     </div>

                            </div>
                            <div className="col-md-3 col-sm-6 flatform_box_wrapper">
                                <div className="platform_icon " ><TbApiApp style={{color:"white"}}/></div>
                                <div className="omic_data_details flatform_data_details">
                                    <h6>APIs and<br/>webhooks</h6>
                                    <p>Configure Intercom to work best to your with our easy-to-use APIs and webhooks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flatfrom_review">
                    <div className="review_cantainer">
                            <div className="brand_logo godt_logo">
                                <img src={Godt} alt="LOGO"/>
                            </div>
                            <div className="message_box">
                                <p style={{color:'white'}}>We have almost all of our support channels integration into one system, making it easy for us to manage our support, well as
                                    <strong>
                                    &nbsp;take a data deive approach to continuously imporoving our service.
                                    </strong> 
                            
                                    </p>

                                <div className="intro_wrapper">
                                        <div className="image_cantaner">
                                            <img src={Chaala} alt="Dane"/>
                                        </div>
                                        <div className="carrier_cantainer ">
                                            <h6 style={{color:'white'}}>Christian Parker</h6>
                                            <p style={{color:'white'}}>Director of Managed Services, TrueCommerce</p>
                                        </div>
                                </div>
                            </div>
                    </div>
                    <div className="curver_box"></div>
                    <div className="future_join">
                    <h2>Join the future of customers<br/> service</h2>
                    <ul className="buttons_links">
                            <li><Link to='#' className="future_button">Start free trial&nbsp;&nbsp;<FaArrowRight /></Link></li>
                            <li><Link to='#' className="join_button">View demo &nbsp;&nbsp;<FaArrowRight /></Link></li>
                        </ul>
                    </div>
                </section>
                
            </main>

        </>
    );
};

export default Body;