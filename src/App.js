import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shoppage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
