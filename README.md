# Generator of "Attestation de déplacement dérogatoire"

This webapp generates "attestation de déplacement dérogatoire" with a simple button, one for each reason.

User info is stored in the local storage of the browser.

Back-end is only reponsible for file serving. No information is processed by the back-end.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is a fork of the official [Générateur de certificat de déplacement](https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020) project.

It uses:

- [PDF-LIB](https://pdf-lib.js.org/)
- [qrcode](https://github.com/soldair/node-qrcode)

## Demo

See it live on: https://clempinch-attestation.netlify.app/

## TODO

TODO list:
- user can select button he/she is interested in
- add a footer note about the technical stack
- add a link to the Github repo

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
