import React, { useState } from "react";

function LiTab(props) {
	const [opaque, setOpaque] = useState("0");
	const [pointEv, setPointEv] = useState("none");
	const [transState, setTransState] = useState("translateY(-10px)");

	function handleMouseIn() {
		setOpaque("1");
		setPointEv("auto");
		setTransState("translateY(0px)");
	}

	function handleMouseOut() {
		setOpaque("0");
		setPointEv("none");
		setTransState("translateY(-10px)");
	}

	function handleDropdownClick(e) {
		e.stopPropagation();
		console.log("dropdown click");
	}

	function renderedOption() {
		if (props.activeTab == props.tabName) {
			return (
				<li
					className="tabLi"
					onClick={() => props.setActiveTab(props.tabName)}
					style={{
						backgroundColor: "purple",
						border: "1px solid white",
					}}
					onMouseEnter={handleMouseIn}
					onMouseLeave={handleMouseOut}
				>
					{props.tabName}
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
				</li>
			);
		} else {
			return (
				<li
					className="tabLi"
					onClick={() => props.setActiveTab(props.tabName)}
					onMouseEnter={handleMouseIn}
					onMouseLeave={handleMouseOut}
				>
					{props.tabName}
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
				</li>
			);
		}
	}

	return <>{renderedOption()}</>;
}

export default LiTab;
