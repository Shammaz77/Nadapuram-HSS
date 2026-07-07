import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { Link } from "react-router-dom"
import "swiper/css"
import "swiper/css/pagination"

const programs = [
	{
		image: "https://i.pinimg.com/736x/fe/18/cb/fe18cb7288f497746b288b9a5e3b3e63.jpg",
		title: "Science Group — Plus Two",
	},
	{
		image: "https://i.pinimg.com/736x/29/5a/94/295a9452d40ef289c3b93bdb52bf0724.jpg",
		title: "Commerce Group — Plus Two",
	},
	{
		image: "https://i.pinimg.com/736x/96/83/a6/9683a603c064036b423fad48666eba4f.jpg",
		title: "NEET & KEAM Coaching",
	},
	{
		image: "https://i.pinimg.com/736x/94/6d/f8/946df80d56acb66e657ca3e5511eff4e.jpg",
		title: "CUET Coaching",
	},
]

const Programes = () => {
	return (
		<div className="programes-main">
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12 text-center mb-5">
						<h5 className="path-samll-text montserrat">What We Offer</h5>
						<h1 className="programe-heading montserrat">Our <span className="programe-block-text">Programmes</span></h1>
					</div>
					<div className="col-lg-12">
						<Swiper
							modules={[Pagination, Autoplay]}
							spaceBetween={20}
							pagination={{ clickable: true }}
							autoplay={{ delay: 3000, disableOnInteraction: false }}
							loop={true}
							breakpoints={{
								0:   { slidesPerView: 1, spaceBetween: 14 },
								600: { slidesPerView: 2, spaceBetween: 16 },
								992: { slidesPerView: 4, spaceBetween: 20 },
							}}
							className="programmes-swiper-new"
						>
							{programs.map((prog, idx) => (
								<SwiperSlide key={idx}>
									<Link to="/acadamics" style={{ textDecoration: "none" }}>
										<div className="prog-img-card">
											<img src={prog.image} alt={prog.title} className="prog-img-card-img" />
											<div className="prog-img-card-overlay">
												<span className="prog-img-card-title">{prog.title}</span>
												<span className="prog-img-card-arrow">
													<i className="ri-arrow-right-up-line"></i>
												</span>
											</div>
										</div>
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Programes
