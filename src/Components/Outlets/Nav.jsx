import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../../Assets/school-logo.png"

const Nav = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60)
		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<>
			<nav className={`main-nav${scrolled ? " nav-solid" : ""}`}>
				<div className="container-main">
					<div className="nav-inner">
						<Link to="/" className="nav-brand">
							<img src={logo} className="nav-logo" alt="Darul Huda EMHSS" />
						</Link>
						<div className="nav-center-links desktop-nav">
							<Link to="/" className="nav-link-item">Home</Link>
							<Link to="/about" className="nav-link-item">About Us</Link>
							<Link to="/acadamics" className="nav-link-item">Programmes</Link>
							<Link to="/admission" className="nav-link-item">Admission</Link>
							<Link to="/contact" className="nav-link-item">Contact Us</Link>
						</div>
						<div className="nav-actions desktop-nav">
							<Link to="/admission" className="btn nav-cta-btn">Apply Now</Link>
						</div>
						<button className="mobile-menu-btn" onClick={toggleSidebar} aria-label="Open menu">
							<i className="ri-menu-3-line"></i>
						</button>
					</div>
				</div>
			</nav>

			<div className={`mobile-sidebar${isSidebarOpen ? " open" : ""}`}>
				<div className="sidebar-content">
					<div className="sidebar-header">
						<img src={logo} className="sidebar-logo" alt="Darul Huda EMHSS" />
						<button className="close-btn" onClick={toggleSidebar} aria-label="Close menu">
							<i className="ri-close-line"></i>
						</button>
					</div>
					<ul className="mobile-nav-list">
						<li><Link className="mobile-nav-items" to="/" onClick={toggleSidebar}>Home</Link></li>
						<li><Link className="mobile-nav-items" to="/about" onClick={toggleSidebar}>About Us</Link></li>
						<li><Link className="mobile-nav-items" to="/acadamics" onClick={toggleSidebar}>Programmes</Link></li>
						<li><Link className="mobile-nav-items" to="/admission" onClick={toggleSidebar}>Admission</Link></li>
						<li><Link className="mobile-nav-items" to="/contact" onClick={toggleSidebar}>Contact Us</Link></li>
					</ul>
					<div className="sidebar-footer-dv">
						<Link to="/admission" className="btn sidebar-apply-btn" onClick={toggleSidebar}>Apply Now</Link>
					</div>
				</div>
			</div>
			{isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
		</>
	)
}

export default Nav
