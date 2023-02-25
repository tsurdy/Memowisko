import React from "react";

const Memes = (props) => {
  /* Przetwarzanie memów jako lista elementów */
  const cards = props.memes.map((meme) => (
    <li className={"list__item"} key={meme.id}>
      <h2>{meme.name}</h2>
      <img src={meme.image} alt="meme" />
      {/*  button 'gwiazdki', gwiazdka rysowana za pomocą svg dla mozliwości zmiany wypełnienia */}
      <div className="star">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-100 -105 200 190"
          /*  wybór wypełnienia 'gwiazdki ' w zalezności czy ulubiony czy nie */
          className={meme.favorite ? "svg--favorite" : "svg"}
          onClick={() => props.handleFavoriteClick(meme.id)}
        >
          <g id="Star" stroke="red">
            <path d="m0-100l22.4514 69.0983 72.6543 0-58.7781 42.7051 22.4509 69.0983-58.7785-42.7051-58.7785 42.7051 22.4509-69.0983-58.7781-42.7051 72.6543 0z" />
          </g>
        </svg>
      </div>

      {/*  obsługa przycisków like i dislike */}
      <div className={"button__container"}>
        <button
          className={"button button--like"}
          onClick={() => props.handleLike(meme.id)}
        >
          Like: {meme.likes}
        </button>
        <button
          className={"button button--dislike"}
          onClick={() => props.handleDislike(meme.id)}
        >
          Dislike: {meme.dislikes}
        </button>
      </div>
    </li>
  ));
  //zwrócenie listy memów 
  return <ul className="list">{cards}</ul>;
};

export default Memes;
