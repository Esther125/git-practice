# Cloud native system development and maintenance HW2
## Node.js Version Used in This Project
I chose `v20.17.0` version because it is the latest LTS version. Since I don't require any of the latest features, a stable version is more suitable for my needs.


## Introduction of nvm & npm
### 1. nvm (Node Version Manager)
`nvm` is a **version manager** for Node.js, enabling you to **easily install, switch between, and manage multiple versions of Node.js** on your system. This flexibility allows you to work on different projects that may require specific versions of Node.js without conflicts.

Unlike npm, which will be installed when you download Node.js, you need to download nvm by yourself.Below are some commonly used features and commands of nvm:

#### 1.1 Install and use a Node.js Version
To install and use a specific version of Node.js, use the following command:
```
nvm install <version>
npm use <version>
```

For example, to install version 14.17.0, you would run:
```
nvm install 14.17.0
nvm use 14.17.0
```
![nvm-use](/images/week-02/nvm-use.png)

You can use the following command to switch back to the global version of Node.js:
```
npm use system
```
#### 1.2 List installed Node.js Version
You can use the command to see all available version of Node.js:
```
nvm ls
```
![nvm-ls](/images/week-02/nvm-ls.png)

We can see that there are two versions available now.



### 2. npm (Node Package Manager)
`npm` is a **package manager** for Node.js, enabling the **installation, management, and sharing of JavaScript packages**. Below are some commonly used features and commands of npm:


#### 2.1 Initialize a Node Project
We can initialize a node project with the following command:
```zsh
npm init
```
We can see npm added a `package.json` file to our project after initialization. This file will record the project's metadata, including dependencies, scripts, and configuration options, **ensuring that the environment is consistent across different setups.**

![npm-init-result](/images/week-02/npm-init-result.png)


#### 2.2 Install/Uninstall a Package
```zsh
npm install <package-name>
npm uninstall <package-name>
```
For example, if we want to install the express package in our project. We will use this command:
```
npm install express
```
After executing the command, we will see that npm installs the express package and adds it to the dependencies section of the `package.json` file. 

![npm-install-express](/images/week-02/npm-install-express.png)

Additionally, a new entry will appear in the `node_modules` directory, containing all the necessary files for the express package. 

This directory is created when we install our first package, and it is essential for managing dependencies in our project. However, we **don't** need to upload this folder to our Github repo.

![node-modules](/images/week-02/node-modules.png)


#### 2.3 List Installed Packages
We can see all the packages we have installed with this command:
```
npm list
```

![npm-list](/images/week-02/npm-list.png)

#### 2.4 Run the Script
To easily execute specific commands in our Node.js project, we can define scripts in the package.json file. 

For example, if we want to use npm to run `app.js`, we can first define the script in the scripts section of our `package.json` file.

![npm-run-start](/images/week-02/npm-run-start.png)

Then we can run `app.js` by this command:
```
npm run start
```

Now, we can see npm really executed `app.js` and printed out the result: `Hello, World!`

![npm-run-start-result](/images/week-02/npm-run-start-result.png)


### 3. (Supplementary) Comparison Between Python and Node.js
| Comparison       | Node.js | Python |
|------------------|---------|--------|
| Version Manager  | nvm     | pyenv  |
| Package Manager  | npm     | pip    |


## Supplementary Information
### How to Display the Git Branch Name in  macOS Terminal?
For this topic, **I wrote a technical blog** to document how I successfully changed my terminal settings. You can refer to my blog here: [My HackMD](https://hackmd.io/@liyichen125/ryxM_I3a0)


## Reference
- https://www.796t.com/content/1544830142.html
- https://a0910288060.medium.com/%E4%BA%86%E8%A7%A3node-js-nvm-npm%E5%B7%AE%E5%88%A5-47cda7c1d569
- https://www.casper.tw/development/2022/01/10/install-nvm/