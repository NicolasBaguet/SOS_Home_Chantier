import Nav from "../../components/Nav/Nav";
import "./NoFound.scss";

function NoFound() {
	return (
		<div className="noFound">
			<section className="hero">
				<div className="backgroundImg">
					<div className="filterblack">
						<h2>Les erreurs sont les portes de la découverte</h2>
					</div>
				</div>
			</section>
			<Nav />
			<div className="citation">
				<h2 className="citationTxt">
					« Une personne qui n'a jamais fait d'erreur n'a jamais rien essayé de
					nouveau. »
				</h2>
				<h2 className="citationAuthor">Albert Einstein</h2>
			</div>
			<div className="content">
				<h3>erreur 404</h3>
				<h4>La page actuelle n'existe pas</h4>
			</div>
		</div>
	);
}

export default NoFound;
