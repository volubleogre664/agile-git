"use strict";

const CreateRepo = require("./pages/CreateRepo");
const Home = require("./pages/Home");
const {
  useSlice: { useUtils },
} = require("./hooks");

function App() {
  const [tab, setTab] = React.useState("home");
  const [utils, dispatchUtils] = useUtils();

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

  return (
    <div className="app">
      <>
        <div className={`app__overlay ${utils.isOverlay && "active"}`}></div>
        {getPageToLoad(tab)}
      </>
    </div>
  );
}

module.exports = App;
