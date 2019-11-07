import React from "react";

import SignIn from "./pages/SignIn/signIn"

import MainPage from "./pages/MainPage/mainPage"

import AboutPage from "./pages/AboutPage/index"

import ContactPage from "./pages/ContactPage/index"

import {BrowserRouter, Route, Switch} from "react-router-dom";

function App ()  {
  return (


      <BrowserRouter>


      <Switch>


      <Route path ="/" exact component  ={SignIn} />
      

      <Route path ="/main" exact component  ={MainPage} />


      <Route path ="/about" exact component  ={AboutPage} />

      <Route path ="/contact" exact component  ={ContactPage} />

      <Route path ="/" render={() => <div>404</div>} />

      </Switch>
      


      </BrowserRouter>


  );
}










export default App;
