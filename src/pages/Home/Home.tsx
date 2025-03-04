import "./Home.scss";
import services from "../../../data/services.json" with { type: "json" };
import ratesMessage from "../../../data/rate.json" with { type: "json" };
import { Link } from "react-router-dom";

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
					{services.map((service) => (
						<Link key={service.title} to={`/services/${service.slug}`}>
							<div className="service">
								<div className="serviceImg">
									<img src={service.img} alt="dessin ou logo" />
								</div>
								<div className="serviceTxt">
									<h4>{service.title}</h4>
									<p>{service.subtitle}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
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
		</>
	);
}

export default Home;
