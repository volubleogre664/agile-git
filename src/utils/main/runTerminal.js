"use strict";

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

// Steps to make this work: 1. Run the command. 2. Capture all output to a variable. 3. Return the command results

// Before running a command like git init, make sure you are in the right directory and it actually exists. If not, create it.

// First command would be to create a new directory
// Second command would be to run git init in that directory
// Then return the output of the command

// The return will be an object with the following properties: status, message, error

function runTerminal({ command, args, directory, repoName }) {
  let commandOutput = {};

  // Join the directory and repoName together to create the full path
  const cwd = path.join(directory, repoName);

  // Create a new directory if it doesn't exist
  if (!fs.existsSync(cwd)) {
    fs.mkdirSync(cwd);
  }

  const cmd = spawn(command, args, { cwd: cwd });

  cmd.stdout.on("data", (data) => {
    commandOutput = {
      status: "success",
      message: data.toString(),
      error: null,
    };
  });

  cmd.stderr.on("data", (data) => {
    commandOutput = {
      status: "error",
      message: data.toString(),
      error: "STDERR",
    };
  });

  cmd.on("error", (error) => {
    // console.log(`error: ${error.message}`);
    commandOutput = {
      status: "error",
      message: error.message,
      error: "ERROR",
    };
  });

  return commandOutput;
}

module.exports = runTerminal;
