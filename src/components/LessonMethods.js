import React from "react";
import methodsImg from "../images/methods.jpeg";

function LessonMethods() {
	return (
		<div
			className="my-4 shadowBLock"
			style={{ backgroundImage: `url(${methodsImg} )` }}
		>
			<div className="h-[300px]  py-[125px]">
				<p className="text-white  h-[50px] p-2 text-center bg-blue-800 w-1/2 m-auto  border-4 border-solid border-white rounded-4 cursor-pointer">
					Μέθοδος Διδασκαλίας
				</p>
			</div>
		</div>
	);
}

export default LessonMethods;
