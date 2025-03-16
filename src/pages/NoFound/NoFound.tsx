import "./NoFound.scss";

function NoFound() {
	return (
		<div className="noFound">
			<section className="hero">
				<div className="backgroundImg">
					<div className="filterblack">
						<h2>Un temps pour être bien chez soi</h2>
					</div>
				</div>
			</section>
			<div className="citation">
				<h2 className="citationTxt">
					« La simplicité est la clé de toute véritable élégance. »
				</h2>
				<h2 className="citationAuthor">Coco Chanel</h2>
			</div>
			<h3>404 Page non trouvée</h3>
			<p>La page actuelle n'existe pas.</p>
		</div>
	);
}

export default NoFound;
