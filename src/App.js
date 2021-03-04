import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import OurWork from './pages/OurWork';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
      <Route path="/" exact>
        <AboutUs/>
      </Route>
      <Route path="/work" exact>
        <OurWork/>
      </Route>
      <Route path="/work/:id">
        <MovieDetail/>
      </Route>
      <Route path="/contact">
        <ContactUs/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
