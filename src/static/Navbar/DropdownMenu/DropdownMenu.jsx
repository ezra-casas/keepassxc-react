import React from "react";
import { Link } from "react-router-dom";

export const DropdownMenu = (props) => {
	const nav = props.navigations;

	return (
		<ul>
			{nav.map((item) => {
				return (
					<li className="navbar-item" key={item} id={item}>
						<Link to={`/${item}`}>{item}</Link>
					</li>
				);
			})}
		</ul>
	);
};
