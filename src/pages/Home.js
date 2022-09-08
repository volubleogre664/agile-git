"use strict";

const CreateNewRepo = require("../components/CreateNewRepo");
const HomeOptionButton = require("../components/HomeOptionButton");
const {
  useSlice: { useUtils },
} = require("../hooks");
const { UTILS } = require("../context/types");

function Home({ tabClicked }) {
  // TODO: Work with this later
  const [repoType, setRepoType] = React.useState("");
  const [, dispatchUtils] = useUtils();

  const handleHomeOptionClick = (option) => {
    setRepoType(option);
    dispatchUtils({ type: UTILS.OVERLAY.SET, payload: true });
  };

  React.useEffect(() => {
    if (repoType)
      dispatchUtils({ type: UTILS.LOAD_REPO.SET, payload: repoType });
  }, [repoType]);

  return (
    <div className="home">
      {/* <Header tabClicked={tabClicked} /> */}

      {/* TODO: Work on the home page and the corresponding components */}
      <main className="home__main">
        <aside className="home__mainAside">
          {/* 1. Add local repositiory */}
          {/* For adding a local repo, we have options like drag and drop the repo folder */}
          {/* Or simply navigate to it and just click open the folder */}
          <HomeOptionButton
            label="Open local repository"
            icon="fas fa-folder-open"
            onClick={() => handleHomeOptionClick("local")}
          />

          {/* 2. Detect all local repositories on a specific folder*/}
          {/* Navigate to the folder that contains your projects and we'll load all repos found to agile git */}
          {/* Process might take long depending on the projects you have */}
          <HomeOptionButton
            label="Detect local repositories"
            icon="fas fa-search"
          />

          {/* 3. Add remote repository */}
          {/* Simply provide a url to the repository you want to add and make sure it's public */}
          <HomeOptionButton
            label="Add remote repository"
            icon="fas fa-link"
            onClick={() => handleHomeOptionClick("remote")}
          />

          {/* 4. Create a new local repository */}
          {/* CreateRepo.js already has this one covered */}
          <HomeOptionButton
            label="Create new repository"
            icon="fas fa-plus"
            onClick={() => handleHomeOptionClick("empty")}
          />
        </aside>

        {/* 5. Not sure if it should be below or above, but this will be a list of your current repos */}
        <main className="home__mainBody">
          <div className="home__mainBodySearchContainer">
            <input type="text" value="" placeholder="Filter your repos..." />
          </div>

          <ul>
            <li>Another repo</li>
            <li>Another repo</li>
            <li>Another repo</li>
          </ul>
        </main>
      </main>

      {repoType && (
        <section className="home__createRepo">
          <CreateNewRepo repoType={repoType} setRepoType={setRepoType} />
        </section>
      )}

      <footer className="home__footer">
        {/* <button
          style={{
            fontSize: 20 + "px",
          }}
          onClick={() => tabClicked("CREATE_REPO")}
        >
          Go to create repo page
        </button> */}
      </footer>
    </div>
  );
}

module.exports = Home;
