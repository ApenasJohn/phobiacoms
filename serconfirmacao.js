const express = require("express");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const uuid = require("uuid");

const app = express();
app.use(bodyParser.json());
const PORT = 5173;

const credentials = require("./planilhaprodutos-0d2d8e87ff1b.json");
const { client_email, private_key } = credentials;
const auth = new google.auth.JWT(
  client_email,
  null,
  private_key,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const spreadsheetId = "1wKlEN8hr2gFhb1-xBtBIu-PLjfrae6ejBL--PLzGh3s";

app.post("/adicionar-dados", async (req, res) => {
  const { nome, whatsapp, endereco, cep, idsProdutos, valorTotal } = req.body;

  console.log("Recebendo dados:", req.body); // Log para depuração

  if (!nome || !whatsapp || !endereco || !cep || !idsProdutos || !valorTotal) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const numeroPedido = uuid.v4();
  const dataEnvio = new Date().toLocaleString();

  try {
    const sheets = google.sheets({ version: "v4", auth });

    console.log("Enviando para a planilha...");

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Pedidos!A:G",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            numeroPedido,
            nome,
            whatsapp,
            endereco,
            cep,
            idsProdutos.join(", "),
            valorTotal,
            dataEnvio,
          ],
        ],
      },
    });

    console.log("Recebendo dados:", req.body);
    console.log("Enviando para a planilha...");
    
    console.log("Dados enviados com sucesso!");

    res.status(200).json({ message: "Dados enviados com sucesso!", numeroPedido });
  } catch (error) {
    console.error("Erro ao enviar dados para a planilha:", error);
    res.status(500).json({ error: "Erro ao enviar dados." });
  }
});
