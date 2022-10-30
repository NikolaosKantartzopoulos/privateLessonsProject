import React, { Component } from "react";
import MainNavbar from "./components/navBar/MainNavbar";
import HomeMainBody from "./components/HomeMainBody";

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
