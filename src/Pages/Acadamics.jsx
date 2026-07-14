import React from "react"
import Nav from "../Components/Outlets/Nav"
import Footer from "../Components/Outlets/Footer"
import { Link } from "react-router-dom"

const programs = [
	{
		icon: "ri-flask-line",
		color: "#1B2F6E",
		title: "Science Group",
		badge: "Plus Two — 50 Seats",
		tags: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Malayalam / Hindi", "Kerala Board"]
	},
	{
		icon: "ri-bar-chart-box-line",
		color: "#5B62B8",
		title: "Commerce Group",
		badge: "Plus Two — 50 Seats",
		tags: ["Accountancy", "Business Studies", "Economics", "Computer Application", "English", "Malayalam / Hindi", "Kerala Board"]
	},
	{
		icon: "ri-stethoscope-line",
		color: "#1B2F6E",
		title: "NEET & KEAM Coaching",
		badge: "Add-On · Science Stream",
		tags: ["NEET", "KEAM", "Medicine", "Engineering", "Conceptual Learning", "Exam Preparation"]
	},
	{
		icon: "ri-bank-line",
		color: "#5B62B8",
		title: "CUET Coaching",
		badge: "Add-On · Commerce Stream",
		tags: ["CUET", "Central Universities", "Aptitude Training", "Knowledge Building", "Competitive Skills"]
	},
	{
		icon: "ri-building-4-line",
		color: "#9896C8",
		title: "Facilities",
		badge: "Campus Infrastructure",
		tags: ["Science Laboratory", "Smart Classrooms", "Digital Teaching Aids", "Turf Ground", "Dedicated Faculty", "Govt. Recognised"]
	}
]

const Acadamics = () => {
	return (
		<div>
			<Nav />
			<div className="about-page-main">
				<div className="path-menus acadamics-page">
					<div className="container-main">
						<h2 className="page-heading-name mb-0">Programmes</h2>
					</div>
				</div>
			</div>
			<div className="acadamics-page-box">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12 text-center mb-5">
							<h2 className="chairman-text" style={{ display: "inline-block" }}>Plus Two Programmes &amp; Add-On Coaching</h2>
							<p className="text-about-sub text-center" style={{ maxWidth: "700px", margin: "0 auto" }}>
								Darul Huda EMHSS offers Kerala Board Higher Secondary education with Science and Commerce groups, supplemented by carefully integrated entrance coaching programmes.
							</p>
						</div>

						{programs.map((prog, idx) => (
							<div className="col-lg-4 col-md-6 mb-4" key={idx}>
								<div className="prog-tile-card">
									<div className="prog-tile-top">
										<div className="prog-tile-icon-wrap" style={{ background: `linear-gradient(135deg, ${prog.color}, ${prog.color}cc)` }}>
											<i className={prog.icon}></i>
										</div>
										<div>
											<h4 className="prog-tile-title">{prog.title}</h4>
											<span className="prog-tile-badge" style={{ color: prog.color, background: `${prog.color}15` }}>{prog.badge}</span>
										</div>
									</div>
									<div className="prog-tile-divider"></div>
									<div className="prog-tile-body">
										<div className="prog-tile-tags">
											{prog.tags.map((tag, i) => (
												<span className="prog-tile-tag" key={i}>{tag}</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="admission-process-section">
						<div className="row">
							<div className="col-lg-12 text-center mb-4">
								<h2 className="chairman-text" style={{ display: "inline-block" }}>Admission Process</h2>
								<p className="text-about-sub text-center">Begin your journey at Darul Huda EMHSS, Nadapuram.</p>
							</div>
							<div className="col-lg-4 col-md-4 mb-4">
								<div className="admission-step-card">
									<div className="step-number">1</div>
									<h5>Application Submission</h5>
									<p>Fill and submit your admission application form online or visit our school in person.</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 mb-4">
								<div className="admission-step-card">  
									<div className="step-number">2</div>
									<h5>Document Verification</h5>
									<p>Submit required documents for verification. Our team will guide you through each step.</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 mb-4">
								<div className="admission-step-card">
									<div className="step-number">3</div>
									<h5>Admission Confirmation</h5>
									<p>Complete the joining formalities and confirm your seat at Darul Huda EMHSS.</p>
								</div>
							</div>
							<div className="col-lg-12 text-center mt-3 mb-5">
								<Link className="btn enquire-btn" to="/admission">Apply Now</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Acadamics
