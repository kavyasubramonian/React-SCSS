import { BrowserRouter as Router  } from 'react-router-dom';
import HomePage from '../src/pages/homepage/homepage.component'
import { Route } from "react-router";
import FrozenYogurt from '../src/components/toberoutedtocomponents/FrozenYogurt';
import SignIn from '../src/components/sign-in/SignIn';
import SignUp from '../src/components/sign-up/SignUp';

function App() {
  return (
    //exact(for main page): should be "localhost:3000" ""
    <Router>
      <Route exact path="/" component={HomePage}/> 
      <Route path="/frozenYogurt" component={FrozenYogurt}/> 
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
    </Router>
  );
}


export default App;
