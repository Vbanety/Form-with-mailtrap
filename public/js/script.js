
const btn = document.querySelector('button');

const inputs = document.querySelector('form');

btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "bf7872d2c0e993",
        Password: "85ec3affff5fc6",
        To: "batistavesuporte@gmail.com",
        From: inputs.elements["email"].value,
        Subject: "Assunto vindo do portfolio",
        Body: inputs.elements["subjects"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["message"].value + "<br>"
    }).then(msg=> alert('Email enviado com sucesso!!')).then(document.querySelector())
})

