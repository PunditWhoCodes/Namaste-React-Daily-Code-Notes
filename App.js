import React from "react";
import ReactDOM from "react-dom";

/*
*-Header
* -Logo
* -NavBar
*-Body
* -SearchBar
* -Cards
* -Footer
*/

// React.createElement() => It will not create HTML code but it will create Object.

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste Everyone..."
);

// JSX => Babel will transpile it to React.createElement => React JS Object => HTML element

const JsxHeading = () => <h1 id="heading">Namaste Everyone using JSX</h1>;

const HeadingComponent = () => {
  return <h1>Namaste Everyone using Functional Component</h1>;
};

const HeadingComponent2 = () => (
  <>
    <JsxHeading />
    <h1>Namaste Everyone using Functional Component</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);
