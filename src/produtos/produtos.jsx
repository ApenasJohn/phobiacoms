// produtos.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const useProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "AIzaSyDXHzWulz2pMW-oFkrZsVIsAmairUQ7A58";
      const SHEET_ID = "1U26zs_iXXQ1W_PBvjnAfo_qsOUeCoOn3nlJ3rMvKXTs";
      const RANGE = "A:E"; // Ajuste o intervalo para as colunas que deseja buscar

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

      try {
        const response = await axios.get(url);
        const rows = response.data.values;

        const headers = rows[0];
        const produtos = rows.slice(1).map((row) =>
          headers.reduce((acc, header, index) => {
            acc[header] = row[index];
            return acc;
          }, {})
        );

        console.log(produtos); // Verifique se os dados estão sendo recebidos corretamente
        setProdutos(produtos);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  return produtos;
};

export default useProdutos;
