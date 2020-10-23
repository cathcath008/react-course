import React, { useContext } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import NavBar from './navbar';
import routes from './config/routes';
//import { Home, Profile, Contact } from './pages'; //cara lain untuk import file selain cara yg di bawah
// import Home from './pages/home';
// import Contact from './pages/contact';
// import Profile from './pages/profile';

//DENGAN PRIVATE ROUTE

const isUserAuthenticated = false;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserAuthenticated) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

const themes = {
  light: {
    foreground: '#0000000',
    background: '#eeeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
const ThemeContext = React.createContext(themes.dark);

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <button
        type="button"
        style={{ background: theme.background, color: theme.foreground }}
      >
        I am styled by theme context!
      </button>
    </>
  );
};

const App = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <BrowserRouter>
        <NavBar />
        <ThemedButton />
        <Switch>
          {routes.map((route) => {
            if (route.isPublic) {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            }
            return (
              <PrivateRoute
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

//TANPA PRIVATE ROUTE
// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <Switch>
//           {Routes.map((route) => {
//             return (
//               <Route
//                 path={route.path}
//                 component={route.component}
//                 key={route.path}
//               />
//             );
//           })}

//           {/* <Route path="/profile" component={Profile} key="/profile" />
//         <Route path="/contact" component={Contact} key="/contact" />
//         <Route path="/" component={Home} key="/" /> */}
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
// };

export default App;
