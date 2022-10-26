import React from "react";
import "../styles/navbar.css";

function MainNavbar(props) {
	return (
		<div id="navbarMain">
			<div id="navLeft">
				<p>Ιδιαίτερα Μαθήματα Φυσικής</p>
				<p>Γεώργιος Κλεφτόγιαννης MSc</p>
			</div>
			<div id="navRight">
				<a href="/">Αρχική</a>
				<a href="/giorgosKleftogiannis">Διδάσκων</a>
				<a id="navStudy" href="/studyGuide">
					Εκπαιδευτικό Υλικό
				</a>
				<a href="/announcements">Ανακοινώσεις</a>
				<a href="/contact">Επικοινωνία</a>
			</div>
		</div>
	);
}

export default MainNavbar;
