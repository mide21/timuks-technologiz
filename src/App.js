import React from 'react';
import "animate.css/animate.min.css";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/pages/Home/Home';
import ApplicationForm from './containers/pages/ApplicationForm/ApplicationForm';
import Services from './containers/pages/Services/Services';
import About from './containers/pages/About/About';
import Contact from './containers/pages/Contact/Contact';
import Page404 from './containers/pages/Page404/Page404';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/application-form" component={ApplicationForm} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
