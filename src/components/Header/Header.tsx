import { Link } from "react-router";
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
			setIsMobile(window.innerWidth < 700);
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
		<header
			className={opacity === 0 ? "header hidden" : "header"}
			style={{ opacity: opacity }}
		>
			{isMobile ? (
				<>
					<div>
						<Link to="/" aria-label="retour accueil">
							<div className="logo">
								<img src="/SOS_logo_txt.png" alt="Logo site" />
							</div>
						</Link>
					</div>
				</>
			) : (
				<>
					<div>
						<Link to="/" aria-label="retour accueil">
							<div className="logo">
								<img src="/SOS_logo.png" alt="Logo site" />
							</div>
						</Link>
					</div>
					<div className="title">
						<h1>sos Home Harmony</h1>
					</div>
				</>
			)}
			<div className="headerBottom">
				<button
					className="menuButton"
					type="button"
					onClick={() => {
						setIsMenuOpen(!isMenuOpen);
					}}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
		</header>
	);
}
export default Header;
