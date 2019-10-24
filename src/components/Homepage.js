import React from "react";
import Stamps from "./options/Stamps";
import Pastry from "./options/Pastry";
import Juice from "./options/Juice";
import Discount from "./options/Discount";

const Homepage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<Stamps />
				</div>
				<div className="col-6">
					<Pastry />
				</div>
				<div className="col-6">
					<Juice />
				</div>
				<div className="col-6">
					<Discount />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
