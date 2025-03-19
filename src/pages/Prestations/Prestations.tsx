import "./Prestations.scss";

function Prestations() {
	return (
		<div className="prestations">
			<section className="hero">
				<div className="backgroundImg">
					<div className="filterblack">
						<h2>Des solutions créative pour chaque défi d'espace</h2>
					</div>
				</div>
			</section>
			<div className="citation">
				<h2 className="citationTxt">
					« La simplicité est la clé de toute véritable élégance. »
				</h2>
				<h2 className="citationAuthor">Coco Chanel</h2>
			</div>
			<section className="content">
				<h3>Mes Prestations</h3>
				<div className="container">
					<div className="serviceA">
						<div className="serviceImg">
							<img src="/plan_2.jpg" alt="dessin ou logo" />
						</div>
						<div className="serviceTxt">
							<h4>Première rencontre</h4>
							<p>
								Besoin d'être conseillé ? Que ce soit pour votre résidence
								principale ou secondaire, un investissement immobilier ou une
								vente, Ensemble, nous effectuons un état des lieux détaillé de
								chaque pièce ciblant les points sur lesquels il est nécessaire
								d'intervenir afin d’identifier les étapes de conception et de
								réalisation de votre projet en fonction de vos besoins et vos
								envies. Le diagnostic vous sera envoyé par mail.
							</p>
							<p>
								À la suite de ce rendez-vous, nous pourrons établir un contrat
								ajusté à vos besoins.
							</p>
							<p>
								Le tarif varie de 100 à 500 € en fonction du nombre de pièces.
							</p>
						</div>
					</div>
					<div className="serviceB">
						<div className="serviceTxt">
							<h4>Conseil déco</h4>
							<p>
								Vous avez quelques idées pour réaménager votre intérieur, mais
								vous avez besoin de conseils avisés sur la rénovation que vous
								souhaitez entreprendre. Je prépare pour vous des planches
								d’ambiances, des esquisses et des listes de références de
								matériaux pour vous aider à choisir et mettre en œuvre votre
								projet.
							</p>
							<p>
								Cet audit permet de faire une mise au point générale sur les
								travaux à effectuer. Les coûts des prestataires seront à votre
								charge. Vous pouvez demander un devis après diagnostic pour un
								suivi régulier durant chacune de vos démarches ou pour une
								gestion complète de vos travaux.
							</p>
							<p>
								Sur devis en fonction de la surface du projet. A partir de 500€
								un budget de 280 à 800 € est à prévoir.
							</p>
						</div>
						<div className="serviceImg">
							<img src="/travail_1.jpg" alt="dessin ou logo" />
						</div>
					</div>
					<div className="serviceA">
						<div className="serviceImg">
							<img src="/travail_2.jpg" alt="dessin ou logo" />
						</div>
						<div className="serviceTxt">
							<h4>Projection</h4>
							<p>
								Cette prestation comprend l’élaboration de plans de l’existant
								si besoin, des plans d’implantation, de planches d’ambiance et
								le budget global estimé.
							</p>
							<p>
								 Je vous apporte des solutions d’aménagements en fonction de
								votre cahier des charges et des contraintes techniques avec un
								modèle 3D pour vous projeter plus facilement.
							</p>
							<p>
								Sur devis en fonction de la surface du projet, de 7 à 10% du
								montant des travaux.
							</p>
						</div>
					</div>
					<div className="serviceB">
						<div className="serviceTxt">
							<h4>Home staging</h4>
							<p>
								Besoin d'être accompagné dans votre projet de mise en scène ?
								Que cela soit pour un bien destiné à la location, à la vente ou
								pour une décoration à moindre coût, je vous suis pas à pas, du
								diagnostic à la mise en scène finale en passant par les travaux
								et les achats.
							</p>
							<p>
								Pour un home staging complet, comptez environ 0,2% à 5% du prix
								de vente du bien en fonction du diagnostic. La visite des lieux,
								le désencombrement, le réagencement, les réparations, les achats
								ou la location du mobilier et la mise en valeur finale sont les
								prestations incluses dans cette tarification.
							</p>
						</div>
						<div className="serviceImg">
							<img src="/bureau.jpg" alt="dessin ou logo" />
						</div>
					</div>
					<div className="serviceA">
						<div className="serviceImg">
							<img src="/plan.jpg" alt="dessin ou logo" />
						</div>
						<div className="serviceTxt">
							<h4>Désencombrement</h4>
							<p>
								En simplifiant notre environnement, nous pouvons libérer de
								l'espace dans notre maison tout en la réorganisant et en la
								rangeant. Le désencombrement est le premier pas vers un mode de
								vie minimaliste, mais il peut être difficile de savoir par où
								commencer. à vous débarrasser de l'inutile pour atteindre
								l'essentiel ?
							</p>
							<p>
								Le désencombrement est un processus qui consiste à se
								débarrasser des choses inutiles ou encombrantes dans sa maison
								afin de créer un environnement plus propre, plus organisé et
								plus fonctionnel. Cela implique souvent de trier et de
								catégoriser les objets en fonction de leur utilité, de leur
								valeur sentimentale ou de leur fréquence d'utilisation. Ensuite,
								il convient de prendre des décisions sur ce que l'on souhaite
								garder, donner, vendre ou jeter.
							</p>
						</div>
					</div>
					<div className="serviceB">
						<div className="serviceTxt">
							<h4>Rénovation</h4>
							<p>
								Dans le cas où vous souhaitez mettre en location, ou en vente le
								bien immobilier, nous vous proposons des services de rénovation
								afin de vous apporter le confort d’une prestation complète et
								vous permettre de trouver une locataire ou un acquéreur
								rapidement dans les meilleures.
							</p>
							<ul>
								<li>rebouchage des trous dans les murs</li>
								<li>réparation des poignées de porte</li>
								<li>réparation des interrupteurs, des prises électriques</li>
								<li>remplacement des joints de la salle de bain</li>
								<li>retouches de peinture</li>
								<li>changement des douilles, des ampoules</li>
							</ul>
						</div>
						<div className="serviceImg">
							<img src="/travail_2.jpg" alt="dessin ou logo" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Prestations;
