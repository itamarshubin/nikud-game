import './Card.css';

function Card({image,className}) {
  return (
    <div className={className}>
        <img src={image} alt="card" />
    </div>
  );
}

export default Card;
