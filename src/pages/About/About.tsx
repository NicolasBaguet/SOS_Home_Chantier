import "./About.scss";

function About() {
	return (
		<div className="about">
			<section className="hero">
				<div className="backgroundImg">
					<div className="filterblack">
						<h2>Un temps pour être bien chez soi</h2>
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
		</div>
	);
}

export default About;
