import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./loyalty-card.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import StampRewards from "./rewards/StampRewards";
import PastryRewards from "./rewards/PastryRewards";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Route path="/" exact component={Homepage} />
				<Route path="/rewards/stamps" exact component={StampRewards} />
				<Route path="/rewards/pastry" exact component={PastryRewards} />
			</BrowserRouter>
		</div>
	);
}

export default App;
