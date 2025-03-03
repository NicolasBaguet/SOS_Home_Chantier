import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import "./App.scss";
import Footer from "../Footer/Footer";
import NoFound from "../../pages/NoFound/NoFound";
import Services from "../../pages/Services/Services";

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* services parmi les 3 pages de services */}
					<Route path="/services/:choix" element={<Services />} />
					<Route path="/portfolio" element={<Home />} />
					<Route path="/apropos" element={<Home />} />
					<Route path="*" element={<NoFound />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
