import "./infoSectionStyle.css";

export const InfoSection = () => {
	return (
		<section className="container main-container">
			<section className="container infoSection-parent">
				<div className="infoSection-child">
					<h1 className="title section-title">Encryption</h1>
					<p>
						Complete database encryption using industry{" "}
						<em>
							<b>
								<a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard">
									standard 256-bit AES.
								</a>
							</b>
						</em>
						Fully compatible with KeePass Password Safe formats. Your password
						database works offline.{" "}
					</p>
				</div>
				<figure className="image">
					<img
						className=""
						src="https://via.placeholder.com/300"
						alt="encryption"
					/>
				</figure>
			</section>
			<section className="container infoSection-parent">
				<figure className="image">
					<img
						className=""
						src="https://via.placeholder.com/300"
						alt="encryption"
					/>
				</figure>
				<div className="infoSection-child">
					<h1 className="title section-title">Cross-Platform</h1>
					<p>
						Tested on Windows, macOS, and Linux. You can expect a{" "}
						<em>
							<b>seamless experience</b>
						</em>{" "}
						no matter which operating system you are using.
					</p>
				</div>
			</section>
			<section className="container infoSection-parent">
				<div className="infoSection-child">
					<h1 className="title section-title">Open Source</h1>
					<p>
						The full source code is published under the terms of the{" "}
						<em>
							<a href="https://en.wikipedia.org//wiki/GNU_General_Public_License">
								<b>GNU General Public License</b>
							</a>
						</em>{" "}
						and made available on GitHub. Use, inspect, change, and share at
						will; contributions by everyone are welcome.
					</p>
				</div>
				<figure className="image">
					<img
						className=""
						src="https://via.placeholder.com/300"
						alt="encryption"
					/>
				</figure>
			</section>
		</section>
	);
};
