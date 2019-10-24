import React from "react";
import discount from "./logo-images/discount.png";

const Discount = () => {
	return (
		<div className="option-logo">
			<img src={discount} alt="£2 off" />
			<p className="lead">£2 off</p>
		</div>
	);
};

export default Discount;
