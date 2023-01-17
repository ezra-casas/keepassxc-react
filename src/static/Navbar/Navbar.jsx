/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { element } from "./navbarScript";
import "../navbarStyle.css";
import "./navbarScript";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";

console.log(element);
export default function Navbar() {
	const navigations = ["About", "Docs / FAQs", "Our Team", "Blog"];

	return (
		//
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a href="/" className="navbar-item logo">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/KeePassXC.svg/1920px-KeePassXC.svg.png"
						alt="keepassXC"
					/>
					<p>KeePassXC</p>
				</a>
				{/* Hamburger Menu */}
				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navigations"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navigations" className="navbar-menu">
				<div className="navbar-end">
					<a href="#" className="navbar-item">
						Download
					</a>
					<a href="#" className="navbar-item">
						GitHub
					</a>

					{/* Dropdown Menu */}
					<a className="navbar-item dropdown is-hoverable ">
						<a className="navbar-link">
							<p>More</p>
						</a>
						<div className="navbar-dropdown is-right dropdown-menu ">
							<DropdownMenu navigations={navigations} />
						</div>
					</a>
				</div>
			</div>
		</nav>
	);
}
