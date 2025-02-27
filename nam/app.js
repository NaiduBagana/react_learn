// const he = React.createElement('h1', {id: "heading"}, 'Hello, world! ab');
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(he);
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello, wohiii! ab")
  )
);
//const jsxx = <h1 id="heading" className="hello "> hi ab what are you doing here</h1>;
const Title = ()=> <h1>This is a title</h1>  ;
const Abcompo = ()=>(
    
   <div className="container">
     <Title />
     <h1 id="heading" className="hello "> hi ab what are you doing here</h1>
     <h2>This is a subheading</h2>
   </div>
);
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

// rootElement.render(parent);
//rootElement.render(jsxx);
rootElement.render(<Abcompo />);
