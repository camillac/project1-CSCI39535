import './css/Card.css'

function Card (props) {
    return (
        <div className="card">
          <img className="cardImg" src={props.img} alt="location img" />
          <p className="desc">
            <h3 className="title">{props.title}</h3>
            {props.description}
          </p>
        </div>
    );
}

export default Card;
