import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import NavHeader from './components/NavHeader/NavHeader';
//import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </div>
    </Router>
  );
}