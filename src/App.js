"use strict";

const CreateRepo = require("./pages/CreateRepo");
const Home = require("./pages/Home");

function App() {
  const [tab, setTab] = React.useState("home");

  const tabClicked = (__tab) => setTab(__tab);

  const getPageToLoad = (pageName) => {
    switch (pageName) {
      case "CREATE_REPO": {
        return <CreateRepo tabClicked={tabClicked} />;
      }

      default: {
        return <Home tabClicked={tabClicked} />;
      }
    }
  };

  return <div className="app">{getPageToLoad(tab)}</div>;
}

module.exports = App;
