import "./Card.css";

const Card = ({title, par, lesson}) => (
    <div className="Card">
        <h6>{title}</h6>
        <p>{par}</p>
        <p>{lesson}</p>
        <button>Devamı</button>
    </div>
);

export default Card;/*App.js'e gidip orada import edersek kullanabiliriz...*/