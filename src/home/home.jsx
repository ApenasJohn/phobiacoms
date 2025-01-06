import React from "react";
import Carrossel from "../bannerrotativo/bannerrotativo";
import Lancamentos from "../lançamentos/lançamentos";
import ProdutosList from "../campoprodutos/campoprodutos";
import Instagram from "../instagram/instagram";

function Home() {
  return (
    <div>
    <Carrossel />
    <Lancamentos />
    <ProdutosList />
    <Instagram />
    </div>
  );
}

export default Home;