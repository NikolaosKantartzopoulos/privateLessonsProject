import React from "react";
import MultipleSelection from "../onlineTests/testUI/MultipleSelection";
import galaxyImg from "./exercise1Image.png";

function FirstMul() {
	let data = {
		mulTestGoal:
			"1) Σώμα μετακινείται από τη θέση Σ1 στη θέση Σ2 του παρακάτω σχήματος. Η μετατόπιση του κινητού είναι:",
		mulTestImage: galaxyImg,
		mulTestAnswer: "α",
		arrayOfSelections: ["α) +3 m", "β) -3 m", "γ) +4 m", "δ) -1 m"],
	};
	return <MultipleSelection {...data} />;
}

export default FirstMul;
