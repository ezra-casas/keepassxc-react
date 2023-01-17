import React from "react";

export const DropdownMenu = (props) => {
	const nav = props.navigations;

	return (
		<ul>
			{nav.map((item) => {
				return (
					<li className="navbar-item" key={item} id={item}>
						{item}
					</li>
				);
			})}
		</ul>
	);
};
