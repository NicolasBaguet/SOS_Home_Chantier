import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import "./App.scss";
import Footer from "../Footer/Footer";
import NoFound from "../../pages/NoFound/NoFound";
import LegalMentions from "../../pages/LegalsMentions/LegalMentions";
import Prestations from "../../pages/Prestations/Prestations";
import Realisations from "../../pages/Realisations/Realisations";
import About from "../../pages/About/About";
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<div className="app">
			<Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			<Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* services parmi les 3 pages de services */}
					<Route path="/prestations" element={<Prestations />} />
					<Route path="/realisations" element={<Realisations />} />
					<Route path="/propos" element={<About />} />
					<Route path="/mentions" element={<LegalMentions />} />
					<Route path="*" element={<NoFound />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
