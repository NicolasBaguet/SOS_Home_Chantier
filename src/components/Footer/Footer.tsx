import { Link } from "react-router";

import "./Footer.scss";

function Footer() {
	return (
		<footer>
			<div className="links">
				<div className="link">
					<Link to="./aboutUs">A propos</Link>
				</div>
				<div className="link">
					<Link to="./termsOfService">Mentions légales</Link>
				</div>
			</div>
			<p>© 2025 SOS Home Chantier. Tous droits réservés.</p>
		</footer>
	);
}
export default Footer;
