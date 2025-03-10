import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import "./App.scss";
import Footer from "../Footer/Footer";
import NoFound from "../../pages/NoFound/NoFound";
import LegalMentions from "../../pages/LegalsMentions/LegalMentions";
import Prestations from "../../pages/Prestations/Prestations";
import Realisations from "../../pages/Realisations/Realisations";
import About from "../../pages/About/About";

function App() {
	return (
		<div className="app">
			<Header />
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
