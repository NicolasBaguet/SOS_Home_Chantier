import "./Home.scss";
import ratesMessage from "../../../data/rate.json" with { type: "json" };

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
				<h3 className="citationTxt">
					« L’architecture est le jeu savant, correct et magnifique des formes
					assemblées dans la lumière ! »
				</h3>
				<h3 className="citationAuthor">Le Corbusier</h3>
			</div>
			<section className="rates">
				<h3>Nos avis</h3>
				<div className="container">
					{ratesMessage.map((message) => (
						<div key={message.name} className="rate">
							<h4>{message.name}</h4>
							<p>{message.content}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default Home;
