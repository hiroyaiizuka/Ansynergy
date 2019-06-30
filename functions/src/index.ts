import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const helloWorld = functions.https.onRequest((req, res) => {
  if (req.params[0] !== undefined) {
    const param = req.params[0].slice(1);
    res.status(200).send(`hi ${param}`);
  } else {
    res.status(200).send('hi');
  }
});

//const admin = require('firebase-admin')

//admin.intializeApp()
