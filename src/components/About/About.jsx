import Navbar from "../../static/Navbar/Navbar";
import "./aboutStyle.css";
import styled from "styled-components";

const StyledSection = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const StyledAnchor = styled.a`
	font-weith: bold;
	color: white;
	text-decoration: underline;
	&:hover {
		color: rgb(133, 211, 127);
	}
`;
const StyledParagraph = styled.p`
	width: 70%;
`;
export default function About() {
	return (
		<div className="about-container">
			<Navbar />
			<div className="hero">
				<h1 className="is-size-1 about-h1">KeePassXC</h1>
			</div>
			<div className="section section-container">
				<StyledSection className="section ">
					<StyledParagraph className="is-size-2">
						Is a modern multi-platform, secure, and open-source password manager
						that stores and manages your most sensitive information. <br />
						It saves usernames, passwords, URLs, attachments, and notes in an
						offline, encrypted file that can be stored in any location,
						including private and public cloud solutions. An integrated search
						function allows you to use advanced patterns to easily find any
						entry in your database.
					</StyledParagraph>
				</StyledSection>

				<StyledSection className="section">
					<StyledParagraph className="is-size-4">
						Our goal is to create an application that can be used by novice and
						power users while still offering advanced features to those that
						need them. This{" "}
						<StyledAnchor href="https://keepassxc.org/docs/KeePassXC_GettingStarted.html">
							QuickStart Guide
						</StyledAnchor>{" "}
						provides more in detail the features and gets you started using
						KeePassXC on your Windows, macOS, or Linux computer using
						pre-compiled binaries from the downloads page. Additionally,
						individual Linux distributions may ship their own versions, so
						please check your distribution's package list to see if KeePassXC is
						available. Detailed documentation is available in the{" "}
						<StyledAnchor href="https://keepassxc.org/docs/KeePassXC_UserGuide.html">
							User Guide.
						</StyledAnchor>
					</StyledParagraph>
				</StyledSection>
			</div>
		</div>
	);
}
