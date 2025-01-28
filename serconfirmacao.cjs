app.post("/carrinho", async (req, res) => {
  const { nome, whatsapp, endereco, cep, idsProdutos, valorTotal, dataEnvio } = req.body;

  console.log("Recebendo dados:", req.body);

  if (!nome || !whatsapp || !endereco || !cep || !idsProdutos || !valorTotal || !dataEnvio) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const numeroPedido = uuid.v4();

  try {
    const sheets = google.sheets({ version: "v4", auth });

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

    res.status(200).json({ message: "Dados enviados com sucesso!", numeroPedido });
  } catch (error) {
    console.error("Erro ao enviar dados para a planilha:", error);
    res.status(500).json({ error: "Erro ao enviar dados." });
  }
});