import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Nav from './components/Nav/Nav';
import {Home} from './pages/Home';
import {About} from './pages/About';

const App = () => {
  const title = "DevExtreme Components Test App!!";
  const links = [
      {link: "/", name: "Главная", exact: true,},
      {link: "/about", name: "About", exact: true,},
  ];

  return (
    <BrowserRouter basename="/">
      <div className="App">
        <div className="container">
          <Nav title={title} links={links} />
        </div>
        <div className="container App pt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter> 
  );
}

export default App;
