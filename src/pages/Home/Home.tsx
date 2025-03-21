import "./Home.scss";

function Home() {
	return (
		<div className="home">
			<section className="hero">
				<div className="backgroundImg">
					<div className="filterblack">
						<h2>Un temps pour être bien chez soi</h2>
					</div>
				</div>
			</section>
			<div className="citation">
				<h2 className="citationTxt">
					« L’architecture est le jeu savant, correct et magnifique des formes
					assemblées dans la lumière ! »
				</h2>
				<h2 className="citationAuthor">Le Corbusier</h2>
			</div>
			<section className="content">
				<h3>Mon objectif</h3>
				<div className="container">
					<div className="serviceA">
						<div className="serviceImg">
							<img src="/plan_2.jpg" alt="dessin ou logo" />
						</div>
						<div className="serviceTxt">
							<p>
								Mon objectif, que vous vous sentiez bien dans un nouveau chez
								vous sans bousculer vos repères.
							</p>
							<p>
								D’imaginer ensemble, selon vos besoins, des espaces fonctionnels
								et esthétiques où l'énergie circule librement, pour créer des
								intérieurs qui reflètent votre personnalité et votre style de
								vie, où chaque objet trouve sa place et chaque place à son objet
								dans un équilibre parfait.
							</p>
							<p>
								Chaque détail compte pour concevoir un intérieur en harmonie
								avec vos aspirations profondes. Des aménagements pensés pour
								nourrir votre esprit et apaiser votre cœur.
							</p>
						</div>
					</div>
				</div>
				<h3>Mes convictions</h3>
				<div className="container">
					<div className="serviceB">
						<div className="serviceTxt">
							<ul>
								<li>Penser votre projet</li>
								<li>
									C’est apprendre à vous connaître grâce à un dialogue ouvert et
									franc
								</li>
								<li>C’est m’imprégner du lieu pour en déceler le potentiel</li>
								<li>C’est prendre le temps qu’il faut pour ne pas en perdre</li>
							</ul>
						</div>
						<div className="serviceImg">
							<img src="/plan_2.jpg" alt="dessin ou logo" />
						</div>
					</div>
				</div>
				<h3>Créer votre projet</h3>
				<div className="container">
					<div className="serviceA">
						<div className="serviceImg">
							<img src="/plan_2.jpg" alt="dessin ou logo" />
						</div>
						<div className="serviceTxt">
							<ul>
								<li>
									C’est imaginer une nouvelle histoire qui fait sens pour vous
									et votre lieu avec audace et originalité grâce à des solutions
									sur-mesure et innovantes
								</li>
								<li>C’est vous offrir un interlocuteur unique et agile</li>
							</ul>
						</div>
					</div>
				</div>
				<h3>Vous accompagner</h3>
				<div className="container">
					<div className="serviceB">
						<div className="serviceTxt">
							<ul>
								<li>
									C’est vous mettre au cœur du processus en vous expliquant ma
									démarche
								</li>
								<li>
									C’est faire évoluer vos espaces quand vos besoins changeront
								</li>
							</ul>
						</div>
						<div className="serviceImg">
							<img src="/plan_2.jpg" alt="dessin ou logo" />
						</div>
					</div>
				</div>
				<h3>Mon engagement, votre satisfaction</h3>
				<div className="container">
					<div className="serviceA">
						<div className="serviceImg">
							<img src="/plan_2.jpg" alt="dessin ou logo" />
						</div>
						<div className="serviceTxt">
							<p>
								Pour moi, un projet n'est réussi que lorsqu'il incarne
								parfaitement vos désirs. Je mets donc tout mon savoir-faire et
								ma passion au service de votre vision, pour créer un espace qui
								vous ressemble et dans lequel vous vous sentirez pleinement chez
								vous.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
