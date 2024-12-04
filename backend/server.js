const express = require('express');
const nodemailer = require('nodemailer');
const scraper = require('./scraper');

const app = express();
const port = 3000;

// Rota para iniciar o scrap e enviar o email
app.get('/scrape', async (req, res) => {
  try {
    const data = await scraper.scrapeData();
    await sendEmail(data);
    res.status(200).json({ message: 'Scrape realizado com sucesso e e-mail enviado!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seu-email@gmail.com', // Substitua pelo seu e-mail
      pass: 'sua-senha', // Substitua pela sua senha
    },
  });

  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'destinatario@gmail.com',
    subject: 'Dados do Scraping',
    text: `Aqui estão os dados do scraping:\n\n${data}`,
  };

  await transporter.sendMail(mailOptions);
}

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
