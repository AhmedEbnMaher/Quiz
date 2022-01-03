import LandingPage from './components/landingpage/landingPage.js';
import NewQuiz from './components/newQuiz/newQuiz.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
        <Route exact path="/newquiz">
            <NewQuiz/>
          </Route>  
        <Route path="/">
            <LandingPage />
          </Route>
          <Route exact path="/landing">
            <LandingPage />
          </Route>
           
         </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;
