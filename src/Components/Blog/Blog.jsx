import React from "react"
import blogimageone from "../../Assets/site1.jpg"
import blogimagetwo from "../../Assets/site2.jpg"
import blogimagethree from "../../Assets/site3.jpg"
import AOS from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css"

const blogs = [
	{
		image: blogimageone,
		category: "Entrance Coaching",
		title: "How Darul Huda Integrates NEET & KEAM Coaching with the +2 Curriculum",
		excerpt: "Our integrated coaching model ensures Science students never have to choose between board exams and entrance preparation. NEET and KEAM coaching runs seamlessly alongside the regular curriculum.",
		date: "May 2025",
		readTime: "4 min read"
	},
	{
		image: blogimagetwo,
		category: "Commerce Pathways",
		title: "CUET Made Simple: How Our Commerce Students Gain the Competitive Edge",
		excerpt: "With dedicated CUET coaching integrated into the Commerce stream, Darul Huda students are well-prepared for admission to leading Central Universities and prestigious institutions across India.",
		date: "April 2025",
		readTime: "5 min read"
	},
	{
		image: blogimagethree,
		category: "School Life",
		title: "A Child-Centred Approach: Why Darul Huda's Learning Environment Stands Apart",
		excerpt: "Moving beyond conventional teaching, Darul Huda fosters a dynamic, inclusive environment where students are active participants — shaping character, confidence, and responsible citizenship.",
		date: "March 2025",
		readTime: "3 min read"
	}
]

const Blog = () => {
	useEffect(() => {
		AOS.init({
			disable: "phone",
			duration: 700,
		})
	}, [])

	return (
		<div className="blog-main-section">
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="blog-header-section">
							<div className="blog-header-left">
								<h5 className="blog-small-label montserrat">Insights &amp; Updates</h5>
								<h1 className="blog-heading mb-0 montserrat">Latest <span className="blog-heading-highlight">Articles</span></h1>
							</div>
							<div className="blog-header-right">
								<a href="#blogs" className="blog-view-all-btn">View All <i className="ri-arrow-right-line"></i></a>
							</div>
						</div>
					</div>

					{blogs.map((blog, idx) => (
						<div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
							<div className="blog-card-new" data-aos="fade-up">
								<div className="blog-card-img-wrap">
									<img src={blog.image} className="blog-card-img" alt={blog.title} />
									<span className="blog-category-badge">{blog.category}</span>
								</div>
								<div className="blog-card-body">
									<h4 className="blog-card-title">{blog.title}</h4>
									<p className="blog-card-excerpt">{blog.excerpt}</p>
									<div className="blog-card-footer">
										<span className="blog-card-date">
											<i className="ri-calendar-line"></i> {blog.date}
											<span className="blog-read-time"><i className="ri-time-line"></i> {blog.readTime}</span>
										</span>
										<a href="#blogs" className="blog-read-more">Read More <i className="ri-arrow-right-line"></i></a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Blog
