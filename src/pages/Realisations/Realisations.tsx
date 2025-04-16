import "./Realisations.scss";
import Carousel from "../../components/Carousel/Carousel";
import photosLions from "../../../data/photosLions.json" with { type: "json" };
import photosAllaire from "../../../data/photosAllaire.json" with {
	type: "json",
};
import photosDore from "../../../data/photosMontDore.json" with {
	type: "json",
};
import Nav from "../../components/Nav/Nav";

function Realisations() {
	return (
		<div className="realisations">
			<section className="hero">
				<div className="backgroundImg">
					<div className="filterblack">
						<h2>Transformer vos rêves en réalité</h2>
					</div>
				</div>
			</section>
			<Nav />
			<div className="citation">
				<h2 className="citationTxt">
					« Les détails ne sont pas les détails. Ils font le design. »
				</h2>
				<h2 className="citationAuthor">Charles Eames</h2>
			</div>
			<section className="content">
				<h3>Mes Realisations</h3>
				<div className="container">
					<div className="service">
						<div className="serviceA">
							<div className="serviceImg">
								<Carousel images={photosLions} />
							</div>
							<div className="serviceTxt">
								<h4>Pub The Lions</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempora recusandae deserunt iusto atque reprehenderit suscipit
									sed ipsa? Incidunt saepe accusantium aspernatur ducimus,
									distinctio iusto temporibus cupiditate, non reprehenderit,
									corrupti soluta placeat consequuntur ullam quaerat ad tenetur
									velit eos ab. Quo earum aperiam et enim animi nihil eligendi
									quasi nesciunt error repellendus? Sed libero deleniti ad illo
									vitae corrupti iste fugiat hic aut! Amet minima quo commodi,
									quia placeat neque? Rerum quod a earum unde non iste debitis,
									incidunt numquam molestias excepturi.
								</p>
								<p>
									À la suite de ce rendez-vous, nous pourrons établir un contrat
									ajusté à vos besoins.
								</p>
							</div>
						</div>
						<div className="serviceRate">
							<h4>Jean-Pierre B.</h4>
							<p>
								Nous avons fait appel à Stéphanie BAGUET pour la rénovation de
								l’agencement professionnel du Pub THE LIONS.
							</p>
							<p>
								{" "}
								Les travaux ont consisté, dans un premier temps, à mettre à nu
								le local par la dépose totale de l’agencement en place.{" "}
							</p>
							<p>
								Le travail de Stéphanie a consisté à créer des espaces et
								aménager ceux-ci dans un style de Pub Anglais. Les espaces ont
								été aménagés avec plusieurs style de décoration – c’est ainsi
								qu’il a été réalisé des espaces avec des matériaux différents –
								murs en briquettes, papiers peints murs et plafonds, menuiseries
								(cimaises, moulures, espace cheminés) pour la partie clientèle
								et création d’un bar pour la partie professionnelle.{" "}
							</p>
							<p>
								Les sols ont été parquetés. La partie luminaire n’a pas été
								oublié puisqu’il a été réalisé un ensemble harmonieux
								d’éclairage feutré créant une atmosphère conviviale. Avec
								Stéphanie, nous avons donc réussi à recréer l’atmosphère d’un
								Pub Anglais dans le pur style Anglo-Irlandais.{" "}
							</p>
							<p>
								L’ensemble est tout à fait réussi. Stéphanie a su être à
								l’écoute et a compris notre demande – plusieurs projets de
								décoration et de style ont d’abord été proposés nous laissant le
								choix du style et de l’atmosphère que nous souhaitions créer.
								Merci
							</p>
						</div>
					</div>
					<div className="service">
						<div className="serviceB">
							<div className="serviceTxt">
								<h4>2-DEUXIEME RENCONTRE</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempora recusandae deserunt iusto atque reprehenderit suscipit
									sed ipsa? Incidunt saepe accusantium aspernatur ducimus,
									distinctio iusto temporibus cupiditate, non reprehenderit,
									corrupti soluta placeat consequuntur ullam quaerat ad tenetur
									velit eos ab. Quo earum aperiam et enim animi nihil eligendi
									quasi nesciunt error repellendus? Sed libero deleniti ad illo
									vitae corrupti iste fugiat hic aut! Amet minima quo commodi,
									quia placeat neque? Rerum quod a earum unde non iste debitis,
									incidunt numquam molestias excepturi.
								</p>
							</div>
							<div className="serviceImg">
								<Carousel images={photosDore} />
							</div>
						</div>
						<div className="serviceRate">
							<h4>Jean-Louis D.</h4>
							<p>
								Nous te remercions pour le pré-projet que tu as réalisé en vue
								de la transformation de la cuisine et la salle de bain. Il nous
								a permis d’élaborer de façon détaillé avec le constructeur
								l’aménagement et l'équipement des deux pièces. Le résultat qui a
								donné lieu à une labellisation "Meublé de Tourisme 3 étoiles"
								est apprécié par les locataires qui n’hésitent pas à revenir.
							</p>
						</div>
					</div>
					<div className="service">
						<div className="serviceA">
							<div className="serviceImg">
								<Carousel images={photosAllaire} />
							</div>
							<div className="serviceTxt">
								<h4>3-TROISIEME RENCONTRE</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempora recusandae deserunt iusto atque reprehenderit suscipit
									sed ipsa? Incidunt saepe accusantium aspernatur ducimus,
									distinctio iusto temporibus cupiditate, non reprehenderit,
									corrupti soluta placeat consequuntur ullam quaerat ad tenetur
									velit eos ab. Quo earum aperiam et enim animi nihil eligendi
									quasi nesciunt error repellendus? Sed libero deleniti ad illo
									vitae corrupti iste fugiat hic aut! Amet minima quo commodi,
									quia placeat neque? Rerum quod a earum unde non iste debitis,
									incidunt numquam molestias excepturi.
								</p>
							</div>
						</div>
						<div className="serviceRate">
							<h4>Jean-Louis D.</h4>
							<p>
								Nous te remercions pour le pré-projet que tu as réalisé en vue
								de la transformation de la cuisine et la salle de bain. Il nous
								a permis d’élaborer de façon détaillé avec le constructeur
								l’aménagement et l'équipement des deux pièces. Le résultat qui a
								donné lieu à une labellisation "Meublé de Tourisme 3 étoiles"
								est apprécié par les locataires qui n’hésitent pas à revenir.
							</p>
						</div>
					</div>
					<div className="service">
						<div className="serviceB">
							<div className="serviceTxt">
								<h4>4-QUATRIEME RENCONTRE</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempora recusandae deserunt iusto atque reprehenderit suscipit
									sed ipsa? Incidunt saepe accusantium aspernatur ducimus,
									distinctio iusto temporibus cupiditate, non reprehenderit,
									corrupti soluta placeat consequuntur ullam quaerat ad tenetur
									velit eos ab. Quo earum aperiam et enim animi nihil eligendi
									quasi nesciunt error repellendus? Sed libero deleniti ad illo
									vitae corrupti iste fugiat hic aut! Amet minima quo commodi,
									quia placeat neque? Rerum quod a earum unde non iste debitis,
									incidunt numquam molestias excepturi.
								</p>
							</div>
							<div className="serviceImg">
								<Carousel images={photosDore} />
							</div>
						</div>
						<div className="serviceRate">
							<h4>Jean-Louis D.</h4>
							<p>
								Nous te remercions pour le pré-projet que tu as réalisé en vue
								de la transformation de la cuisine et la salle de bain. Il nous
								a permis d’élaborer de façon détaillé avec le constructeur
								l’aménagement et l'équipement des deux pièces. Le résultat qui a
								donné lieu à une labellisation "Meublé de Tourisme 3 étoiles"
								est apprécié par les locataires qui n’hésitent pas à revenir.
							</p>
						</div>
					</div>
					<div className="service">
						<div className="serviceA">
							<div className="serviceImg">
								<Carousel images={photosLions} />
							</div>
							<div className="serviceTxt">
								<h4>5-CINQUIEME RENCONTRE</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempora recusandae deserunt iusto atque reprehenderit suscipit
									sed ipsa? Incidunt saepe accusantium aspernatur ducimus,
									distinctio iusto temporibus cupiditate, non reprehenderit,
									corrupti soluta placeat consequuntur ullam quaerat ad tenetur
									velit eos ab. Quo earum aperiam et enim animi nihil eligendi
									quasi nesciunt error repellendus? Sed libero deleniti ad illo
									vitae corrupti iste fugiat hic aut! Amet minima quo commodi,
									quia placeat neque? Rerum quod a earum unde non iste debitis,
									incidunt numquam molestias excepturi.
								</p>
							</div>
						</div>
						<div className="serviceRate">
							<h4>Jean-Louis D.</h4>
							<p>
								Nous te remercions pour le pré-projet que tu as réalisé en vue
								de la transformation de la cuisine et la salle de bain. Il nous
								a permis d’élaborer de façon détaillé avec le constructeur
								l’aménagement et l'équipement des deux pièces. Le résultat qui a
								donné lieu à une labellisation "Meublé de Tourisme 3 étoiles"
								est apprécié par les locataires qui n’hésitent pas à revenir.
							</p>
						</div>
					</div>
					<div className="service">
						<div className="serviceB">
							<div className="serviceTxt">
								<h4>6-SIXIEME RENCONTRE</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempora recusandae deserunt iusto atque reprehenderit suscipit
									sed ipsa? Incidunt saepe accusantium aspernatur ducimus,
									distinctio iusto temporibus cupiditate, non reprehenderit,
									corrupti soluta placeat consequuntur ullam quaerat ad tenetur
									velit eos ab. Quo earum aperiam et enim animi nihil eligendi
									quasi nesciunt error repellendus? Sed libero deleniti ad illo
									vitae corrupti iste fugiat hic aut! Amet minima quo commodi,
									quia placeat neque? Rerum quod a earum unde non iste debitis,
									incidunt numquam molestias excepturi.
								</p>
							</div>
							<div className="serviceImg">
								<Carousel images={photosDore} />
							</div>
						</div>
						<div className="serviceRate">
							<h4>Jean-Louis D.</h4>
							<p>
								Nous te remercions pour le pré-projet que tu as réalisé en vue
								de la transformation de la cuisine et la salle de bain. Il nous
								a permis d’élaborer de façon détaillé avec le constructeur
								l’aménagement et l'équipement des deux pièces. Le résultat qui a
								donné lieu à une labellisation "Meublé de Tourisme 3 étoiles"
								est apprécié par les locataires qui n’hésitent pas à revenir.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Realisations;
