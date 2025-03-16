import { Link, NavLink } from "react-router";
import "./Header.scss";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({
	setIsMenuOpen,
	isMenuOpen,
}: {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuOpen: boolean;
}) {
	const [isMobile, setIsMobile] = useState(false);
	const [opacity, setOpacity] = useState(1);
	const [prevScrollY, setPrevScrollY] = useState(0);
	const scrollDirection = useRef("down");

	useEffect(() => {
		const checkScreenWidth = () => {
			setIsMobile(window.innerWidth < 800);
		};

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Détermination de la direction du scroll
			scrollDirection.current = currentScrollY > prevScrollY ? "down" : "up";
			setPrevScrollY(currentScrollY);

			// Calcul de l'opacité selon la direction
			if (scrollDirection.current === "down") {
				const newOpacity = Math.max(0, 1 - (currentScrollY - 100) / 300);
				setOpacity(newOpacity);
			} else {
				const newOpacity = Math.min(1, currentScrollY / 100 + 1);
				setOpacity(newOpacity);
			}
		};

		// Vérification initiale
		checkScreenWidth();

		// Ajout d'un écouteur d'événement pour les changements de taille d'écran
		window.addEventListener("resize", checkScreenWidth);
		window.addEventListener("scroll", handleScroll);

		// Nettoyage de l'écouteur d'événement lors du démontage du composant
		return () => {
			window.removeEventListener("resize", checkScreenWidth);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollY]);

	return (
		<header className="header" style={{ opacity: opacity }}>
			<Link to="/" aria-label="retour accueil">
				<div className="logo">
					<img src="/SOS_logo2.png" alt="Logo site" />
				</div>
			</Link>
			{isMobile ? (
				<button
					className="menuButton"
					type="button"
					onClick={() => {
						setIsMenuOpen(!isMenuOpen);
					}}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			) : (
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
			)}
		</header>
	);
}
export default Header;
