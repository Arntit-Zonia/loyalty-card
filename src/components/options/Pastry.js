import React from "react";
import { Link } from "react-router-dom";

import pastry from "./logo-images/pastry.png";

const Pastry = () => {
	return (
		<Link to="/rewards/pastry">
			<div className="option-logo">
				<img src={pastry} alt="Free pastry" />
				<p className="lead">Free pastry</p>
			</div>
		</Link>
	);
};

export default Pastry;
