## Building Malloy

Building the Malloy repo requires [node.js](https://nodejs.org/en/download/), [yarn](https://classic.yarnpkg.com/en/docs/install/), and a [Java Runtime Environment](https://www.oracle.com/java/technologies/javase-jre8-downloads.html) (JRE 1.6 or higher, 1.8 recommended) installed on your system in order to build the Malloy project.

Alternatively, you can use [nix](https://nixos.org/) to install these dependencies. To use nix, install it with `curl -L https://nixos.org/nix/install | sh` and then run `nix-shell` from the `malloy/` directory. Nix is what _CI_ uses to run builds.

The following will install dependencies for the entire set of packages and compile both the Malloy language and the VSCode extension.

```bash
yarn install
yarn package-extension
```

### VS Code tips

We provide a task in VS Code (.vscode/tasks.json) to watch the entire Malloy repo for typscript changes - this allows VS Code to output typescript errors even when files are closed. The default behavior is for errors to only appear in open files. If you want the watcher task to compile all files in the background, you can either run the task manually (Command Palette -> Tasks -> Run Task -> tsc-compile-watch). If you want to enable this task to always start when you open the project, run Command Palette -> Tasks: Manage Automatic Tasks in Folder -> Allow Automatic Tasks in folder.

## Malloy VSCode Extension

The Malloy VSCode extension's source is in the `malloy-vscode` directory.

### Installation

To build and install the current version of the extension, first ensure that you've followed the steps to install the dependencies for the Malloy Repo. **Note: You will need to re-run the below any time you pull in new changes.** Then run:

```bash
yarn package-extension
```

Next, in VSCode _EITHER_:

1. Run the "Extensions: Install from VSIX" command (CTRL/CMD + SHIFT + P opens the command interface), then select `malloy/packages/malloy-vscode/dist/malloy-vscode-x.x.x.vsix`

_OR_

2. Open the `malloy-vscode` package root directory in VSCode, right click on `dist/malloy-vscode-x.x.x.vsix` and select "Install Extension VSIX".

# Malloy and Extension Development

1. Open the `malloy` directory in VSCode (where ever you cloned)
2. Select the "Run and Debug" panel in the left bar.
3. Click the green arrow "Run" button, with the "Run Extension" profile selected.

Optional: To additionally debug the language server, run the "Attach to Language Server"
launch profile from the "Run and Debug" panel.

![open_vsix3](https://user-images.githubusercontent.com/7178946/130678501-cd5cf79b-0d48-42a6-a4d5-602f1b0d563d.gif)
