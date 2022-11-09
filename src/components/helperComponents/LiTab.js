import React, { useState } from "react";

function LiTab(props) {
	const [opaque, setOpaque] = useState("0");
	const [pointEv, setPointEv] = useState("none");
	const [transState, setTransState] = useState("translateX(-10px)");

	function handleMouseIn() {
		setOpaque("1");
		setPointEv("auto");
		setTransState("translateX(0px)");
	}

	function handleMouseOut() {
		setOpaque("0");
		setPointEv("none");
		setTransState("translateX(-10px)");
	}

	function handleDropdownClick(e) {
		e.stopPropagation();
		console.log("dropdown click");
	}

	function renderedOption() {
		return (
			<li
				className="tabLi"
				onMouseEnter={handleMouseIn}
				onMouseLeave={handleMouseOut}
			>
				{props.tabDescriptionShow && props.tabName}
				{props.hasDropdown && (
					<div
						className="dropdown"
						style={{
							opacity: opaque,
							border: "0.25rem double black",
							pointerEvents: pointEv,
							transform: transState,
						}}
					>
						<div onClick={handleDropdownClick}>{props.dropdownContent}</div>
					</div>
				)}
				{props.children}
			</li>
		);
	}

	return <>{renderedOption()}</>;
}

export default LiTab;
