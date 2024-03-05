A full ecommerce app to learn react

[Nuggets](nuggets.md)

## Adding environment variables

The `.env.sample` contains all the variables you need for this project to run

Make `.env` in the root directory and update like this & `REACT_APP_` is the compulsory prefix for the variable name.

```sh
REACT_APP_NODE_ENV="production"
REACT_APP_DB="http://localhost:5000"
```

## Firebase
 Sign up for firebase and add your credentials in the `.env` filea above. These credentials are found in Project Settings under the General tab

## Available Scripts when using docker

Make sure you have docker installed

### `yarn docker`

Builds the docker image and runs a container from it

### `yarn clean`

Stops and removes the container

### `yarn docker:prod`

Builds a production ready image

## Deploy to heroku

### Install heroku and login

- Follow this [installation guide](https://devcenter.heroku.com/articles/heroku-cli)

- `heroku login`

### Build image and deploy

`yarn deploy`

The above is a script that builds the image and deploys to heroku


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

Deploys the app on github pages. Change the `homepage` of the `package.json` to your repository url

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


