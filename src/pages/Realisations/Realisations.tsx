import "./Realisations.scss";
import Carousel from "../../components/Carousel/Carousel";
import photosLions from "../../../data/photosLions.json" with { type: "json" };
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
								<Carousel images={photosLions} />
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
