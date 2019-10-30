const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
   // find en bruger baseret på den email vi sender med til funktionen
   // .getUserByEmail kan kun kaldes hvis requesten er en valid authenticated requst
   return admin.auth().getUserByEmail(data.email).then(user => {
      // når brugeren er fundet, sikres det at requesten er authenticated
      // og derefter kaldes .setCustomUserClaims()
      // vi giver den en user.uid og derefter sender et objekt med de værdier vi ønsker at sætte
      // her er værdien ganske enkelt "admin:true"
      return admin.auth().setCustomUserClaims(user.uid, {
         admin: true
      })
   }).then(() => {
      // når setCustomUserClaim er succesful, retureres en besked om at det lykekdes
      return {
         message: `Success ${data.email} has been made an Admin`
      }
   }).catch(err => {
      // hvis noget fejler undervejs returneres fejlbeskeden
      return err;
   })
});