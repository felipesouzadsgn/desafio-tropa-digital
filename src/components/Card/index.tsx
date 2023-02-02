import "./styles.scss";

interface CardProps {
  time: number;
  img: string;
  title: string;
  description: string;
}

export function Card({ time, img, title, description }: CardProps) {
  return (
    <div className="card">
      <div className="card__container">
        <span className="card__time">{time}min atrás</span>
        <div className="card__img">
          <img src={img} alt={title} />
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}
