## Simple project with form sending email from html to your [mailtrap](https://mailtrap.io/i) account.

[presantation](./public/assets/presentation.png)

### Settings:

* CDN `smtpjs` [smtp.js](https://smtpjs.com/)
* Library [SCSS](https://sass-lang.com/install)
* Library [Express](https://www.npmjs.com/package/express)

After `CLONE`, look for the code below : 

```js
Email.send({
        Host: "smtp.mailtrap.io",
        Username: "from your mailtrap account",
        Password: "from your mailtrap account",
        To: "your email",
        From: value from inputs,
        Subject: "Tille",
        Body: elements from body
        })
```

And then, set the code `NPM START` from your terminal, to run the port 8080, and go to the browser to make a test.


