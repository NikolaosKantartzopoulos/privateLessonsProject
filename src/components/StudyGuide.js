import React from "react";
import rightPartImg from "../images/galaxy.jpg";

function StudyGuide() {
	return (
		<div className="flex flex-row flex-wrap bg-blue-100">
			<div className="w-full sm:w-1/2">
				<p className="text-2xl p-2  text-center">Πρόγραμμα Σπουδών</p>
				<p className="p-2">
					To πρόγραμμα σπουδών μας έχει διαμορφωθεί με σκοπό να προετοιμάσει
					τους μαθητές κατάλληλα ώστε να μπορέσουν να αντεπεξέλθουν στις
					απαιτήσεις του νέου συστήματος και της τράπεζας θεμάτων. Χτίζοντας
					γερές βάσεις από νωρίς, εξασφαλίζουμε μια επιτυχή πορεία προς τις
					πανελλήνιες εξετάσεις.
				</p>
			</div>
			<div className="w-full  sm:w-1/2 p-4">
				<img src={rightPartImg} />
			</div>
		</div>
	);
}

export default StudyGuide;
