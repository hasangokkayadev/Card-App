import "./Card.css";

const Card = ({title, par, lesson, index}) => (
    <div className="Card">
        <h6>{title}</h6>
        <b>{index}</b>
        <p>{par}</p>
        {lesson > 20 && index === 0 && <div>İleri düzey</div>}
        <button>Devamı</button>
    </div>
);

export default Card;/*App.js'e gidip orada import edersek kullanabiliriz...*/