{/* <div id = "parent">
    <div id = "child1">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id = "child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */}


// Here we have craeted a new element using React.createElement and it accepts 3 arguments: 1). what to create 2). Inside this object we can provide attributes to tag 3). what to write inside inside element.
const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"child1"}, [React.createElement("h1", {}, "I am an h1 tag Inside a child1"), React.createElement("h2", {}, "I am an h2 tag Inside a child1")]), React.createElement("div", {id:"child2"}, [React.createElement("h1", {}, "I am an h1 tag Inside a child2"), React.createElement("h2", {}, "I am an h2 tag Inside a child2")])]);

// Here we are using ReactDOM because here we wan to show this on browser for that we need to use ReactDOM.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Here we are using render method which will render our heading element inside root.
root.render(parent);
