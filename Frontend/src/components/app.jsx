import React from "react";
import Nav from "./nav.jsx";
import Main from "./main.jsx";
import Product from "./products.jsx";
import Contact from "./contact.jsx";
function App(){
    return(
        <div>
        <div className="container">
        <Nav/>
        <Main/>
        </div>
        <Product/>
        <Contact/>
        </div>

    )
}
export default App;
