import React, { useState } from "react";
import { Cards } from "./cardsDB"; 
import "./search.css";
import { Link, useNavigate } from "react-router-dom";

const CardList = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredCards = Cards.filter((item) =>
    search === "" ||
    item.brand.toLowerCase().includes(search.toLowerCase()) ||
    item.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="inputBtn">
        <input
          type="text"
          placeholder="Qidiruv..."
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={"/"}>
          <button id="searchX">X</button>
        </Link>
      </div>

      <div className="CardList">
                  {
                      Cards.map((card) => (
                        <div className="CardList">
                        {
                          filteredCards.map((card) => (
                            <div key={card.id} className="card">
                              <div className="wish-icon" onClick={() => dispatch(addToWish(card))}>
                                ❤️
                              </div>
                              <img src={card.avatar1} alt={card.brand} />
                              <h2>{card.brand}</h2>
                              <p>{card.model}</p>
                              <p>{card.price}</p>
                              <p>{card.storage}</p>
                              <div className="card-buttons">
                                <button className="view-btn" onClick={() => navigate(`/card/${card.id}`)}>View Detail</button>
                                <button className="cart-btn" onClick={() => dispatch(addToCart(card))}>Add to Cart</button>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                      
                      
                      
                      ))
                  }
              </div>
    </>
  );
};

export default CardList;
