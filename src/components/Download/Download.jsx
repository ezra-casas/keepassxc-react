import { Link } from "react-router-dom";

export default function Download() {
	const OSInfo = navigator.userAgent;

	// let macActive = "is-active";
	// let winActive = "";
	// let linuxActive = "";
	// let sourceActive = "";

	function handleClick() {
		// console.log(selectedOption);
	}

	return (
		<div className="container">
			<h1>Download</h1>
			<nav className="tabs is-centered is-medium is-toggle is-fullwidth">
				<ul>
					<li id="linux">
						<Link to="./Linux" activeClassName="active">
							Linux
						</Link>
					</li>
					<li>
						<a onClick={handleClick}>macOS</a>
					</li>
					<li>
						<a onClick={handleClick}>Windows</a>
					</li>
					<li>
						<a onClick={handleClick}>Source Code</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
