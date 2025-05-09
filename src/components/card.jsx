import { Link, useParams } from "react-router-dom";
import { Cards } from "./cardsDB"
// import { Link } from "react-router-dom";
import "./card.css"


function Card(){
    const { id } = useParams()

    // const selectedCard = Cards.find(card => card.id === parseInt(id))
    const selectedCard = Cards.find(card => card.id === parseInt(id));
    // if (!selectedCard) {
    //     return <h2>Card not found</h2>;
    // }
    return(
        <>
    <div className="Card">
    <div className="cardWrapper">
        <div className="imgmodel">
        <p id="model">{selectedCard.model}</p>
        <img src={selectedCard.avatar1} alt={selectedCard.brand} />
        <h2 id="brand">{selectedCard.brand}</h2>
        <p id="price">{selectedCard.price}</p>
        </div>
        <div className="sborka">
        <p id="storage">{selectedCard.storage}</p>
        <p id="dimensions">Dimensions: {selectedCard.dimensions}</p>
        <p id="faceID">Face ID: {selectedCard.faceID}</p>
        <p id="weight">Weight: {selectedCard.weight}</p>
        <p id="osVersion">OS Version: {selectedCard.osVersion}</p>
        <p id="protection">Protection: {selectedCard.protection}</p>
        </div>
    <Link to={"/"}><button id="searchX">X</button></Link>
    </div>
    </div>
        </>
    )
}

export default Card;