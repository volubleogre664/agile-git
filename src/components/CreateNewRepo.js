"use strict";
const useForm = require("../utils/useForm");

const NewEmptyRepo = ({ formHandler }) => {
  const { onChange, values } = formHandler;
  return (
    <div className="emptyRepo">
      <h1>Make an empty repo</h1>
      {/* Create repo page does this */}

      {/* Needs styling and proper design */}
    </div>
  );
};

const LoadLocalRepo = ({ formHandler }) => {
  return (
    <div className="localRepo">
      <h1>Load a local repo</h1>

      {/* Should a choose path section */}

      {/* Drag and drop section to add the folder of repo  */}

      {/* Validate if folder contains a .git folder for it to be a valid repo */}
    </div>
  );
};

const LoadRemoteRepo = ({ formHandler }) => {
  return (
    <div className="remoteRepo">
      <h1>Load a remote repo</h1>

      {/* Input for username/repoName or url then fire ahead */}

      {/* Path to save the repo */}
    </div>
  );
};

function CreateNewRepo({ repoType }) {
  const [pageData, setPageData] = React.useState({ title: "", btn: "" });
  const formHandler = useForm(null, {
    repoName: "",
    branchName: "main",
    boilerplate: "none",
    gitignore: "none",
    repoPath: "",
    readme: "none",
    repoURL: "",
  });

  function loadRepoType(_type) {
    switch (_type) {
      case "empty": {
        return <NewEmptyRepo formHandler={formHandler} />;
      }

      case "local": {
        return <LoadLocalRepo formHandler={formHandler} />;
      }

      case "remote": {
        return <LoadRemoteRepo formHandler={formHandler} />;
      }

      default: {
        return loadRepoType("empty");
      }
    }
  }

  React.useEffect(() => {
    switch (repoType) {
      case "empty": {
        setPageData({
          ...pageData,
          title: "Create a new repository",
          btn: "Create repository",
        });
        break;
      }

      case "local": {
        setPageData({
          ...pageData,
          title: "Load a local repository",
          btn: "Load repository",
        });
        break;
      }

      case "remote": {
        setPageData({
          ...pageData,
          title: "Clone a remote repository",
          btn: "Clone repository",
        });
        break;
      }

      default: {
        setPageData({
          ...pageData,
          title: "Create a new repository",
          btn: "Create repository",
        });
        break;
      }
    }
  }, [setPageData, repoType]);

  return (
    <div className="newRepo">
      <header className="newRepo__header">
        <h1>{pageData.title}</h1>

        <button>
          <i className="fas fa-times"></i>
        </button>
      </header>

      <main className="newRepo__main">{loadRepoType(repoType)}</main>

      <footer className="newRepo__footer">
        <button>{pageData.btn}</button>
        <button>Cancel</button>
      </footer>
    </div>
  );
}

module.exports = CreateNewRepo;
