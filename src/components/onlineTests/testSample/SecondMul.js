import React from "react";
import MultipleSelection from "../onlineTests/multipleSelection/MultipleSelection";

function SecondMul() {
	let data = {
		testGoal:
			"2)  Η εξίσωση κίνησης ενός κινητού που κινείται ευθύγραμμα είναι: x = 4 - 3t (SI). Η ταχύτητα του κινητού",
		testImage: null,
		testAnswer: "α",
		arrayOfSelections: [
			"α) αρχικά είναι σταθερή και στη συνέχεια μειώνεται με ρυθμό 3 m/s, κάθε s.",
			"β) είναι σταθερή και έχει μέτρο 4 m/s.",
			"γ) είναι σταθερή και έχει μέτρο 3 m/s.",
			"δ) αρχικά είναι σταθερή και στη συνέχεια αυξάνεται με ρυθμό 3 m/s, κάθε s.",
		],
	};
	return <MultipleSelection {...data} />;
}

export default SecondMul;
