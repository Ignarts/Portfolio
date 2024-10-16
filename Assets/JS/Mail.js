(function () {
    emailjs.init("8pDFJB-v4-HqnZfz5");
})();

function sendEmail() {
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('port_mail', 'template_portfolio', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again later.');
        });
}