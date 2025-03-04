import { Link, NavLink } from "react-router";
import "./Header.scss";

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<Link to="/" aria-label="retour accueil">
					<img src="#" alt="Logo site" />
					<h1>SOS HOME CHANTIER</h1>
				</Link>
			</div>
			<nav>
				<NavLink to="/" aria-label="retour accueil">
					Accueil
				</NavLink>
				<NavLink to="/services/professionnel" aria-label="professionnel">
					Professionnel
				</NavLink>
				<NavLink to="/services/particulier" aria-label="particulier">
					Particulier
				</NavLink>
				<NavLink to="/portfolio" aria-label="À propos">
					À propos
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
