const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.newpoint = functions.https.onRequest((request, response) => {
    const lat = request.query.lat;
    const long = request.query.long;
    const time = request.query.time;

    admin.database().ref('points').push({latitude: lat, longitude: long, timestamp:time});

    response.status(200).send("Point Created!");
    
});
