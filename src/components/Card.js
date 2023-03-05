import './css/Card.css'

function Card (props) {
    return (
        <div className="card">
          <img className={props.class} src={props.img} alt={props.title} />
          <div className="desc">
            <h3 className="title">{props.title}</h3>
            <p>
              {props.description}
            </p>
          </div>
        </div>
    );
}

export default Card;
