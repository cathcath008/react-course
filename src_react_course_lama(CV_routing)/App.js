import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from './navbar';
import Routes from './config/route';
//import { Home, Profile, Contact } from './pages'; //cara lain untuk import file selain cara yg di bawah
// import Home from './pages/home';
// import Contact from './pages/contact';
// import Profile from './pages/profile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          {Routes.map((route) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}

          {/* <Route path="/profile" component={Profile} key="/profile" />
        <Route path="/contact" component={Contact} key="/contact" />
        <Route path="/" component={Home} key="/" /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
