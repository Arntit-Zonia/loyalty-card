import React from "react";
import pastry from "./logo-images/pastry.png";
const Pastry = () => {
	return (
		<div className="option-logo">
			<img src={pastry} alt="Free pastry" />
			<p className="lead">Free pastry</p>
		</div>
	);
};

export default Pastry;
