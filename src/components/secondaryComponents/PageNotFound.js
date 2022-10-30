import React from "react";
import MainNavbar from "../navBar/MainNavbar";

function PageNotFound() {
	return (
		<div>
			<MainNavbar />

			<div className="text-[5rem] text-red-700 text-center m-8">
				<h1>404</h1>
				<h2>Page not found...</h2>
			</div>
		</div>
	);
}

export default PageNotFound;
