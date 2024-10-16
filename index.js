// Load environment variables from .env file
require('dotenv').config();

const emailjs = require('emailjs-com');

(function () {
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    emailjs.init(publicKey);
})();

function sendEmail() {
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log(templateParams);

    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;

    emailjs.send(serviceID, templateID, templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}

// Call the function to send an email
sendEmail();