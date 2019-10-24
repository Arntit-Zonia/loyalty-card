import React from "react";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<div className="nav-logos">
					<li id="brand-logo" className="">
						Logo
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
		</nav>
	);
};

export default Navbar;
