import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_wrapper">
                    <div className="footer_cantainer ">
                        <div className="col-lg-3 col-md-6 footer_link_cantainer" >
                            <ul >
                                <li className="pricing_link"><strong>Pricing</strong></li>
                                <li><strong>Use Cases</strong></li>
                                <li><Link to="#" className="footer_link">Supports</Link></li>
                                <li><Link to="#" className="footer_link">Engage</Link></li>
                                <li><Link to="#" className="footer_link">Convert</Link></li>
                            </ul>
                            <ul>
                                <li><strong>Company Size</strong></li>
                                <li><Link to="#" className="footer_link">MidMarket/Enterprise</Link></li>
                                <li><Link to="#" className="footer_link">Small Business</Link></li>
                                <li><Link to="#" className="footer_link">Early stage</Link></li>
                            </ul>
                            <ul>
                                <li><strong>Industries</strong></li>
                                <li><Link to="#" className="footer_link">Financial Services</Link></li>
                                <li><Link to="#" className="footer_link">E-commerce</Link></li>
                                <li><Link to="#" className="footer_link">Education</Link></li>
                                <li><Link to="#" className="footer_link">Healtjcare</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer_link_cantainer" >
                        <ul>
                                <li><strong>Features</strong></li>
                                <li><Link to="#" className="footer_link">Business Messenger</Link></li>
                                <li><Link to="#" className="footer_link">Customizable bots</Link></li>
                                <li><Link to="#" className="footer_link">Automated answeres</Link></li>
                                <li><Link to="#" className="footer_link">Product Tours</Link></li>
                                <li><Link to="#" className="footer_link">Outbound Messages</Link></li>
                                <li><Link to="#" className="footer_link">Inbox</Link></li>
                                <li><Link to="#" className="footer_link">Help Center Article</Link></li>
                                <li><Link to="#" className="footer_link">App + Integrations</Link></li>
                                <li><Link to="#" className="footer_link">Customer Data</Link></li>
                                <li><Link to="#" className="footer_link">Live Chat</Link></li>
                                <li><Link to="#" className="footer_link">Mobile Apps</Link></li>
                                <li><Link to="#" className="footer_link">Mobile Carousels</Link></li>
                                <li><Link to="#" className="footer_link">Series</Link></li>
                                <li><Link to="#" className="footer_link">Tickets</Link></li>
                                <li><Link to="#" className="footer_link">Transactional Messaging</Link></li>
                                <li><Link to="#" className="footer_link">Surveys</Link></li>
                                <li><Link to="#" className="footer_link">SMS</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer_link_cantainer" >
                        <ul>
                                <li><strong>Resources</strong></li>
                                <li><Link to="#" className="footer_link">Blog</Link></li>
                                <li><Link to="#" className="footer_link">Watch A Demo</Link></li>
                                <li><Link to="#" className="footer_link">Glossary</Link></li>
                                <li><Link to="#" className="footer_link">Academy</Link></li>
                                <li><Link to="#" className="footer_link">Webinars</Link></li>
                                <li><Link to="#" className="footer_link">Product Changes</Link></li>
                                <li><Link to="#" className="footer_link">App Store</Link></li>
                                <li><Link to="#" className="footer_link">Docs</Link></li>
                                <li><Link to="#" className="footer_link">Developers</Link></li>
                                <li><Link to="#" className="footer_link">Status</Link></li>
                                <li><Link to="#" className="footer_link">Security</Link></li>
                                <li><Link to="#" className="footer_link">Book and Guides</Link></li>
                                <li><Link to="#" className="footer_link">Services</Link></li>
                              
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer_link_cantainer" >
                        <ul>
                                <li><strong>Company</strong></li>
                                <li><Link to="#" className="footer_link">About</Link></li>
                                <li><Link to="#" className="footer_link">Customers</Link></li>
                                <li><Link to="#" className="footer_link">Intercom Community</Link></li>
                                <li><Link to="#" className="footer_link">Careers</Link></li>
                                <li><Link to="#" className="footer_link">Newsroom</Link></li>
                                <li><Link to="#" className="footer_link">App Partner Program</Link></li>
                                <li><Link to="#" className="footer_link">Services Partner Program</Link></li>
                                <li><Link to="#" className="footer_link">Contact Us</Link></li>
                                <li><Link to="#" className="footer_link">Terms</Link></li>
                                <li><Link to="#" className="footer_link">Privacy</Link></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="bottom_footer">
                            <ul className="bottom_footer_link">
                                <li><Link to="#" className="bottom_menu_link">Terms</Link></li>
                                <li><Link to="#" className="bottom_menu_link">Privacy</Link></li>
                                <li><Link to="#" className="bottom_menu_link">Status</Link></li>
                                <li><Link to="#" className="bottom_menu_link">Security</Link></li>
                            </ul>
                    </div>

                </div>
            </footer>

        </>
    )
};

export default Footer;