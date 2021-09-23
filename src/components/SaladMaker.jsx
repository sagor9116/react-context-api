import React, {createContext, useReducer} from 'react';
import { createUseStyles } from 'react-jss';
import SaladBuilder from './SaladBuilder';
import SaladSummary from './SaladSummary';

const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center'
  }
})


export const SaladContext = createContext();

function saladReducer(state,item) {
  return [...state, item];
}

const SaladMaker = () => {
  const [salad,setSalad] = useReducer(saladReducer,[]);
  const classes = useStyles();
  return (
    <SaladContext.Provider value ={{salad,setSalad}}>
      <h2 className={classes.wrapper}>
        <span role="img" aria-label="salad"> 🥗 </span>Build your custom salad <span role="img" aria-label="salad"> 🥗 </span>
      </h2>
      <SaladBuilder />
      <SaladSummary />

    </SaladContext.Provider>
  )
}

export default SaladMaker;
