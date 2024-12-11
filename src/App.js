import React from "react";
import Navbar from "./Navbars";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Navbar />
        

        <Switch>
          <div style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        {/* <h1>Welcome to Manohar Mall!</h1>
             <p>This is a sample application to demonstrate a responsive navbar.</p>  */}
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
