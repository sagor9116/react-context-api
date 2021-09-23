import Navigation from './components/Navigation';
import SaladMaker from './components/SaladMaker';
import UserContext from './components/user/User';

const user = {
  name: 'Sachin',
  favorite: ['apple', 'red wine dressing']
}


function App() {
  return (
    <div>
      <UserContext.Provider value ={user}>
        <Navigation />
        <SaladMaker />
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
