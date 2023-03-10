import "./heroStyle.css";

export const Hero = () => {
	return (
		<section className="hero parent ">
			<div className="hero-parent container">
				<div className="hero-child top">
					<section className="hero-section">
						<h1>A Cross-Platform Password Manager</h1>
						<p className="block subtitle is-5">
							Never forget a password again.
						</p>
					</section>
					<div className="buttons">
						<button className="button download">Download</button>
					</div>
				</div>
				<div className="hero-child">
					<figure class=" ">
						<img
							className=""
							src="https://via.placeholder.com/300"
							alt="keepass application"
						/>
					</figure>
				</div>
			</div>
		</section>
	);
};
