import React from "react";
import './Favorites.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Favorites = ({ favoriteCharacters, removeFavorite }) => {
  window.scroll(0,0);
  const formatCharacters = favoriteCharacters.map(favoriteCharacter => {
    return (
      <div className='favorite-container' key={favoriteCharacter.id}>
        <img className='character-poster' src={favoriteCharacter.image} alt={`${favoriteCharacter.name} information`}/>
        <div className='favorite-info'>
          <p>{favoriteCharacter.character}</p>
          <p>Nickname: {favoriteCharacter.nickname}</p>
          <p>Is {favoriteCharacter.character} is {favoriteCharacter.hogwartsStudent ? 'a hogwarts student.' : 'not a hogwarts student.'}.</p>
          <p>{favoriteCharacter.character}'s house is {favoriteCharacter.hogwartsHouse}.</p>
          <p>This character is interpreted by {favoriteCharacter.interpretedBy}.</p>
          <p>{favoriteCharacter.child ? favoriteCharacter.child.join(' and ') : ' '}</p> 
          <button className="trash-btn" onClick={() => removeFavorite(favoriteCharacter.id)}>🗑</button>
        </div>
     </div>
    )
  })
  return (
    <>
      {formatCharacters}
      <Link to ='/'>
        <button className='go-back-bttn'>GO BACK</button>
      </Link>
    </>
  )
}

export default Favorites;

Favorites.propTypes = {
  favoriteCharacters: PropTypes.array,
  removeFavorite: PropTypes.func
}