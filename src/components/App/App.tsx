import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
import { ReactNode } from "react";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location.pathname]);

	const PageWrapper = ({ children }: { children: ReactNode }) => (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);

	return (
		<div className="app">
			<Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			<Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			<main>
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route
							path="/"
							element={
								<PageWrapper>
									<Home />
								</PageWrapper>
							}
						/>
						<Route
							path="/prestations"
							element={
								<PageWrapper>
									<Prestations />
								</PageWrapper>
							}
						/>
						<Route
							path="/realisations"
							element={
								<PageWrapper>
									<Realisations />
								</PageWrapper>
							}
						/>
						<Route
							path="/propos"
							element={
								<PageWrapper>
									<About />
								</PageWrapper>
							}
						/>
						<Route
							path="/mentions"
							element={
								<PageWrapper>
									<LegalMentions />
								</PageWrapper>
							}
						/>
						<Route
							path="*"
							element={
								<PageWrapper>
									<NoFound />
								</PageWrapper>
							}
						/>
					</Routes>
				</AnimatePresence>
			</main>
			<Nav />
			<Footer />
		</div>
	);
}

export default App;
