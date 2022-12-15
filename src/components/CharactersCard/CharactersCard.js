import React from 'react';
import { Link } from 'react-router-dom';
import './CharactersCard.css';
import PropTypes from 'prop-types';


const CharactersCard = ({ name, imageUrl, id, nickname}) => {
  return (
    <div className='characters-card'>
      <Link to ={`/details/${id}`}>
        <img className='character-poster' id={id} src={imageUrl} alt={`${name} name`}></img>
        <p className='name'>{nickname}</p>
      </Link>
    </div>
  )
}

export default CharactersCard;

CharactersCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.number
}