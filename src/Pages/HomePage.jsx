import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import { motion, useScroll, useTransform } from "framer-motion"
import "swiper/css"
import "swiper/css/effect-fade"
import About from "../Components/About/About"
import Programes from "../Components/Programes/Programes"
import Blog from "../Components/Blog/Blog"
import Footer from "../Components/Outlets/Footer"
import Nav from "../Components/Outlets/Nav"
import slide1 from "../Assets/hero1.jpg"
import slide2 from "../Assets/hero2.jpg"
import slide3 from "../Assets/hero3.png"

const heroSlides = [slide1, slide2, slide3]

const faqs = [
	{
		q: "What is Darul Huda English Medium Higher Secondary School?",
		a: "Darul Huda English Medium Higher Secondary School, Nadapuram, is a reputed unaided institution recognized by the Government of Kerala. It offers Plus Two (Higher Secondary) education with Science and Commerce groups, along with integrated add-on entrance coaching for NEET, KEAM, and CUET."
	},
	{
		q: "What courses are offered at the Plus Two level?",
		a: "We offer two groups: Science Group (Physics, Chemistry, Mathematics, Biology — 50 seats) with integrated NEET & KEAM coaching, and Commerce Group (Accountancy, Business Studies, Economics, Computer Application — 50 seats) with integrated CUET coaching."
	},
	{
		q: "What add-on coaching programmes are available?",
		a: "Science group students receive integrated coaching for NEET and KEAM, while Commerce group students receive integrated CUET coaching. These programmes run alongside the regular Higher Secondary curriculum without affecting regular studies."
	},
	{
		q: "Is Darul Huda recognized by the Government?",
		a: "Yes. Darul Huda English Medium Higher Secondary School is an unaided institution recognized by the Government of Kerala, following the curriculum prescribed by the Board of Examinations, Government of Kerala."
	}
]

const HomePage = () => {
	const [openFaq, setOpenFaq] = useState(0)
	const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? -1 : idx)

	const { scrollYProgress } = useScroll()
	const y = useTransform(scrollYProgress, [0, 1], [0, -200])

	return (
		<div>
			<Nav />
			<div className="page-main">
				<div className="hero-slider-wrap">
					<Swiper
						modules={[Autoplay, EffectFade]}
						effect="fade"
						autoplay={{ delay: 4500, disableOnInteraction: false }}
						loop={true}
						speed={1200}
						className="hero-swiper"
					>
						{heroSlides.map((img, i) => (
							<SwiperSlide key={i}>
								<motion.div
									className="hero-slide"
									style={{ backgroundImage: `url(${img})`, y: i === 0 ? y : 0 }}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="hero-content-layer">
						<div className="container-main">
							<motion.div
								className="home-page-content"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
							>
								<h1 className="home-main-heading montserrat">Excellence in Education,<span className="montserrat block-text">Rooted in Values</span></h1>
								<p className="home-sub-text">Darul Huda English Medium Higher Secondary School, Nadapuram — a reputed unaided institution under the Government of Kerala, offering Plus Two Science &amp; Commerce with integrated NEET, KEAM &amp; CUET coaching.</p>
								<div className="hero-btns">
									<Link className="btn enquire-btn" to="/admission">Apply Now</Link>
								</div>
							</motion.div>
						</div>
					</div>
				</div>

				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<About />
				</motion.section>

				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<Programes />
				</motion.section>

				<motion.section
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<Blog />
				</motion.section>

				<motion.div
					className="student-dev-section"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<div className="container-main">
						<div className="row">
							<div className="col-lg-12 text-center mb-5">
								<h5 className="section-small-label montserrat">Our Facilities</h5>
								<h2 className="section-main-title montserrat">Learning <span className="highlight-text">Environment</span></h2>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="dev-card">
									<div className="dev-icon"><i className="ri-flask-line"></i></div>
									<h5>Science Laboratory</h5>
									<p>Well-equipped lab for hands-on practical learning.</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="dev-card">
									<div className="dev-icon"><i className="ri-computer-line"></i></div>
									<h5>Smart Classrooms</h5>
									<p>Modern digital teaching aids for interactive learning.</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="dev-card">
									<div className="dev-icon"><i className="ri-football-line"></i></div>
									<h5>Turf Ground</h5>
									<p>Sports facility for physical development and well-being.</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="dev-card">
									<div className="dev-icon"><i className="ri-award-line"></i></div>
									<h5>Govt. Recognised</h5>
									<p>Unaided institution recognized by Govt. of Kerala.</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="faq-section-main"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<div className="container-main">
						<div className="row align-items-center">
							<div className="col-lg-5 mb-5 mb-lg-0">
								<div className="faq-left-panel">
									<h5 className="section-small-label">Got Questions?</h5>
									<h2 className="faq-main-title montserrat">Frequently<br />Asked Questions</h2>
									<p className="faq-left-desc">Find answers to the most common questions about admissions, programmes, and life at Darul Huda EMHSS, Nadapuram.</p>
									<Link to="/contact" className="btn faq-contact-btn">Contact Us <i className="ri-arrow-right-line"></i></Link>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="faq-items-wrap">
									{faqs.map((faq, idx) => (
										<motion.div
											className={`faq-card${openFaq === idx ? " faq-open" : ""}`}
											key={idx}
											onClick={() => toggleFaq(idx)}
											initial={{ opacity: 0, x: 20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ delay: idx * 0.1 }}
											viewport={{ once: true }}
										>
											<div className="faq-card-header">
												<span className="faq-number">{String(idx + 1).padStart(2, "0")}</span>
												<h5 className="faq-question">{faq.q}</h5>
												<span className="faq-toggle-icon">
													<i className={openFaq === idx ? "ri-subtract-line" : "ri-add-line"}></i>
												</span>
											</div>
											{openFaq === idx && (
												<div className="faq-answer">
													<p>{faq.a}</p>
												</div>
											)}
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
			<Footer />
		</div>
	)
}

export default HomePage
