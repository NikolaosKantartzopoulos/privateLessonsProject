import React from "react";
import MainNavbar from "./MainNavbar";
import "../../styles/contact.css";
import phoneImg from "../../images/phone.png";
import emailImg from "../../images/email.png";

function Contact() {
	return (
		<>
			<MainNavbar />
			<div id="contactBlock">
				<img src={emailImg} />
				<p>Email</p>
				<p>professor@mail.com</p>
				<img src={phoneImg} />
				<p>tel</p>
				<p>9999 999 999 </p>
			</div>
		</>
	);
}

export default Contact;
