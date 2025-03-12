import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Carousel.scss";

function Carousel({ images }: { images: string[] }) {
	// Liste des images

	// État pour ouvrir/fermer la modal de photos détaillées
	const [isModalOpen, setIsModalOpen] = useState(false);

	// État pour suivre l'index de l'image actuelle
	const [currentIndex, setCurrentIndex] = useState(0);

	// Fonction pour aller à l'image précédente
	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
		);
	};

	// Fonction pour aller à l'image suivante
	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.overflow = "hidden"; // Bloque le scroll
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = "unset"; // Réactive le scroll
	};

	return (
		<div className="carousel">
			<button
				type="button"
				className="chevron chevronLeft"
				onClick={goToPrevious}
			>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<div
				className="carouselImages"
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
					transition: "transform 0.5s ease-in-out",
				}}
			>
				{images.map((image, index) => (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<img
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						src={image}
						// biome-ignore lint/a11y/noRedundantAlt: <explanation>
						alt={`Image ${index + 1}`}
						className={"carouselImage"}
						onClick={openModal}
					/>
				))}
			</div>
			<button type="button" className="chevron chevronRight" onClick={goToNext}>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
			{/* Modal */}
			{isModalOpen && (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div className="modal" onClick={closeModal}>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div className="modalContent" onClick={(e) => e.stopPropagation()}>
						{/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
						<img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
					</div>
				</div>
			)}
		</div>
	);
}
export default Carousel;
