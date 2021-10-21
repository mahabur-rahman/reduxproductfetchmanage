// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// sass
import "./style.scss";
// react router dom 👍
import { Switch, Route, Redirect } from "react-router-dom";
// components 👍
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductListing} />
        <Route exact path="/product/:productId" component={ProductDetail} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
