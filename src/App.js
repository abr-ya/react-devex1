import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Nav from './components/Nav/Nav';
import Alert from './components/Alert/Alert';
import Home from './pages/Home';
import Grid1 from './pages/Grid1';
import Grid2 from './pages/Grid2';
import Form from './pages/Form';
import About from './pages/About';
import Button from 'devextreme-react/button';

const App = ({alert, showAlert, hideAlert}) => {
  //console.log(alert);
  //console.log(showAlert);
  //console.log(hideAlert);
  const title = "DevExtreme Components Test App!!";
  const links = [
      {link: "/", name: "Главная", exact: true,},
      {link: "/grid1", name: "Grid1", exact: true,},
      {link: "/grid2", name: "Grid2", exact: true,},
      {link: "/form", name: "Form", exact: true,},
      {link: "/about", name: "About", exact: true,},
  ];
  const columns = [
    { name: "name", title: "Name" },
    { name: "sex", title: "Sex" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" }
  ];
  const rows = [
    { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
    { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
    { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
    { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
    { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
    { sex: "Male", name: "Robert", city: "Las Vegas", car: "Chevrolet Cruze" },
    { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
    { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
    { sex: "Male", name: "Thomas", city: "Rio de Janeiro", car: "Honda Accord" },
    { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
    { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
  ];

  return (
    <BrowserRouter basename="/">
      <div className="App">
        <div className="container">
          <Nav title={title} links={links} />
        </div>
        <div className="container mt-3">
          { alert.display
            ? <Alert alert={alert} hideAlert={hideAlert} />
            : <Button
                text="Кнопка, поднимающая Alert!"
                onClick={() => showAlert('Вот же он, Alert!', 'success')}
              />
          }
        </div>
        <div className="container App pt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/grid1" component={() => (<Grid1 columns={columns} rows={rows} />)} />
            <Route path="/grid2" component={() => (<Grid2 columns={columns} rows={rows} />)} />
            <Route path="/form" component={Form} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter> 
  );
}

export default App;
