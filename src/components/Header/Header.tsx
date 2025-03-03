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
				<NavLink
					to="/services/agence-immobiliere"
					aria-label="agence immobilière"
				>
					Agence Immobilière
				</NavLink>
				<NavLink to="/services/particulier-a" aria-label="particulier A">
					Particulier A
				</NavLink>
				<NavLink to="/services/particulier-b" aria-label="particulier B">
					Particulier B
				</NavLink>
				<NavLink to="/portfolio" aria-label="réalisations">
					Realisations
				</NavLink>
			</nav>
		</header>
	);
}
export default Header;
