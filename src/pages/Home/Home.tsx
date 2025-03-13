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
				<h2 className="citationTxt">
					« L’architecture est le jeu savant, correct et magnifique des formes
					assemblées dans la lumière ! »
				</h2>
				<h2 className="citationAuthor">Le Corbusier</h2>
			</div>
			<section className="content">
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
