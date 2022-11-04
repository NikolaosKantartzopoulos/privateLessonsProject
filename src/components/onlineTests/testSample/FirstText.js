import React from "react";
import TextInput from "../onlineTests/textInputOnlineTest/TextInput";

function FirstText() {
	let data = {
		testGoal: "Please enter the answer 77",
		testImage: null,
		testAnswer: "77",
	};
	return <TextInput {...data} />;
}

export default FirstText;
