function Home() {
	return (
		<>
			<section className="hero">
				<div className="backgroundImg">
					<h2>Phrase d'accroche à l'entrée du site</h2>
				</div>
			</section>
			<section className="content">
				<h3>Nos Services</h3>
				<div className="serviceContainer">
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
			<section className="rate">
				<h3>Nos avis</h3>
				<div className="rateContainer">
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
			<h3>404 Page non trouvée</h3>
			<p>La page actuelle n'existe pas.</p>
		</>
	);
}

export default Home;
