# Amazon Clone (https://clone-1f7fc.web.app)

Created a clone of Amazon with a few tweaks to learn fullstack web development skills. Users can create an account and login using their gmail and the password associated with that gmail. Users can also add/remove items to their basket and purchase(not real payment) those items.

## Things I learned

- How to utilize git/github using vsCode to efficiently push/pull code from repositories
- How to apply styling to components using CSS
- How to use 'prop's to making reusing code easier
- How to use React router and routes
  `<Router>  </Router>`
  ```
  <Route path='/' element={
    <Link>
    <Component1 />
    <Component2 />
    </>
  }/>
  ```
- How to insert links into div's or img's using `<Link to='/'> </Link>`
- Learned how to use firebase and hook it up to my project
- Learned about ***BEM*** format. (Components should be capitalized)
  - The reason for this because React might mistaken it for an HTML tag if its lowercase
- How to efficiently inspect elements to debug and test how different properties would look
- How to implement user login/authorization using Firebase
- How to hide private/secret api keys using `git ignore`
- How to deploy my project to Firebase for others to interact with it!
- How to emulate a build
- How to set up an API and utilize it to send data

## Utilized

- React and node
  - `npm install` (when testing on a new machine be sure to run this again)
  - `npx create-react-app` (creates react app template)
  - `npm i react-router-dom`  (for `<route />` and `<router />`)
  - `npm install react-currency-format --save --force`
- CCS
- Firebase
  - Commands:
    - `npm install -g firebase-tools`
    - `npm i firebase`
    - `firebase login`
  - Firestore (real-time database)
  - Deployment commands:
    - `firebase init`
      - Select: `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action Deploys`
      - Select: `Use an existing project`
      - Select the desired project (This is the project created in the Firebase site)
      - Type and enter `build` when prompted: `What do you want to use as your public directory` (IMPORTANT for react apps)
      - Type and enter `y` when prompted: `Configure as single-app page?`
    - To **deploy** and **redeploy** project using **Firebase**, use the following commands:
      - `npm run build`
      - `firebase deploy`
    - To **deploy frontend** ONLY, use the following command:
      - `npm run build`
      - `firebase deploy --only hosting`
    - To **deploy backend (Firebase cloud functions)** ONLY, use the following command:
      - `firebase deploy --only functions`
  - Emulation commands:
    - `firebase emulators:start`
  - Cloud function commands:
    - `firebase init`
      - Select `Functions: Configure a Cloud Functions directory and its files`
      - Selected `Javascript` when prompted: `What language would you like to use to write Cloud Functions?`
      - Enter `y` when prompted: `Do you want to use ESLint to catch probable bugs and enforce style?`
      - Enter `y` when prompted: `Do you want to install dependencies with npm now?`
- Material-UI (
  - `npm install npm install @mui/material @emotion/react @emotion/styled`
  - `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`
- Axios
  - `npm i axios`
- Stripe (for payment processing)
  - `npm i @stripe/stripe-js`
  - `npm i @stripe/react-stripe-js`

### **Front-end** dependencies (\src)

- `npm i react-router-dom`
- `npm install react-currency-format --save --force`
- `npm install npm install @mui/material @emotion/react @emotion/styled`
- `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`
- `npm install -g firebase-tools`
- `npm i firebase`
- `npm i axios`
- `npm i @stripe/stripe-js`
- `npm i @stripe/react-stripe-js`
- `npm i moment`

### **Back-end** dependencies (\functions)

- `npm i express`
- `npm i cors`
- `npm i stripe`

## After Deployment (cloud functions permission)

After deployment, the payment processing feature was not working. This was because the API request permissions were private. To fix this:

- Go the Google Cloud Console(Not Firebase Console) -> Search For Cloud Functions to see the list of functions
- Click the checkbox next to the function to which you want to grant access.
- Click Permissions at the top of the screen. The Permissions panel opens.
- Click Add principal.
- In the New principals field, type allUsers.
- Select the role Cloud Functions > Cloud Functions Invoker from the
- Select a role drop-down menu.
- Click Save.

Now anyone using the application can use the Stripe payment processing feature!
