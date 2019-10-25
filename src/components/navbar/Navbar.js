import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import brandLogo from "./brand-logo/brand-logo.png";
import Arrows from "./Arrows";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<div className="nav-logos">
					<li id="brand-logo">
						<Link to="/">
							<img src={brandLogo} alt="Coffee" />
						</Link>
					</li>
					<li className="nav-logo">
						<i className="fas fa-search"></i>
					</li>
					<li className="nav-logo">
						<i className="far fa-bell"></i>
					</li>
					<li className="nav-logo">
						<u>En</u>
					</li>
				</div>
			</ul>
			<Arrows />
		</nav>
	);
};

export default Navbar;
