import React, {useContext} from 'react';
import { createUseStyles } from 'react-jss';
import { SaladContext } from './SaladMaker';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: 50,
    '& li': {
      width: 100
    }
  },
  wrapper: {
    borderTop: '#ccc solid 1px',
    display: 'flex',
    padding: 25,
  }
});



const SaladSummary = () => {
  const classes = useStyles();
  const {salad} = useContext(SaladContext);
  return (
    <div className={classes.wrapper}>
      <h2>Your salad</h2>
      <ul className={classes.list}>
        {salad.map((singleSalad)=> {
          return(
            <li key={singleSalad.id}>
              {singleSalad.name}
              {singleSalad.image}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SaladSummary;
