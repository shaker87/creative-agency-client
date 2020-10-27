import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminDashboard from './components/AdminDashboard/AdminDashboard/AdminDashboard';
import AdminServiceList from './components/AdminDashboard/AdminServiceList/AdminServiceList';
import MakeAdmin from './components/AdminDashboard/MakeAdmin/MakeAdmin';
import Dashboard from './components/ClientDashboard/Dashboard/Dashboard';
import Review from './components/ClientDashboard/Review/Review';
import ServiceList from './components/ClientDashboard/ServiceList/ServiceList';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({isSigned:true});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin-service-list">
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>
          
          <PrivateRoute path="/admin-add-service">
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
          <PrivateRoute path="/add-admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          
          <PrivateRoute path="/service-order">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/service-list">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/order-review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/service/:id">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
