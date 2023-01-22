import Navbar from "../../static/Navbar/Navbar";
import "./aboutStyle.css";

export default function About() {
	return (
		<div className="about-container">
			<Navbar />
			<div className="hero">
				<h1 className="is-size-1 about-h1">KeePassXC</h1>
			</div>
			<div className="section section-container">
				<section className="section ">
					<p className="is-size-2">
						Is a modern multi-platform, secure, and open-source password manager
						that stores and manages your most sensitive information. <br />
						It saves usernames, passwords, URLs, attachments, and notes in an
						offline, encrypted file that can be stored in any location,
						including private and public cloud solutions. An integrated search
						function allows you to use advanced patterns to easily find any
						entry in your database.
					</p>
				</section>

				<section className="section">
					<p className="is-size-4">
						This{" "}
						<a href="https://keepassxc.org/docs/KeePassXC_GettingStarted.html">
							QuickStart Guide
						</a>{" "}
						gets you started using KeePassXC on your Windows, macOS, or Linux
						computer using pre-compiled binaries from the downloads page.
						Additionally, individual Linux distributions may ship their own
						versions, so please check your distribution's package list to see if
						KeePassXC is available. Detailed documentation is available in the{" "}
						<a href="https://keepassxc.org/docs/KeePassXC_UserGuide.html">
							User Guide.
						</a>
					</p>
				</section>

				<section className="section">
					<p className="is-size-4">
						KeePassXC has numerous features for novice and power users alike.
						Our goal is to create an application that can be used by anyone
						while still offering advanced features to those that need them.
					</p>
					<h2 className="is-size-3">Basic</h2>
					<div className="content">
						<ul>
							<li>
								Create, open, and save databases in the KDBX format (KeePass
								compatible to KDBX4 and KDBX3)
							</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
}
