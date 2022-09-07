"use strict";

const Header = require("../components/Header");
const CreateNewRepo = require("../components/CreateNewRepo");
const { useUtils } = require("../utils/useSlice");
const { UTILS } = require("../context/types");

function Home({ tabClicked }) {
  // TODO: Work with this later
  const [repoType, setRepoType] = React.useState("");
  const [, dispatchUtils] = useUtils();

  const buttonClicked = (e) => {
    e.preventDefault();
    console.log("Yeah here");
    dispatchUtils({ type: UTILS, payload: "loadRepo" });
  };

  return (
    <div className="home">
      <Header tabClicked={tabClicked} />

      {/* TODO: Work on the home page and the corresponding components */}
      <main className="home__main">
        <aside className="home__mainAside">
          {/* 1. Add local repositiory */}
          {/* For adding a local repo, we have options like drag and drop the repo folder */}
          {/* Or simply navigate to it and just click open the folder */}
          <button onClick={buttonClicked}>
            <i className="fas fa-folder-open"></i>
            <span>Open local repository</span>
          </button>

          {/* 2. Detect all local repositories on a specific folder*/}
          {/* Navigate to the folder that contains your projects and we'll load all repos found to agile git */}
          {/* Process might take long depending on the projects you have */}
          <button>
            <i className="fas fa-search"></i>
            <span>Detect local repositories</span>
          </button>

          {/* 3. Add remote repository */}
          {/* Simply provide a url to the repository you want to add and make sure it's public */}
          <button>
            <i className="fas fa-link"></i>
            <span>Add remote repository</span>
          </button>

          {/* 4. Create a new local repository */}
          {/* CreateRepo.js already has this one covered */}
          <button>
            <i className="fas fa-plus"></i>
            <span>Create new repository</span>
          </button>
        </aside>

        {/* 5. Not sure if it should be below or above, but this will be a list of your current repos */}
        <main className="home__mainBody">
          <ul>
            <li>Another repo</li>
            <li>Another repo</li>
            <li>Another repo</li>
          </ul>
        </main>
      </main>

      <footer className="home__footer">
        <button
          style={{
            fontSize: 20 + "px",
          }}
          onClick={() => tabClicked("CREATE_REPO")}
        >
          Go to create repo page
        </button>
      </footer>
    </div>
  );
}

module.exports = Home;
