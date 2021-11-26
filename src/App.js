
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import About from './component/About/About';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Footer from './component/Footer/Footer';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import MyOrders from './component/MyOrders/MyOrders';
import AddPackage from './component/AddPackage/AddPackage';
import TourPackes from './component/TourPackes/TourPackes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tourPackages">
            <TourPackes></TourPackes>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/placeOrder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/addPackage">
            <AddPackage></AddPackage>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
