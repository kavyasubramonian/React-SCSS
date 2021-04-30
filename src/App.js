import { BrowserRouter as Router  } from 'react-router-dom';
import HomePage from '../src/pages/homepage/homepage.component'
import { Route } from "react-router";
import FrozenYogurt from '../src/components/toberoutedtocomponents/FrozenYogurt';

function App() {
  return (
    //exact(for main page): should be "localhost:3000" ""
    <Router>
      <Route exact path="/" component={HomePage}/> 
      <Route exact path="/frozenYogurt" component={FrozenYogurt}/> 
    </Router>
  );
}


export default App;
