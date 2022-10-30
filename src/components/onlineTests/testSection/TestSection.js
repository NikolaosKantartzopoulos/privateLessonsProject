import React, { useState, useEffect } from "react";

function TestSection() {
	const [pointsGathered, setPointsGathered] = useState(20);
	const [testSubmited, setTestSubmited] = useState(false);
	const [testPassed, setTestPassed] = useState(null);
	const [testSectionBackgroundColor, setTestSectionBackgroundColor] =
		useState("white");
	const [rank, setRank] = useState(null);

	let testSectionName = "Sample Test Name";
	let maximumPoints = 100;

	function getTestRank() {
		console.log(pointsGathered);
		if (pointsGathered < 50) {
			setRank("FAIL");
		} else if (pointsGathered < 65) {
			setRank("C");
		} else if (pointsGathered < 75) {
			setRank("B");
		} else if (pointsGathered == 100) {
			setRank("A+");
		} else setRank("A");
	}

	function submitTest() {
		getTestRank();
		console.log(rank);
		rank != "FAIL" ? setTestPassed(true) : setTestPassed(false);
		setTestSubmited(true);
	}

	useEffect(() => {
		getTestRank();
		if (testPassed === null) setTestSectionBackgroundColor("white");
		else if (testPassed) setTestSectionBackgroundColor("lightgreen");
		else setTestSectionBackgroundColor("coral");
		return () => {
			console.log(rank);
		};
	}, [testSubmited, rank]);

	return (
		<div style={{ backgroundColor: `${testSectionBackgroundColor}` }}>
			<div className="testSectionHeader">
				<div>{testSectionName}</div>
				<div>{pointsGathered}/100</div>
				{testSubmited && <div>Rank: {rank}</div>}
			</div>
			<hr />
			<div className="testSectionBody">
				<br />
				Exercise 1 <br />
				<br />
				Exercise 1 <br />
				<br />
				Exercise 1 <br />
			</div>
			<hr />
			<div className="testSectionFooter">
				<button onClick={submitTest}>Submit Test</button>
			</div>
		</div>
	);
}

export default TestSection;
