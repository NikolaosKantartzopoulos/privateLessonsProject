import React, { useState } from "react";

import geoImage from "../images/geoKleft.png";

function LetUsMeet() {
	return (
		<div className="flex flex-row flex-wrap justify-around">
			<div className="w-1/2 m-auto p-4">
				<img src={geoImage} className="m-auto" />
			</div>
			<div className="w-1/2 m-auto p-4">
				<h2 className="text-2xl p-2">Ας γνωριστούμε</h2>
				<p className="text-xl p-2">Γεώργιος Κλεφτόγιαννης MSc</p>
				<button id="cvDiv">Βιογραφικό</button>
			</div>
		</div>
	);
}

export default LetUsMeet;
