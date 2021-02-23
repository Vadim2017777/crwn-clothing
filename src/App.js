import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SigInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signIn" component={SigInAndSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
