import React from 'react';
import { createUseStyles } from 'react-jss';
import ingredients from '../ingredients';
import SaladItem from './SaladItem';

const useStyles = createUseStyles({
  wrapper : {
    display: 'flex',
    flexWrap: 'wrap',
    padding: [10, 50],
    justifyContent: 'center',
   
  }
})

const SaladBuilder = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {ingredients.map((ingredient)=> {
        return(
          <SaladItem 
            key = {ingredient.id}
            name = {ingredient.name}
            image = {ingredient.image} 
          />
        )
      })}
    </div>
  )
}

export default SaladBuilder;
