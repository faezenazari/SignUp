import './App.css';
import SignUp from './Components/SignUp';
import LoginComponent from './Components/LoginComponent';
import { Route , Switch, Redirect } from 'react-router-dom';
function App() {
  return (

    <div className='App'> 
    <Switch>
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Redirect from = "/" to="/signup" ></Redirect>

    </Switch>
    </div>
   
  );
}

export default App;
