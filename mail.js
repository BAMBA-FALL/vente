const nodemailer = require('nodemailer');

async function sendConfirmationEmail(userEmail) {
    // Créez un transporteur Nodemailer avec vos informations de service de messagerie
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'votre_email@gmail.com',
            pass: 'votre_mot_de_passe',
        },
    });

    // Options de l'e-mail de confirmation
    const mailOptions = {
        from: 'votre_email@gmail.com',
        to: userEmail,
        subject: 'Confirmez votre compte',
        text: 'Veuillez cliquer sur le lien suivant pour confirmer votre compte : http://votre-site.com/confirmation?token=votre_token',
    };

    // Envoyez l'e-mail
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
}

// Appelez la fonction pour envoyer l'e-mail de confirmation
sendConfirmationEmail('email_de_l_utilisateur@example.com');
