import "./Home.scss";

function Home() {
	return (
		<>
			<section className="hero">
				<div className="backgroundImg">
					<div className="filterblack">
						<h2>
							Phrase d'accroche à l'entrée du site, avec photo en arrière plan
						</h2>
					</div>
				</div>
			</section>
			<section className="content">
				<h3>Nos Services</h3>
				<div className="container">
					<div className="service">
						<img src="#" alt="dessin ou logo" />
						<h4>Agence</h4>
						<p>Sub titre texte</p>
					</div>
					<div className="service">
						<img src="#" alt="dessin ou logo" />
						<h4>Particulier A</h4>
						<p>Sub titre texte</p>
					</div>
					<div className="service">
						<img src="#" alt="dessin ou logo" />
						<h4>Particulier B</h4>
						<p>Sub titre texte</p>
					</div>
				</div>
			</section>
			<section className="rates">
				<h3>Nos avis</h3>
				<div className="container">
					<div className="rate">
						<h4>Nom</h4>
						<p>Texte</p>
					</div>
					<div className="rate">
						<h4>Nom</h4>
						<p>Texte</p>
					</div>
					<div className="rate">
						<h4>Nom</h4>
						<p>Texte</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
