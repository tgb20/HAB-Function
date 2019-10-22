const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.newpoint = functions.https.onRequest((request, response) => {
    const data_body = request.body;

    const transmit_time = data_body.transmit_time;
    const payload_data = data_body.data;
    const iridium_latitude = data_body.iridium_latitude;
    const iridium_longitude = data_body.iridium_longitude;
    const iridium_cep = data_body.iridium_cep;

    admin.database().ref('points').push({timestamp: transmit_time, data: payload_data, modem_lat: iridium_latitude, modem_long: iridium_longitude, accuracy: iridium_cep});

    response.status(200).send("Point Created!");
});
