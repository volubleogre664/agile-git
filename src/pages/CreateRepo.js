"use strict";

const { ipcRenderer } = require("electron");
const useForm = require("../utils/useForm");

function CreateRepo({ tabClicked }) {
  const { onChange, onSubmit, values } = useForm(submitForm, {
    repoName: "",
    branchName: "main",
    boilerplate: "none",
    gitignore: "none",
    repoPath: "",
    reaadme: "none",
  });

  const gitInitClicked = (e) => {
    e.preventDefault();

    (async () => {
      const result = await ipcRenderer.invoke("run-cmd", {
        command: "git",
        args: ["init", "-b", values.branchName],
        directory: values.repoPath,
        repoName: values.repoName,
      });

      console.log(result.message);
    })();
  };

  const selectFolder = async (e) => {
    e.preventDefault();
    const result = await ipcRenderer.invoke("select-dirs", {});

    onChange({
      target: {
        name: "repoPath",
        value: result,
      },
    });
  };

  function submitForm() {
    console.log(values);
  }

  return (
    <div className="demo">
      <header className="demo__header">
        <h1>Welcome to agile git</h1>
        <p>Let's make your new git repository</p>
      </header>

      <main className="demo__main">
        <form onSubmit={onSubmit} className="demo__mainForm">
          <div className="demo__mainFormControl">
            <label htmlFor="repoName">Name of your repo</label>
            <input
              onChange={onChange}
              value={values.repoName}
              type="text"
              name="repoName"
              id="repoName"
            />
          </div>

          <div className="demo__mainFormControl">
            <label htmlFor="branchName">Name of your branch</label>
            <input
              type="text"
              name="branchName"
              id="branchName"
              onChange={onChange}
              value={values.branchName}
            />
          </div>

          <div className="demo__mainFormControl ">
            <label htmlFor="boilerplate">
              Select boiler plate code with your favourite framework or stack
            </label>
            <select onChange={onChange} name="boilerplate" id="boilerplate">
              <option value="1">Empty Repository</option>
              <option value="html-website">
                Basic HTML5, CSS3, JS Template
              </option>
              <option value="react-cra">React Template with CRA</option>
            </select>
          </div>

          <div className="demo__mainFormControl">
            <label htmlFor="gitignore">
              Add a git ignore to your repository, select a template for your
              stack
            </label>
            {/*  */}
            <select onChange={onChange} name="gitignore" id="gitignore">
              <option value="1">No gitignore selected</option>
              <option value="node">Node (Javascript projects)</option>
            </select>
          </div>

          <div className="demo__mainFormControl">
            <label htmlFor="repoPath">Select a path to save the repo:</label>
            <button onClick={selectFolder} name="repoPath" id="repoPath">
              Select folder
            </button>
            {values.repoPath && <p>{values.repoPath}</p>}
          </div>

          <div className="demo__mainFormControl">
            <label htmlFor="readme">
              <span>Initialise branch with readme: </span>
              <input type="checkbox" name="readme" id="readme" />
            </label>
          </div>

          <div className="demo__mainFormControl buttons">
            <button type="submit" onClick={gitInitClicked}>
              Initialise Git Repo
            </button>
          </div>
        </form>

        <button
          style={{
            fontSize: 20 + "px",
          }}
          onClick={() => tabClicked("home")}
        >
          Go back to home page
        </button>
      </main>
    </div>
  );
}

module.exports = CreateRepo;
