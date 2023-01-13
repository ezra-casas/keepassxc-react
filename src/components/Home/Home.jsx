import { Footer } from "../../static/Footer/Footer";
import Navbar from "../../static/Navbar/Navbar";
import { Hero } from "./Hero/Hero";
import { InfoSection } from "././InfoSection/InfoSection";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<InfoSection />
			<Footer />
		</div>
	);
}
