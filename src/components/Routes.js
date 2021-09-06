import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}
