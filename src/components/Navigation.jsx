import React, {useContext} from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from './user/User';

const useStyles = createUseStyles({
  wrapper : {
    textAlign: 'right',
    borderBottom: '1px solid #ccc',
    padding: [10,15]
   
  }
})

const Navigation = () => {
  
  const user = useContext(UserContext)
  const classes = useStyles();
  return (
    <div className= {classes.wrapper}>
      <p>Welcome, {user.name}</p>
    </div>
  )
}

export default Navigation;
