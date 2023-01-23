import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import AboutRoute from "./routes/About";

import "./index.css";
import App from "./App";
import DownloadRoute from "./routes/DownloadRoute";
import DownloadLinux from "./routes/Downloads/DownloadLinux";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/About",
		element: <AboutRoute />,
	},
	{
		path: "/Download",
		element: <DownloadRoute />,
		children: [
			{ path: "./Linux", element: <DownloadLinux /> },
			{ path: "./macOs" },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
