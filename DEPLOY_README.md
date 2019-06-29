This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Visit [their repository](https://github.com/facebookincubator/create-react-app) for more information and help.

### Remixing in Glitch

To make the auto-reload feature work:

* Disable the "Refresh App on Changes" checkbox in your user menu (top right).

### Changes made to the original boilerplate

Changes that were done to better integrate with Glitch:

* The `.env.development` file contains `DANGEROUSLY_DISABLE_HOST_CHECK=true` to fix the "Invalid host header" message that shows up, related to the development server.
* A custom `watch.json` file was added so that the server doesn't restart when you make changes.
* The `build` script in the `package.json` file was changed.

### Deploying to GitHub Pages

If you run `npm run build` using the **Logs > Console**, it will generate a "docs" folder with the production build version of your app. 

Before exporting to Github, comment out `/docs` in `.gitignore`.
Then click **Advanced Options > Export to GitHub** (in the top left menu with the name of your app).


 
Inside GitHub, you can deploy your "docs" folder by going to **Settings > GitHub Pages > Source** and selecting **master branch /docs folder**. Then every time you export from Glitch, click "Open Pull Request" and merge your new changes to master.