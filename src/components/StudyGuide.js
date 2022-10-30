import React from "react";
import rightPartImg from "../images/galaxy.jpg";

function StudyGuide() {
	return (
		<>
			<div className="flex flex-row flex-wrap bg-blue-100 shadowBlock">
				<div className="w-full sm:w-1/2">
					<p className="text-2xl p-2  text-center">Study Guide</p>
					<p className="p-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque quis ipsum in turpis maximus interdum. Vivamus mi elit,
						malesuada nec interdum id, efficitur pellentesque justo. Nunc leo
						lorem, consequat vitae orci condimentum, dapibus pharetra tellus.
						Vestibulum mi ipsum, lobortis non diam ac, congue egestas quam.
						Donec pretium lorem ut mi dignissim dignissim. Class aptent taciti
						sociosqu ad litora torquent per conubia nostra, per inceptos
						himenaeos. In sed mi turpis. Pellentesque habitant morbi tristique
						senectus et netus et malesuada fames ac turpis egestas.
					</p>
				</div>
				<div className="w-full  sm:w-1/2 p-4">
					<img src={rightPartImg} />
				</div>
			</div>
		</>
	);
}

export default StudyGuide;
