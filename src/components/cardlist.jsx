import { useNavigate } from "react-router-dom";

import { Cards } from "./cardsDB.js"
import "./card.css"
import { useDispatch } from "react-redux";
import { addToCart, addToWish } from "../features/cart/cartslice.js";
import { useState } from 'react';


function Cardlist(){
    const navigate = useNavigate()
    const dispatch = useDispatch()


 

    return(
        <>
        <div className="CardList">
            {
                Cards.map((card) => (
                    <div key={card.id} className="card">
                    <div className="wish-icon" onClick={() => dispatch(addToWish(card))}>
                      ❤️
                    </div>
                    <img src={card.avatar1} alt={card.brand} />
                    <h2 id="nnn">{card.brand}</h2>
                    <p id="ppp">{card.model}</p>
                    <p id="ppp">{card.price}</p>
                    <p id="ppp">{card.storage}</p>
                    <div className="card-buttons">
                      <button id="bbb" className="view-btn" onClick={() => navigate(`/card/${card.id}`)}>View Detail</button>
                      <button id="bbb" className="cart-btn" onClick={() => dispatch(addToCart(card))}>Add to Cart</button>
                    </div>
                  </div>
                  
                ))
            }
        </div>
        </>
    )
}

export default Cardlist;