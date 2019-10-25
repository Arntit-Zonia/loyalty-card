import React from "react";
import { Link } from "react-router-dom";

import stamp from "./logo-images/stamp.png";
const Stamps = () => {
	return (
		<div className="option-logo">
			<Link to="/rewards/stamps">
				<img src={stamp} alt="Stamps" />
				<p className="lead">Stamps</p>
			</Link>
		</div>
	);
};

export default Stamps;
