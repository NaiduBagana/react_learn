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
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(parent);
