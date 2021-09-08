import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from '../components/LandingPage';
import About from '../components/About';

export default function Routes () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  )
}
