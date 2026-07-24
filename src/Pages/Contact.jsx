import React from "react"
import Nav from "../Components/Outlets/Nav"
import Footer from "../Components/Outlets/Footer"

const Contact = () => {
	return (
		<div>
			<Nav />
			<div className="about-page-main">
				<div className="path-menus contact-page">
					<div className="container-main">
						<h2 className="page-heading-name mb-0">Contact Us</h2>
					</div>
				</div>
			</div>

			<div className="contact-page-dv">
				<div className="container-main">

					<div className="row mb-5">
						<div className="col-lg-3 col-md-6 mb-4">
							<div className="contact-info-card">
								<div className="contact-info-icon">
									<i className="ri-map-pin-2-line"></i>
								</div>
								<h5>Our Location</h5>
								<p>Nadapuram, Vadakara,<br />Kozhikode, Kerala</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<div className="contact-info-card">
								<div className="contact-info-icon">
									<i className="ri-phone-line"></i>
								</div>
								<h5>Phone Number</h5>
								<p>+91 94962 88786</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<div className="contact-info-card">
								<div className="contact-info-icon">
									<i className="ri-mail-send-line"></i>
								</div>
								<h5>Email Address</h5>
								<p>dhemhss@gmail.com</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<div className="contact-info-card">
								<div className="contact-info-icon">
									<i className="ri-time-line"></i>
								</div>
								<h5>School Hours</h5>
								<p>8 AM &ndash; 5 PM<br />Monday &ndash; Saturday</p>
							</div>
						</div>
					</div>

					<div className="row justify-content-center mb-5">
						<div className="col-lg-8">
							<div className="contact-form-card">
								<div className="contact-form-top">
									<h3 className="contact-form-heading montserrat">Send Us a Message</h3>
									<p className="contact-form-sub">We would love to hear from you. Fill in the form and we will get back to you shortly.</p>
								</div>
								<form>
									<div className="row">
										<div className="col-lg-6">
											<div className="contact-form-group">
												<label>Full Name</label>
												<input type="text" className="form-control" placeholder="Your full name" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="contact-form-group">
												<label>Phone Number</label>
												<input type="tel" className="form-control" placeholder="Your phone number" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="contact-form-group">
												<label>Email Address</label>
												<input type="email" className="form-control" placeholder="Your email address" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="contact-form-group">
												<label>Place</label>
												<input type="text" className="form-control" placeholder="Your city / place" />
											</div>
										</div>
										<div className="col-lg-12">
											<div className="contact-form-group">
												<label>Message</label>
												<textarea className="form-control" placeholder="Write your message here..." rows="5"></textarea>
											</div>
										</div>
										<div className="col-lg-12 text-center mt-2">
											<button type="submit" className="btn contact-submit-btn">
												Send Message <i className="ri-send-plane-2-line"></i>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div className="contact-map-wrap">
								<iframe
									title="Nadapuram Location"
									src="https://maps.google.com/maps?q=Nadapuram,Kerala,India&t=m&z=14&output=embed"
									width="100%"
									height="440"
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>

				</div>
			</div>

			<Footer />
		</div>
	)
}

export default Contact
