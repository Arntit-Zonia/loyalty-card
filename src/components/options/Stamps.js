import React from "react";
import { Link } from "react-router-dom";

import stamp from "./logo-images/stamp.png";
const Stamps = () => {
	return (
		<Link to="/rewards/stamps">
			<div className="option-logo">
				<img src={stamp} alt="Stamps" />
				<p className="lead">Stamps</p>
			</div>
		</Link>
	);
};

export default Stamps;
