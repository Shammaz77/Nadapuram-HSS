import React from "react"
import { Link } from "react-router-dom"
import enq from "../../Assets/site1.jpg"
import enqTwo from "../../Assets/hero1.jpg"

const About = () => {
	return (
		<div className="about-section">
			<div className="container-main">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<h1 className="about-heading montserrat">Darul Huda <span className="about-block-text montserrat">English Medium HSS</span></h1>

						<div className="about-feature-badges">
							<div className="about-badge-card">
								<div className="about-badge-icon" style={{ background: "linear-gradient(135deg,#1B2F6E,#5B62B8)" }}>
									<i className="ri-government-line"></i>
								</div>
								<div className="about-badge-text">
									<h6>Kerala Govt. Recognised</h6>
									<p>Unaided institution following the Kerala Board of Examinations curriculum.</p>
								</div>
							</div>
							<div className="about-badge-card">
								<div className="about-badge-icon" style={{ background: "linear-gradient(135deg,#5B62B8,#9896C8)" }}>
									<i className="ri-book-open-line"></i>
								</div>
								<div className="about-badge-text">
									<h6>Add-On Entrance Coaching</h6>
									<p>Integrated NEET, KEAM &amp; CUET coaching alongside regular academics.</p>
								</div>
							</div>
							<div className="about-badge-card">
								<div className="about-badge-icon" style={{ background: "linear-gradient(135deg,#1B2F6E,#5B62B8)" }}>
									<i className="ri-group-line"></i>
								</div>
								<div className="about-badge-text">
									<h6>Holistic Development</h6>
									<p>A child-centred environment shaping character, confidence &amp; citizenship.</p>
								</div>
							</div>
						</div>

						<Link className="btn enquire-btn-about" to="/about">About Us</Link>
					</div>

					<div className="col-lg-6">
						<div className="about-stack-imgs">
							<div className="about-stack-top">
								<img src={enq} alt="Darul Huda students" />
							</div>
							<div className="about-stack-bottom">
								<img src={enqTwo} alt="Darul Huda campus" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
