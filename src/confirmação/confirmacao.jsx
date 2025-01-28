const handleSubmit = async (e) => {
  e.preventDefault();

  // Obtendo os IDs dos produtos do carrinho
  const idsProdutos = carrinho.map(item => item.ID); // Assumindo que cada item tem um campo 'ID'

  try {
    const response = await axios.post("http://localhost:5173/carrinho", {
      nome,
      whatsapp,
      endereco,
      cep,
      idsProdutos,
      valorTotal,
      dataEnvio: new Date().toISOString() // Adicionando a data do envio
    });

    setMensagem(`Pedido confirmado! Número do pedido: ${response.data.numeroPedido}`);
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    setMensagem("Erro ao confirmar o pedido. Tente novamente.");
  }
};