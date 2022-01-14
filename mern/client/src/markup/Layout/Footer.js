import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var bg3 = require('./../../images/background/bg6.jpg');

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer style1">
                <div className="footer-top" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-5 footer-col-4">
                                <div className="widget widget_getintuch">
                                    <h6 className="m-b15 h6 text-uppercase">Deutschland Airways</h6>
                                    <div className="dlab-separator bg-white"></div>
                                    <ul className="info-contact">
                                        <li>
                                            <span>
                                                <i className="fa fa-map-marker	"></i> Charlottenberg 23, Berlin
									</span>
                                        </li>

                                        <li>
                                            <span>
                                                <i className="fa fa-phone"></i> Mobile: +00 1234 456789 <br />+10 0000 456789
									</span>
                                        </li>

                                        <li>
                                            <span>
                                                <i className="fa fa-envelope-o"></i> Mail: info@deutschairways.com
									</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa fa-fax"></i> Fax: 000 000 0000 000
									</span>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="list-inline">
                                    <li><Link to={''} className="site-button facebook sharp"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to={''} className="site-button google-plus sharp"><i className="fa fa-google-plus"></i></Link></li>
                                    <li><Link to={''} className="site-button linkedin sharp"><i className="fa fa-linkedin"></i></Link></li>
                                    <li><Link to={''} className="site-button twitter sharp"><i className="fa fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-sm-7 footer-col-4">
                                <div className="widget  widget_tag_cloud">                           
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                                <div className="widget widget_getintuch">
                                    <h6 className="m-b15 h6 text-uppercase">Contact us</h6>
                                    <div className="dlab-separator bg-white"></div>
                                    <div className="search-bx">
                                        <div className="dzFormMsg"></div>
                                        <form method="post" className="dzForm" action="script/contact.php">
                                            <input type="hidden" value="Contact" name="dzToDo" />
                                            <div className="input-group">
                                                <input name="dzName" type="text" required className="form-control" placeholder="Your Name" />
                                            </div>
                                            <div className="input-group">
                                                <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Address" />
                                            </div>
                                            <div className="input-group">
                                                <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your Message..."></textarea>
                                            </div>
                                            <div className="input-group">
                                                <button name="submit" type="submit" value="Submit" className="site-button "> <span>Submit</span> </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                                <div className="widget widget_gallery">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;