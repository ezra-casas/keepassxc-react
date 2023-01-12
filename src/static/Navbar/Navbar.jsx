/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { element } from "./navbarScript";

console.log(element);
export default function Navbar() {
	return (
		//
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a href="" className="navbar-item">
					KeePassXC
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
					<a className="navbar-item dropdown is-hoverable">
						<a className="navbar-link">More</a>
						<div className="navbar-dropdown is-right">
							<a href="#" className="navbar-item">
								About
							</a>
							<a href="#" className="navbar-item">
								Docs / FAQs
							</a>
							<a href="#" className="navbar-item">
								Our Team
							</a>
						</div>
					</a>
				</div>
			</div>
		</nav>
	);
}
