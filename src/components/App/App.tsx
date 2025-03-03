import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import "./App.css";
import Footer from "../Footer/Footer";
import NoFound from "../../pages/NoFound/NoFound";

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* parmi les 3 pages de services */}
					<Route path="/services/:choix" element={<Home />} />
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
