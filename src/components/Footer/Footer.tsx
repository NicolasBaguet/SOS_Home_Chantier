import { Link } from "react-router";

import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLocationDot,
	faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<footer id="contact">
			<div className="links">
				<div className="link">
					<div>
						<FontAwesomeIcon icon={faLocationDot} />
						<br />
						56350 Rodon
					</div>
				</div>
				<div className="link">
					<Link to="mailto:soshomechantier@gmail.com">
						<FontAwesomeIcon icon={faEnvelope} />
						soshomechantier@gmail.com
					</Link>
				</div>
				<div className="link">
					<Link to="tel:+33668986044">
						<FontAwesomeIcon icon={faMobileScreenButton} />
						06.68.98.60.44
					</Link>
				</div>
				<div className="link">
					<Link to="/mentions">Mentions légales</Link>
				</div>
			</div>
			<p>© 2025 SOS Home Chantier. Tous droits réservés.</p>
		</footer>
	);
}
export default Footer;
