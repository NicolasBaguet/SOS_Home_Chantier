import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

	useEffect(() => {
		// Fonction pour vérifier la largeur de l'écran
		const handleResize = () => {
			setIsMobile(window.innerWidth < 800);
		};

		// Ajouter un écouteur d'événement pour "resize"
		window.addEventListener("resize", handleResize);

		// Nettoyer l'écouteur d'événement lors du démontage du composant
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="brownBar">
			{!isMobile ? (
				<nav>
					<NavLink to="/" aria-label="retour accueil">
						Accueil
					</NavLink>
					<NavLink to="/prestations" aria-label="prestations">
						Prestations
					</NavLink>
					<NavLink to="/propos" aria-label="À propos">
						À propos
					</NavLink>
					<NavLink to="/realisations" aria-label="realisations">
						Realisations
					</NavLink>
					<button
						type="button"
						onClick={() => {
							window.scrollTo({
								top: document.documentElement.scrollHeight,
								behavior: "smooth",
							});
						}}
					>
						Me contacter
					</button>
				</nav>
			) : (
				""
			)}
		</div>
	);
}

export default Nav;
