import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>Jackets Page</h1>
  </div>
)

const SneakersPage = () => (
  <div>
    <h1>Sneakers Page</h1>
  </div>
)

const MensPage = () => (
  <div>
    <h1>Mens Page</h1>
  </div>
)

const WomensPage = () => (
  <div>
    <h1>Womens Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={JacketsPage} />
        <Route path='/shop/sneakers' component={SneakersPage} />
        <Route path='/shop/mens' component={MensPage} />
        <Route path='/shop/womens' component={WomensPage} />
      </Switch>
      
    </div>
  );
}

export default App;
  