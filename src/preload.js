// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { ipcRenderer } = require("electron");

process.on("loaded", () => {
  window.addEventListener("message", (evt, ...args) => {
    // TODO: Handle edge cases here
    if (!evt.data.type) return;

    ipcRenderer.send(evt.data.type);
  });
});
