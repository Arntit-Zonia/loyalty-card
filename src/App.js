import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="app container">
			<Navbar />
			<Homepage />
		</div>
	);
}

export default App;
