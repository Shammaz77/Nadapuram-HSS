import React from "react"
import Footer from "../Components/Outlets/Footer"
import Nav from "../Components/Outlets/Nav"
import banner from "../Assets/site3.jpg"
import bannerTwo from "../Assets/site1.jpg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const fadeUp = {
	hidden: { opacity: 0, y: 28 },
	visible: { opacity: 1, y: 0 },
}

const stats = [
	{ value: "100", label: "Science seats (50) & Commerce seats (50)" },
	{ value: "2", label: "Plus Two groups offered" },
	{ value: "Kerala", label: "Board of Examinations curriculum" },
	{ value: "Add-On", label: "NEET, KEAM & CUET coaching" },
]

const focusAreas = [
	{
		icon: "ri-graduation-cap-line",
		title: "Academic Excellence",
		text: "Following the curriculum of the Board of Examinations, Government of Kerala, with a strong commitment to quality education and board exam success.",
	},
	{
		icon: "ri-stethoscope-line",
		title: "Entrance Preparation",
		text: "Integrated add-on coaching for NEET & KEAM (Science) and CUET (Commerce), structured alongside regular academics without disrupting daily studies.",
	},
	{
		icon: "ri-seedling-line",
		title: "Holistic Development",
		text: "A dynamic, child-centred approach where students build character, confidence, and responsible citizenship beyond the boundaries of textbooks.",
	},
]

const values = ["Excellence", "Integrity", "Curiosity", "Creativity", "Responsibility", "Inclusivity"]

const programs = [
	"Plus Two — Science Group",
	"Plus Two — Commerce Group",
	"NEET / KEAM Coaching",
	"CUET Coaching",
	"Smart Classrooms & Labs",
]

