<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://i.postimg.cc/mZKwxvc0/IMG-20191102-WA0002.jpg" width="60" />
  </a>
</p>
<h1 align="center">
  Team Impulse
</h1>

This was the main team website created for Team Impulse - The Physics Club of The Mother's International School. It's main functionality was to register teams (with proper validation) and add them to a Google Sheets file.

_This website was created using NodeJS, Express, and Pug - A template engine for NodeJS (https://pugjs.org/)._

## 🚀 Quick start

1.  **Install the Git CLI and clone this repository.**

    https://git-scm.com/downloads
    ```shell
    # clone this repository
    git clone https://github.com/arhaanb/teamimpulse.git
    ```

1.  **Install the node dependencies.**

    Navigate into the directory you just cloned. You need to have NodeJS installed before you proceed with this step.
    https://nodejs.org/en/download/

    ```shell
    cd teamimpulse
    npm i 
    ```

1.  **Open the source code and start editing!**

    Use your favourite code editor and start coding! Create a .env file in the root directory and fill it with the following details:
      - EMAIL
      - PASSWORD
      - SHEET_ID
      
    _This project is configured to work only with Gmail accounts._

1. **Follow these steps to enable all functionality from the website**

    - Generate API keys for Google Sheets from (https://console.developers.google.com/apis/). Create a new project and enable the Google Spreadsheet API. Download your credentials (API Keys) and store them in a `client_secret.json` file in the root directory. Also remember to share the spreadsheet you are using with the 'Service Account' that google provides, and give it edit access, as that email will be writing all new submissions onto your spreadsheets.

    - Enable "Allow less secure apps access to your gmail account" from https://myaccount.google.com/lesssecureapps

1. **Compile and run your code**

    run the following command in your terminal.
    ```shell
    node app.js
    ```
    You will find your website live on https://localhost:5000. To edit the frontend, edit files availaible in the views directory. To edit the contents of the confirmation email, edit the `email.hbs` file.
    _Note: You will have to run this command every time you make changes to the source code. To avoid this, you can install a package called nodemon - https://www.npmjs.com/package/nodemon. This will update the browser every time you save your files automatically._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── public
    ├── routes
    ├── views
    ├── .gitignore
    ├── app.js
    ├── Procfile
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/views`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. This is all coded in Pug.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`routes`**: This folder contains routes that the user would visit and which files it will render for them.

5.  **`public`**: This folder contains all files which are available publicly on the server, such as the CSS files, images, fonts, etc.

6. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

7. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

8. **`README.md`**: A text file containing useful reference information about your project.

## 💫 Functionality and Pages

1. **/** - Overview of Team Impulse
2. **/members** - A list of members in Team Impulse with their positions
3. **/register** - A registration page for Enigma - Team Impulse's annual online cryptic hunt. Every submission is stored in a Google Sheet with a randomly generated password for each team. Each team also receives a confirmation email with their team information instantly.
4. **/enigma** - Redirects to the URL where Enigma was held (https://enigma.teamimpulse.co.in).

<!-- ## 🎓 Learning NodeJS

Looking for more guidance? Full documentation for Node is availaible on their website - https://nodejs.org/en/docs/. Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar. -->
