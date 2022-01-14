import React, { Component } from 'react'
import { Link } from 'react-router-dom';


const places = [
    {
        price: 48,
        image: require('./../../images/our-work/pic1.jpg'),
        title: 'Japan Tokyo',
    },
    {
        price: 23,
        image: require('./../../images/our-work/pic2.jpg'),
        title: 'Spain Madrid',
    },
    {
        price: 15,
        image: require('./../../images/our-work/pic3.jpg'),
        title: 'Italy',
    },
    {
        price: 34,
        image: require('./../../images/our-work/pic4.jpg'),
        title: 'UK city',
    },
    {
        price: 23,
        image: require('./../../images/our-work/pic5.jpg'),
        title: 'Europe City',
    },

];

class TopPlaces extends Component {

    render() {
        return (
            <div className="section-full bg-white content-inner dlab-about-1 promotions" id="about-us">
                <div className="container">
                    <div className="section-head text-center">
                        <h2 className="text-uppercase m-b0">TOP Destinations</h2>
                        <p className="font-18">Discover the latest offers and news and start planning your next trip with us.</p>
                    </div>
                    {/* <div className="row d-flex">
                        <div className="col-md-8 col-sm-8 col-lg-9 form-group align-self-center text-left">
                            <button className="site-button m-b5 mr-1">India</button>
                            <button className="site-button m-b5 mr-1">Uk</button>
                            <button className="site-button m-b5 mr-1">China</button>
                            <button className="site-button m-b5 mr-1">Swaziland</button>
                            <button className="site-button m-b5 mr-1">India</button>
                            <button className="site-button m-b5 mr-1">Uk</button>
                            <button className="site-button m-b5 mr-1">China</button>
                            <button className="site-button m-b5 mr-1">Swaziland</button>
                            <button className="site-button m-b5 mr-1">India</button>
                            <button className="site-button m-b5 mr-1">Uk</button>
                        </div>
                        <div className="col-md-4 col-sm-4 col-lg-3 form-group">
                            <select className="form-control">
                                <option>Relevent</option>
                                <option>High to Low</option>
                                <option>Low to High</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="row" id="masonry">
                        {places.map((item, index) => (

                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30 card-container" key={index}>
                                <div className="dlab-box">
                                    <div className="dlab-media">
                                        <Link >
                                            <img src={item.image} alt="" />
                                        </Link>
                                        <div className="tr-price">
                                            <span>{item.price} EUR</span>
                                        </div>
                                    </div>
                                    <div className="dlab-info p-a20 border-1 text-center">
                                        <h4 className="dlab-title m-t0"><Link>{item.title}</Link></h4>
                                        <p>{item.description}</p>

                                        {/* <div className="tr-btn-info">
                                            <Link to={'./booking'} className="site-button radius-no"><i className="fa fa-location-arrow" aria-hidden="true"></i> Japan</Link>
                                            <Link to={'./booking'} className="site-button bg-primary-dark radius-no"><i className="fa fa-info-circle" aria-hidden="true"></i>  Relax </Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default TopPlaces;