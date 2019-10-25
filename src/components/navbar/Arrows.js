import React from "react";
import { Link } from "react-router-dom";

const Arrows = () => {
	return (
		<div id="arrows">
			<span>
				<Link to="/">
					<i className="fas fa-chevron-left pl-3 text-white"></i>
				</Link>
			</span>
			<span>
				<i className="fas fa-chevron-right pr-3"></i>
			</span>
		</div>
	);
};

export default Arrows;
