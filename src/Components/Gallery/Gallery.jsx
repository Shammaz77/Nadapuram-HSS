import React, { useState, useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import img1 from "../../Assets/gallery1.jpg"
import img2 from "../../Assets/hero2.jpg"
import img3 from "../../Assets/hero1.jpg"
import img4 from "../../Assets/site2.jpg"
import galleryVideo from "../../Assets/gallery-video.mp4"

const items = [
	{ type: "image", src: img1 },
	{ type: "video", src: galleryVideo },
	{ type: "image", src: img2 },
	{ type: "image", src: img3 },
	{ type: "image", src: img4 },
]

const Gallery = () => {
	const [popup, setPopup] = useState(null)
	const videoRef = useRef(null)

	const openPopup = (item) => setPopup(item)

	const closePopup = () => {
		if (videoRef.current) {
			videoRef.current.pause()
			videoRef.current.currentTime = 0
		}
		setPopup(null)
	}

	useEffect(() => {
		if (popup?.type === "video" && videoRef.current) {
			videoRef.current.play()
		}
	}, [popup])

	useEffect(() => {
		const handleKey = (e) => { if (e.key === "Escape") closePopup() }
		document.addEventListener("keydown", handleKey)
		return () => document.removeEventListener("keydown", handleKey)
	}, [])

	return (
		<div className="gallery-section">
			<div className="container-main">
				<div className="gallery-header">
					<h5 className="section-small-label montserrat">Our Moments</h5>
					<h2 className="gallery-main-title montserrat">Gallery <span className="gallery-highlight">Highlights</span></h2>
				</div>
			</div>

			<Swiper
				modules={[Autoplay]}
				autoplay={{ delay: 2800, disableOnInteraction: false }}
				loop={true}
				speed={900}
				spaceBetween={16}
				slidesPerView={1.3}
				centeredSlides={true}
				breakpoints={{
					480:  { slidesPerView: 1.6, spaceBetween: 16 },
					768:  { slidesPerView: 2.4, spaceBetween: 20 },
					1024: { slidesPerView: 3.4, spaceBetween: 24 },
					1400: { slidesPerView: 4.2, spaceBetween: 24 },
				}}
				className="gallery-swiper"
			>
				{items.map((item, i) => (
					<SwiperSlide key={i}>
						<div className="gallery-slide-inner" onClick={() => openPopup(item)}>
							{item.type === "image" ? (
								<img src={item.src} alt="" className="gallery-slide-img" />
							) : (
								<>
									<video
										src={item.src}
										className="gallery-slide-img"
										muted
										preload="metadata"
										playsInline
									/>
									<div className="gallery-play-btn">
										<i className="ri-play-fill"></i>
									</div>
								</>
							)}
							<div className="gallery-hover-overlay">
								<i className={item.type === "video" ? "ri-play-circle-line" : "ri-zoom-in-line"}></i>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{popup && (
				<div className="gallery-popup-backdrop" onClick={closePopup}>
					<button className="gallery-popup-close" onClick={closePopup}>
						<i className="ri-close-line"></i>
					</button>
					<div className="gallery-popup-content" onClick={(e) => e.stopPropagation()}>
						{popup.type === "image" ? (
							<img src={popup.src} alt="" className="gallery-popup-img" />
						) : (
							<video
								ref={videoRef}
								src={popup.src}
								controls
								autoPlay
								className="gallery-popup-video"
							/>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default Gallery
