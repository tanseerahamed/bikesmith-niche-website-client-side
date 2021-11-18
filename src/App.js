import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AddService from './Pages/Services/AddService/AddService';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Services/Services/Services';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Services/Purchase/Purchase';
import ManageServices from './Pages/Services/ManageServices/ManageServices';
import PurchaseConfirmed from './Pages/Services/PurchaseConfirmed/PurchaseConfirmed';
import Orders from './Pages/Services/Orders/Orders';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/addService'>
            <AddService></AddService>
          </Route>
          <Route path='/manageServices'>
            <ManageServices></ManageServices>
         </Route>
          <PrivateRoute path="/purchase/:_id">
              <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/purchaseConfirmed">
          <PurchaseConfirmed></PurchaseConfirmed>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
