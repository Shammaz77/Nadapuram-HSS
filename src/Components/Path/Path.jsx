import React from "react"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const pathPoints = [
	{ icon: "ri-government-line",  color: "#1B2F6E", title: "Govt. Recognised",      desc: "Unaided institution recognized by the Government of Kerala" },
	{ icon: "ri-flask-line",       color: "#5B62B8", title: "Science Group",          desc: "Physics, Chemistry, Mathematics & Biology — 50 seats" },
	{ icon: "ri-bar-chart-line",   color: "#1B2F6E", title: "Commerce Group",         desc: "Accountancy, Business Studies, Economics & Computer Application — 50 seats" },
	{ icon: "ri-stethoscope-line", color: "#5B62B8", title: "NEET & KEAM Coaching",   desc: "Integrated entrance coaching for Science students" },
	{ icon: "ri-bank-line",        color: "#9896C8", title: "CUET Coaching",          desc: "Integrated entrance coaching for Commerce students" },
]

const Path = () => {
	useEffect(() => {
		AOS.init({ disable: "phone", duration: 700 })
	}, [])

	return (
		<div className="path-section">
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<h5 className="path-samll-text montserrat">Your Future Starts Here</h5>
						<h1 className="path-main-heading montserrat">Why Choose Darul Huda <span className="montserrat path-main-block-text">EMHSS, Nadapuram?</span></h1>
</div>
					<div className="col-lg-12" data-aos="fade-up">
						<div className="row g-3 mb-4">
							{pathPoints.map((pt, i) => (
								<div className="col-lg-4 col-md-6 col-12" key={i}>
									<div className="path-feature-card">
										<div className="path-icon-dot" style={{ background: `linear-gradient(135deg, ${pt.color}, ${pt.color}cc)` }}>
											<i className={pt.icon}></i>
										</div>
										<h6 className="path-feature-title">{pt.title}</h6>
										<p className="path-feature-desc">{pt.desc}</p>
									</div>
								</div>
							))}
						</div>
						<Link className="btn explore-btn-about" to="/acadamics">Explore Programmes</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Path
