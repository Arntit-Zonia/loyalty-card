import React from "react";
import { Link } from "react-router-dom";

import pastry from "./logo-images/pastry.png";

const Pastry = () => {
	return (
		<div className="option-logo">
			<Link to="/rewards/pastry">
				<img src={pastry} alt="Free pastry" />
				<p className="lead">Free pastry</p>
			</Link>
		</div>
	);
};

export default Pastry;
