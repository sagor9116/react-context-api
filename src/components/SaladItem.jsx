import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from './user/User';
import { SaladContext } from './SaladMaker';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const useStyle = createUseStyles({
  wrapper: {
    border: 'lightgrey solid 1px',
    margin: 20,
    padding: 25,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 300,
  },

  image: {
    fontSize: 80
  },

  favorite: {
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },

  add: {
    background : 'none',
    border:'none',
    cursor: 'pointer'
  }
})




const SaladItem = ({name,image}) => {

  const classes = useStyle();
  const {setSalad} = useContext(SaladContext);
  const user = useContext(UserContext);
  const favorite = user.favorite.includes(name)

  function updateSaladSummary() {
    setSalad({
      name : name,
      id : uuidv4(),
      image: image
    })
  }

  return (
    <div className={classes.wrapper}>
      <h3>{name}</h3>
      <span className ={classes.favorite} role="img" aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
        {favorite ? '😋' : ''}
      </span>
      <button className = {classes.add} onClick={updateSaladSummary}>
         <span className={classes.image} role="img" aria-label={name}>{image}</span>
      </button>
    </div>
  )
}

export default SaladItem;

SaladItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
