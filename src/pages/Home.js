"use strict";

const Header = require("../components/Header");

function Home({ tabClicked }) {
  return (
    <div className="home">
      <h1>Welcome to the home page bro</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => tabClicked("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => tabClicked("CREATE_REPO")}>
              Craete Repo
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

module.exports = Home;
