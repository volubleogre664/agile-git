"use strict";
const {
  useForm,
  useSlice: { useUtils },
} = require("../hooks");
const { UTILS } = require("../context/types");

const CreateNewEmptyRepo = require("./CreateNewEmptyRepo");
const LoadLocalRepo = require("./LoadLocalRepo");
const LoadRemoteRepo = require("./LoadRemoteRepo");

function CreateNewRepo({ repoType, setRepoType }) {
  const [, dispatchUtils] = useUtils();
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
        return <CreateNewEmptyRepo formHandler={formHandler} />;
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

  const handleCancel = (e) => {
    e.preventDefault();
    setRepoType("");
    dispatchUtils({ type: UTILS.OVERLAY.SET, payload: false });
  };

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

        <button onClick={handleCancel}>
          <i className="fas fa-times"></i>
        </button>
      </header>

      <main className="newRepo__main">{loadRepoType(repoType)}</main>

      <footer className="newRepo__footer">
        <button>{pageData.btn}</button>
        <button onClick={handleCancel}>Cancel</button>
      </footer>
    </div>
  );
}

module.exports = CreateNewRepo;
