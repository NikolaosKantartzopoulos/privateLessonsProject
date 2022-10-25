import React, { Component } from "react";
import MainNavbar from "./components/MainNavbar";
import HomeMainBody from "./components/HomeMainBody";
import cog from "./images/cog.png";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<MainNavbar />
				<HomeMainBody />
			</React.Fragment>
		);
	}
}

export default App;
