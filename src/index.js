"use strict";

const App = require("./App");

document.getElementsByTagName("head")[0].innerHTML += `
<link rel="stylesheet" href="./styles/index.css" />
`;

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(<App />);
