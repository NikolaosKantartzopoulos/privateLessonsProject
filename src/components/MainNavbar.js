import React from "react";

function MainNavbar(props) {
	return (
		<div
			id="navbarMain"
			className="flex flex-row flex-wrap bg-zinc-900 text-white p-2 justify-between items-center"
		>
			<div id="logo" className="w-1/4 select-none">
				<p>Ιδιαίτερα Μαθήματα Φυσικής</p>
				<p>Γεώργιος Κλεφτόγιαννης MSc</p>
			</div>
			<ul className="w-3/4 grid grid-cols-2 sm:grid-cols-5 gap-2 h-1/2">
				<li className="text-center border-2 p-1 hover:bg-white hover:border-l-zinc-700 hover:text-black cursor-pointer">
					Αρχική
				</li>
				<li className="text-center border-2 p-1 hover:bg-white hover:border-l-zinc-700 hover:text-black cursor-pointer">
					Διδάσκων
				</li>
				<li className="text-center border-2 p-1 hover:bg-white hover:border-l-zinc-700 hover:text-black cursor-pointer col-span-2 md:col-span-1">
					Εκπαιδευτικό Υλικό
				</li>
				<li className="text-center border-2 p-1 hover:bg-white hover:border-l-zinc-700 hover:text-black cursor-pointer">
					Ανακοινώσεις
				</li>
				<li className="text-center border-2 p-1 hover:bg-white hover:border-l-zinc-700 hover:text-black cursor-pointer">
					Επικοινωνία
				</li>
			</ul>
		</div>
	);
}

export default MainNavbar;
