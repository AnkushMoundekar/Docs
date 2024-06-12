import "./common.css"
function Card(props){
    return (
        <div className="card">
            <img className="card-image" src={props.img} alt="profile picture" />
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-text'>{props.desc}</p>
        </div>
    )
}
export default Card;