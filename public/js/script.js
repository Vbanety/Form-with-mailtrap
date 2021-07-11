
const btn = document.querySelector('button');

const inputs = document.querySelector('form');

btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "bf7872d2c0e993",
        Password: "85ec3affff5fc6",
        To: "batistavesuporte@gmail.com",
        From: inputs.elements["email"].value,
        Subject: "Recado do portfolio",
        Body: inputs.elements["subjects"].value 
        + "<br><br>" + inputs.elements["name"].value 
        + "<br><br>" + inputs.elements["message"].value
    }).then(msg=> alert('Email enviado com sucesso!!'))
})

