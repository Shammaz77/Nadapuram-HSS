import React from "react"
import logo from "../../Assets/darul-huda-logo.png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Footer = () => {
	return (
		<footer className="footer-main">
			<div className="container-main">
				<div className="row">
					<div className="col-lg-4 mb-5 mb-lg-0">
						<div className="footer-box">
							<img src={logo} className="footer-logo" alt="Darul Huda EMHSS Logo" />
							<p className="footer-sub-text">
								A reputed unaided Higher Secondary School in Nadapuram, Vadakara, recognized by the Government of Kerala — offering Science &amp; Commerce streams with integrated entrance coaching.
							</p>
							<div className="social-media-icons">
								<a href="#"><i className="ri-instagram-line"></i></a>
								<a href="#"><i className="ri-whatsapp-line"></i></a>
								<a href="#"><i className="ri-facebook-circle-line"></i></a>
								<a href="#"><i className="ri-twitter-x-line"></i></a>
							</div>
						</div>
					</div>

					<div className="col-lg-2 col-md-4 mb-4 mb-md-0">
						<div className="footer-box">
							<h4 className="footer-heading-sub-main">Quick Links</h4>
							<ul>
								<li><Link to="/about">About Us</Link></li>
								<li><Link to="/acadamics">Programmes</Link></li>
								<li><Link to="/admission">Admissions</Link></li>
								<li><Link to="/contact">Contact Us</Link></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 mb-4 mb-md-0">
						<div className="footer-box">
							<h4 className="footer-heading-sub-main">Our Programmes</h4>
							<ul>
								<li><Link to="/acadamics">Plus Two — Science Group</Link></li>
								<li><Link to="/acadamics">Plus Two — Commerce Group</Link></li>
								<li><Link to="/acadamics">NEET &amp; KEAM Coaching</Link></li>
								<li><Link to="/acadamics">CUET Coaching</Link></li>
								<li><Link to="/acadamics">Smart Classrooms &amp; Labs</Link></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="footer-box">
							<h4 className="footer-heading-sub-main">Contact Us</h4>
							<ul>
								<li><a href="#"><i className="ri-map-pin-line"></i> Nadapuram, Vadakara, Kozhikode, Kerala</a></li>
								<li><a href="#"><i className="ri-phone-line"></i> +91 00000 00000</a></li>
								<li><a href="#"><i className="ri-mail-line"></i> darulhudaemhss@gmail.com</a></li>
								<li><span style={{ fontSize: '14px', color: '#888' }}><i className="ri-time-line"></i> Mon - Sat: 8 AM - 5 PM</span></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-lg-12">
						<p className="copy-text">
							&copy; {new Date().getFullYear()} Darul Huda English Medium Higher Secondary School, Nadapuram. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
