import React from "react"
import Footer from "../Components/Outlets/Footer"
import Nav from "../Components/Outlets/Nav"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const steps = [
	{
		number: "01",
		title: "Apply",
		text: "Share student, parent, and academic details through the admission form.",
	},
	{
		number: "02",
		title: "Counseling",
		text: "Meet the academic team to choose the right stream and career pathway.",
	},
	{
		number: "03",
		title: "Confirm",
		text: "Complete joining formalities and reserve the seat for the selected program.",
	},
]

const Admission = () => {
	return (
		<div className="admission-page-shell">
			<Nav />

			<section className="inner-hero admission-hero">
				<div className="container-main">
					<motion.div
						className="inner-hero-content"
						initial={{ opacity: 0, y: 35 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.75 }}
					>
						<span className="inner-eyebrow">Admissions</span>
						<h1 className="inner-hero-title montserrat">Begin a focused path to academic excellence</h1>
						<p className="inner-hero-copy">
							Apply for Darul Huda English Medium Higher Secondary School and take the next step toward quality Plus Two education with integrated NEET, KEAM &amp; CUET coaching.
						</p>
						<div className="inner-hero-actions">
							<Link to="/contact" className="hero-primary-btn">
								Contact Us <i className="ri-arrow-right-line"></i>
							</Link>
							<Link to="/acadamics" className="hero-secondary-btn">
								Explore Programmes
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			<main className="admission-redesign">
				<section className="admission-overview-section">
					<div className="container-main">
						<div className="section-heading-row">
							<div>
								<span className="section-eyebrow">Admission Journey</span>
								<h2 className="section-title montserrat">Clear, guided, and parent-friendly</h2>
							</div>
							<p className="section-copy">
								The admission team helps families understand program options, eligibility,
								and the right preparation track for each student.
							</p>
						</div>

						<div className="row g-4">
							{steps.map((step, index) => (
								<div className="col-lg-4 col-md-6" key={step.number}>
									<motion.div
										className="admission-step-panel"
										initial={{ opacity: 0, y: 24 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.55, delay: index * 0.08 }}
									>
										<span>{step.number}</span>
										<h3>{step.title}</h3>
										<p>{step.text}</p>
									</motion.div>
								</div>
							))}
						</div>

						<div className="text-center mt-5">
							<Link to="/contact" className="btn faq-contact-btn">
								Get in Touch <i className="ri-arrow-right-line"></i>
							</Link>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default Admission