const AboutPage = () => {
	return (
		<div className="about-page-shell">
			<Nav />

			<section className="inner-hero about-hero">
				<div className="container-main">
					<motion.div
						className="inner-hero-content"
						initial={{ opacity: 0, y: 35 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.75 }}
					>
						<span className="inner-eyebrow">About Darul Huda EMHSS</span>
						<h1 className="inner-hero-title montserrat">A Reputed Unaided Higher Secondary School in Nadapuram</h1>
						<p className="inner-hero-copy">
							Darul Huda English Medium Higher Secondary School, Nadapuram, is one of the leading schools in Vadakara — offering a distinctive, progressive approach to learning with strong board academics and integrated entrance coaching.
						</p>
						<div className="inner-hero-actions">
							<Link to="/acadamics" className="hero-primary-btn">
								Explore Programmes <i className="ri-arrow-right-line"></i>
							</Link>
							<Link to="/admission" className="hero-secondary-btn">
								Start Admission
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			<section className="md-message-section">
				<div className="container-main">
					<div className="md-message-grid">
						<motion.aside
							className="md-message-profile"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
						>
							<div className="md-message-avatar">
								<span>MP</span>
							</div>
							<h3 className="md-message-name montserrat">Muhammad Perode</h3>
							<p className="md-message-title">Managing Director</p>
							<div className="md-message-badge">
								<i className="ri-medal-line"></i>
								Darul Huda EMHSS
							</div>
						</motion.aside>

						<motion.div
							className="md-message-body"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.12 }}
						>
							<span className="md-message-eyebrow">Managing Director's Message</span>
							<i className="ri-double-quotes-l md-message-quote"></i>
							<p className="md-message-lead">
								Education is more than academic achievement—it is about nurturing character, values, leadership, and a lifelong passion for learning. Our vision is to create a learning environment where every student is inspired to reach their highest potential while developing integrity, compassion, and a strong sense of responsibility.
							</p>
							<p className="md-message-text">
								At our school, we are committed to providing high-quality education through dedicated educators, innovative teaching methods, and a supportive atmosphere that encourages creativity, critical thinking, and excellence. We believe that every student possesses unique talents, and our role is to help them discover, develop, and confidently pursue their aspirations.
							</p>
							<p className="md-message-text">
								We also recognize the importance of strong collaboration between the school, parents, and the wider community. Together, we can provide the guidance and support our students need to become confident, responsible, and successful individuals who contribute positively to society.
							</p>
							<p className="md-message-text">
								Thank you for placing your trust in us. We look forward to partnering with you in shaping a bright and meaningful future for every student.
							</p>
							<div className="md-message-signature">
								<span className="md-message-regards">With warm regards,</span>
								<strong className="md-message-sign-name montserrat">Muhammad Perode</strong>
								<span className="md-message-sign-role">Managing Director</span>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<main className="about-redesign">
				<section className="about-story-section">
					<div className="container-main">
						<div className="row align-items-center g-5">
							<div className="col-lg-6">
								<motion.div
									className="about-media-grid"
									variants={fadeUp}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									transition={{ duration: 0.7 }}
								>
									<div className="about-media-frame about-media-large">
										<img src={bannerTwo} alt="Darul Huda students on campus" />
									</div>
									<div className="about-media-frame about-media-small">
										<img src={banner} alt="Darul Huda classroom" />
									</div>
									<div className="about-floating-note">
										<i className="ri-government-line"></i>
										<span>Recognized by the Government of Kerala</span>
									</div>
								</motion.div>
							</div>

							<div className="col-lg-6">
								<motion.div
									className="about-story-copy"
									variants={fadeUp}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: 0.1 }}
								>
									<span className="section-eyebrow">Our Institution</span>
									<h2 className="section-title montserrat">Progressive learning, rooted in excellence</h2>
									<p className="section-copy">
										Darul Huda English Medium Higher Secondary School, Nadapuram, is a reputed unaided institution under the Government of Kerala and one of the leading schools in Vadakara, Nadapuram. We offer a distinctive and progressive approach to learning that actively engages students both within the classroom and with the world around them.
									</p>
									<p className="section-copy">
										The school follows the curriculum prescribed by the Board of Examinations, Government of Kerala, with a strong commitment to academic excellence and holistic development. As an unaided school, Darul Huda maintains high standards of quality education through efficient management, dedicated faculty, and a student-focused academic environment.
									</p>
									<div className="about-feature-list">
										<div className="about-feature-item">
											<i className="ri-check-line"></i>
											<span>Science &amp; Commerce streams with 50 seats each</span>
										</div>
										<div className="about-feature-item">
											<i className="ri-check-line"></i>
											<span>Entrance coaching integrated with the daily academic rhythm</span>
										</div>
										<div className="about-feature-item">
											<i className="ri-check-line"></i>
											<span>Warm, inclusive and supportive environment for all learners</span>
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</section>

				<section className="about-stat-band">
					<div className="container-main">
						<div className="row g-3">
							{stats.map((stat, index) => (
								<div className="col-lg-3 col-md-6" key={stat.label}>
									<motion.div
										className="about-stat-card"
										variants={fadeUp}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.06 }}
									>
										<strong>{stat.value}</strong>
										<span>{stat.label}</span>
									</motion.div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="about-focus-section">
					<div className="container-main">
						<div className="section-heading-row">
							<div>
								<span className="section-eyebrow">What Guides Us</span>
								<h2 className="section-title montserrat">Mission, vision, and daily practice</h2>
							</div>
							<p className="section-copy">
								Our goal is to provide high-quality education that builds academically capable, morally upright, and socially responsible individuals ready for a rapidly changing world.
							</p>
						</div>

						<div className="row g-4">
							<div className="col-lg-6">
								<motion.div
									className="about-belief-panel mission-panel"
									variants={fadeUp}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}
								>
									<i className="ri-compass-3-line"></i>
									<h3>Our Mission</h3>
									<p>
										To provide high-quality education in accordance with Kerala Government standards; to foster a child-centred learning environment encouraging curiosity, creativity, and critical thinking; to promote holistic development by balancing academics, values, and life skills; and to prepare students to become responsible citizens with strong ethical values.
									</p>
								</motion.div>
							</div>
							<div className="col-lg-6">
								<motion.div
									className="about-belief-panel vision-panel"
									variants={fadeUp}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.1 }}
								>
									<i className="ri-global-line"></i>
									<h3>Our Vision</h3>
									<p>
										To be a centre of excellence in education that nurtures intellectually competent, morally upright, and socially responsible individuals who are prepared to meet the challenges of a rapidly changing world.
									</p>
								</motion.div>
							</div>
						</div>

						<div className="row g-4 mt-1">
							{focusAreas.map((item, index) => (
								<div className="col-lg-4 col-md-6" key={item.title}>
									<motion.div
										className="about-focus-card"
										variants={fadeUp}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										transition={{ duration: 0.55, delay: index * 0.08 }}
									>
										<div className="about-focus-icon">
											<i className={item.icon}></i>
										</div>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</motion.div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="about-values-section">
					<div className="container-main">
						<div className="values-layout">
							<div className="values-copy">
								<span className="section-eyebrow">Core Values</span>
								<h2 className="section-title montserrat">The culture students feel every day</h2>
							</div>
							<div className="values-list">
								{values.map((value) => (
									<span className="value-chip" key={value}>{value}</span>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="about-programs-section">
					<div className="container-main">
						<div className="section-heading-center">
							<span className="section-eyebrow">Programmes</span>
							<h2 className="section-title montserrat">Academic &amp; coaching pathways under one roof</h2>
							<p className="section-copy">
								Students combine Plus Two academics with integrated entrance coaching — all carefully structured so competitive exam preparation never compromises regular studies.
							</p>
						</div>
						<div className="program-link-grid">
							{programs.map((program) => (
								<Link to="/acadamics" className="program-link-card" key={program}>
									<span>{program}</span>
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							))}
						</div>
					</div>
				</section>
			</main>

			<section className="md-minimal-section">
				<div className="container-main">
					<motion.div
						className="md-minimal-inner"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>
						<div className="md-minimal-left">
							<span className="md-minimal-label">Principal's Message</span>
							<h3 className="md-minimal-name montserrat">Darul Huda EMHSS</h3>
							<p className="md-minimal-role">Nadapuram, Vadakara, Kozhikode</p>
							<div className="md-minimal-rule"></div>
						</div>
						<div className="md-minimal-right">
							<p className="md-minimal-lead">
								At Darul Huda English Medium Higher Secondary School, we believe that education must go beyond textbooks — it is a journey that shapes character, confidence, and responsible citizenship.
							</p>
							<p className="md-minimal-body">
								Moving away from conventional teaching methods, our institution adopts a dynamic, child-centred approach where students are active participants in the learning process. A warm, inclusive, and supportive environment fosters meaningful relationships between teachers and students, enabling every learner to realize their full potential.
							</p>
							<p className="md-minimal-body">
								As a well-managed unaided institution recognized by the Government of Kerala, we are committed to maintaining high standards of quality education through dedicated faculty, efficient management, and a student-focused academic environment. We look forward to welcoming the brightest minds and helping them build their future with confidence and clarity.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	)
}

export default AboutPage
