import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.scss";
import {
	faGears,
	faHandHoldingHeart,
	faHandsPraying,
	faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

function About() {
	return (
		<div className="about">
			<section className="hero">
				<div className="backgroundImg">
					<div className="filterblack">
						<h2>Chaque projet débute par une écoute active</h2>
					</div>
				</div>
			</section>
			<div className="citation">
				<h2 className="citationTxt">
					« Une pièce vide est une histoire qui attend de se produire, et vous
					en êtes l’auteur. »
				</h2>
				<h2 className="citationAuthor">Charlotte Moss</h2>
			</div>
			<section className="content">
				<h3>Mes Valeurs</h3>
				<div className="container">
					<div className="serviceA">
						<div className="serviceImg">
							<FontAwesomeIcon icon={faHandsPraying} />
						</div>
						<div className="serviceTxt">
							<h4>Respect de notre environnement</h4>
							<p>
								Je suis convaincu(e) que le design d'intérieur peut sublimer vos
								espaces tout en respectant notre planète. C'est pourquoi chaque
								projet que je réalise s'inscrit dans une démarche
								écoresponsable.
							</p>
							<p>
								Je privilégie des matériaux durables, recyclés ou recyclables,
								qui allient esthétique et respect de l'environnement. Chaque
								choix est pensé pour créer un équilibre parfait entre élégance
								et durabilité.
							</p>
							<p>
								J'adore redonner vie aux meubles et objets existants. En les
								transformant avec soin, ils deviennent des pièces uniques qui
								racontent une histoire tout en réduisant les déchets. C'est
								aussi une belle façon d'apporter une touche personnelle et
								authentique à votre intérieur.
							</p>
							<p>
								Pour aller plus loin, je mets un point d'honneur à limiter
								l'empreinte écologique de mes chantiers. Cela passe par un tri
								rigoureux des déchets et leur recyclage systématique, afin de
								préserver au mieux notre environnement.
							</p>
						</div>
					</div>
					<div className="serviceB">
						<div className="serviceTxt">
							<h4>L'Amour du Métier</h4>
							<p>
								Un amour profond pour le design se traduit par une attention
								minutieuse portée à chaque détail. J’accorde une importance
								particulière à comprendre pleinement les besoins de mes clients,
								tout en m’engageant dans une quête constante d’innovation et de
								créativité.
							</p>
							<p>
								Mon enthousiasme pour l’optimisation des espaces me pousse à
								rester à la pointe des tendances et des technologies, afin de
								livrer des réalisations uniques qui dépassent les attentes.
							</p>
							<p>
								Chaque projet devient pour moi une occasion précieuse de
								concevoir un espace sur mesure, à la fois esthétique et
								fonctionnel.{" "}
							</p>
							<p>
								Cette passion transparaît dans la satisfaction de mes clients et
								dans la pérennité des intérieurs que je crée, transformant
								chaque lieu en une véritable œuvre d’art vivante.
							</p>
						</div>
						<div className="serviceImg">
							<FontAwesomeIcon icon={faHandHoldingHeart} />
						</div>
					</div>
					<div className="serviceA">
						<div className="serviceImg">
							<FontAwesomeIcon icon={faPeopleArrows} />
						</div>
						<div className="serviceTxt">
							<h4>Écoute des Besoins</h4>
							<p>
								Chaque espace à une histoire unique. C'est pourquoi notre
								processus commence toujours par une écoute attentive de vos
								aspirations. Dès notre première rencontre, je plonge dans
								l'univers de vos désirs, mon objectif est de saisir l'essence de
								votre personnalité, votre style de vie et vos ambitions pour
								votre espace La communication est primordiale pour moi.
							</p>
							<p>
								 Tout au long de votre projet, je maintiens un échange constant
								via des appels téléphoniques, des échanges par e-mail et des
								réunions en personne.
							</p>
							<p>
								Cette approche collaborative garantit que chaque décision
								reflète vos souhaits et que le résultat final dépasse vos
								attentes.
							</p>
						</div>
					</div>
					<div className="serviceB">
						<div className="serviceTxt">
							<h4>L'adaptabilité et l'ingéniosité</h4>
							<p>
								L'adaptabilité et l'ingéniosité sont deux qualités essentielles
								qui forment le socle de l'expertise d'un architecte d'intérieur.
								Ces compétences complémentaires permettent au professionnel de
								relever les défis uniques de chaque projet avec brio. Face à des
								contraintes spatiales, budgétaires ou esthétiques, l'architecte
								d'intérieur puise dans sa capacité d'adaptation pour proposer
								des solutions sur mesure, tout en faisant preuve d'ingéniosité
								pour transformer les obstacles en opportunités créatives.
							</p>
							<p>
								Qu'il s'agisse de repenser l'agencement d'un petit espace pour
								le rendre plus fonctionnel, ou d'intégrer harmonieusement des
								éléments modernes dans un bâtiment historique, ces aptitudes
								combinées lui permettent de créer des intérieurs à la fois
								pratiques, esthétiques et innovants, répondant parfaitement aux
								besoins et aux désirs de ses clients.Le secteur de
								l'architecture d'intérieur évolue rapidement en termes de goûts,
								de styles et de technologies.
							</p>
							<p>
								L'adaptabilité permet aux professionnels de rester compétitifs
								et pertinents en s'ajustant continuellement aux nouvelles
								tendances et aux avancées technologiques.
							</p>
						</div>
						<div className="serviceImg">
							<FontAwesomeIcon icon={faGears} />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
