import React from "react";
import './DetailsCard.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DetailsCard = ({ characters, addFavoriteCharacter, id }) => {
  window.scroll(0,0);
  const singleCharacter = characters.find(character => parseInt(id) === character.id)
  return (
    <>
      <div className='details-card'>
        <img className='character-poster' src={singleCharacter.image} alt={`${singleCharacter.name} information`}/>
        <div className="info-container">
          <p className='details'>{singleCharacter.character}</p>
          <p className='details'>Nickname: {singleCharacter.nickname}</p>
          <p className='details'>{singleCharacter.character} is {singleCharacter.hogwartsStudent ? 'a hogwarts student.' : 'not a hogwarts student.'}</p>
          <p className='details'>{singleCharacter.character}'s house is {singleCharacter.hogwartsHouse}.</p>
          <p className='details'>This character is interpreted by {singleCharacter.interpretedBy}.</p>
          <p className='details'>{singleCharacter.child ? singleCharacter.child.join(' and ') : ' '}</p> 
        </div>
      </div>
      <div className='goback-fav'>
        <Link to ='/'>
          <button className="go-back">🪄 GO BACK 🪄</button>
        </Link>
        <Link to ='/favorites'>
          <button className='add-favorite' onClick={() => addFavoriteCharacter(singleCharacter)}> 🪄 ADD FAVORITES 🪄 </button>
        </Link>
        <Link to='/favorites'>
          <button className='favorites' >Favorites</button>
        </Link>
      </div>
    </>
  )
}

export default DetailsCard

DetailsCard.propTypes = {
  characters : PropTypes.array,
  addFavoriteCharacter : PropTypes.func,
  id : PropTypes.string
}