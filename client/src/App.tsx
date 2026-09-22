import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Teams from "./pages/Teams";
import Pricing from "./pages/Pricing";
import Changelog from "./pages/Changelog";

export default function App() {
  return <Switch><Route path="/" component={Home} /><Route path="/product" component={Product} /><Route path="/teams" component={Teams} /><Route path="/pricing" component={Pricing} /><Route path="/changelog" component={Changelog} /><Route component={Home} /></Switch>;
}
