# A clone of the Amazon website

Created a clone of Amazon with a few tweaks to learn fullstack web development skills

## Utilized

- React and node
  - `npm i react-router-dom`
  - `npm install react-currency-format --save --force`
- CCS
- Firebase
  - `npm install -g firebase-tools`
  - `npm i firebase`
  - `firebase login`
  - `firebase init`
    - Select 'Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action Deploys'
    - Select 'Use an existing project'
    - Select the desired project (This is the project created in the Firebase site)
    - Type and enter 'build' when prompted: `What do you want to use as your public directory` (IMPORTANT for react apps)
    - Type and enter 'y' when prompted: `Configure as single-app page?`
  - To deploy and redeploy project, use the following commands:
    - `npm run build`
    - `firebase deploy`
- Material-UI (
    - `npm install npm install @mui/material @emotion/react @emotion/styled`
    - `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`

## Things I learned

- How to utilize git/github using vsCode to efficiently push/pull code from repositories
- How to apply styling to components using CSS
- How to use 'prop's to making reusing code easier
- How to use React router and routes
  - `<Router>  </Router>`
  - `<Route path='/' element={
            <>
            <Component1 />
            <Component2 />
            </>
          }/>`
- How to insert links into div's or img's using <Link to='/'> </Link>
- Learned how to use firebase and hook it up to my project
- Learned about BEM format. (capitalized files are components)
- How to efficiently inspect elements to debug and test how different properties would look
- How to impelement user login/authorization using Firebase
- How to deploy my project to Firebase for others to interact with it!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
