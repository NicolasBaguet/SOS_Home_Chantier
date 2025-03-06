import { Link, NavLink } from "react-router";
import "./Header.scss";

function Header() {
	return (
		<header className="header">
			<Link to="/" aria-label="retour accueil">
				<div className="logo">
					<img src="./data/SOS_logo2.png" alt="Logo site" />
				</div>
			</Link>
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
		</header>
	);
}
export default Header;
