import { useRouteError } from "react-router-dom";
import "./errorPageStyle.css";

export default function ErrorPage() {
	const error = useRouteError();
	console.log(error);
	let code = "";
	if (error.statusText === "Not Found") {
		code = "404";
	}

	return (
		<div id="error-page">
			<h1>Sorry!</h1>
			<p>Looks like something's off...</p>
			<p>
				<i>
					{code} {error.statusText || error.message}
				</i>
			</p>
		</div>
	);
}
