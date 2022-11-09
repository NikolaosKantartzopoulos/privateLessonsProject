import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import profImg from "../../images/prof.png";

function LetUsMeet() {
	return (
		<div className="flex flex-row flex-wrap justify-around shadowBlock my-4">
			<div className="w-1/2 m-auto p-4">
				<img src={profImg} className="m-auto" />
			</div>
			<div className="w-1/2 m-auto p-4 flex flex-col">
				<h2 className="text-2xl p-2">Let us meet!</h2>
				<p className="text-xl p-2">Professor John MSc</p>
				<button id="cvDiv" className="w-1/2 mx-auto mt-[10px]">
					<Link to="/about">Let us Meet!</Link>
				</button>
			</div>
		</div>
	);
}

export default LetUsMeet;
