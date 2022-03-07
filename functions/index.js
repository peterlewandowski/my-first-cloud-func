const functions = require("firebase-functions");

exports.sayHello = functions.https.onRequest((req, res) => {
  const message = "Hello my little friend.";
  res.send(message);
});

exports.showStudent = functions.https.onRequest((req, res) => {
  const student = {
    firstName: "Peter",
    lastName: "Lew",
    email: "pete@bocacode.com",
    phone: "976-5432",
  };
  res.send(student);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
