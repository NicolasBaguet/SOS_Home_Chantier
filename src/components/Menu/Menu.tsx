import { NavLink } from "react-router";
import "./Menu.scss";

function Menu({
	setIsMenuOpen,
	isMenuOpen,
}: {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuOpen: boolean;
}) {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className={`menuNavBackground ${isMenuOpen ? "isOpen" : ""}`}
			onClick={() => {
				setIsMenuOpen(false);
			}}
		>
			<div className={`menuNav ${isMenuOpen ? "isOpen" : ""}`}>
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
						Me contacter ↓
					</button>
				</nav>
			</div>
		</div>
	);
}
export default Menu;
