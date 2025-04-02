import Nav from "../../components/Nav/Nav";
import "./LegalMentions.scss";

const LegalMentions = () => {
	return (
		<div className="legal-mentions">
			<section className="hero">
				<div className="backgroundImg">
					<div className="filterblack">
						<h2>Un temps pour être bien chez soi</h2>
					</div>
				</div>
			</section>
			<Nav />
			<div className="citation">
				<h2 className="citationTxt">
					« L’architecture est le jeu savant, correct et magnifique des formes
					assemblées dans la lumière ! »
				</h2>
				<h2 className="citationAuthor">Le Corbusier</h2>
			</div>
			<section className="content">
				<div className="grey">
					<h3>Mentions légales</h3>

					<p>
						Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
						dans l'économie numérique, il est précisé aux utilisateurs du site
						l'identité des différents intervenants dans le cadre de sa
						réalisation et de son suivi.
					</p>

					<h4>1. Informations légales</h4>
					<p>
						<strong>Propriétaire du site :</strong> SOS Home Chantier
						<br />
						<strong>Responsable de publication :</strong> Stephanie Baguet
						<br />
						<strong>Numéro de téléphone :</strong> 06.68.98.60.44
						<br />
						<strong>Adresse e-mail :</strong> soshomechantier@gmail.com
						<br />
						<strong>Création du site :</strong> Nicolas Baguet
					</p>

					<h4>2. Hébergement</h4>
					<p>
						<strong>Hébergeur :</strong> Surge <br />
					</p>

					<h4>3. Propriété intellectuelle</h4>
					<p>
						Le contenu du site SOS Home Chantier (textes, images, graphismes,
						logos, livres, etc.) est la propriété exclusive de SOS Home
						Chantier, sauf mention contraire. Toute reproduction, distribution
						ou exploitation du contenu sans autorisation préalable est
						interdite.
					</p>

					<h4>4. Protection des données personnelles</h4>
					<p>
						SOS Home Chantier respecte la vie privée des utilisateurs et
						s'engage à protéger leurs données personnelles.
					</p>

					<h4>5. Responsabilité</h4>
					<p>
						SOS Home Chantier ne pourra être tenu responsable des dommages
						directs ou indirects résultant de l'utilisation du site. Les
						informations contenues sur ce site sont fournies à titre indicatif
						et peuvent être modifiées sans préavis.
					</p>

					<h4>6. Loi applicable</h4>
					<p>
						Les présentes mentions légales sont soumises à la législation
						française. En cas de litige, les tribunaux compétents seront ceux du
						ressort du tribunal de Vannes.
					</p>

					<h4>7. Contact</h4>
					<p>
						Pour toute question ou demande concernant ces mentions légales, vous
						pouvez nous contacter à l'adresse e-mail suivante :
						<a href="mailto:soshomechantier@gmail.com">
							soshomechantier@gmail.com
						</a>
					</p>
				</div>
			</section>
		</div>
	);
};

export default LegalMentions;
