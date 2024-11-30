

const ProdutosCarrinho = ({
  produtos,
  carrinho,
  adicionarCarrinho,
  removerCarrinho,
}) => {
  const calcularTotalCarrinho = () => {
    return carrinho.reduce((total, produto) => total + produto.price, 0).toFixed(2);
  };

  return (
    <section>
      {/* Produtos */}
      <section className="pCont">
        {produtos.map((produto) => (
          <article key={produto.id} className="produto">
            <figure>
              <img
                src={produto.image}
                alt={produto.title}
              />
            </figure>
            <section className="produto-info">
              <h2>{produto.title}</h2>
              <span className="categoria">{produto.category}</span>
              <p className="descricao">{produto.description}</p>
            </section>
            <section className="produto-detalhes">
              <strong className="preco">{produto.price.toFixed(2)}€</strong>
              <span className="rating">
                ★ {produto.rating.rate} ({produto.rating.count})
              </span>
            </section>
            <button onClick={() => adicionarCarrinho(produto)}>+ Adicionar ao cesto</button>
          </article>
        ))}
      </section>

      {/* Carrinho */}
      <section id="carrinho">
        <h2>Produtos Selecionados</h2>
        {carrinho.length > 0 ? (
          <section className="pCont">
            {carrinho.map((produto) => (
              <section key={produto.id} className="carrinho">
                <figure>
                  <img
                    src={produto.image}
                    alt={produto.title}
                    width={100} // ajuste conforme necessário
                    height={100} // ajuste conforme necessário
                  />
                </figure>
                <section className="produto-info">
                  <h2>{produto.title}</h2>
                  <span className="categoria">{produto.category}</span>
                </section>
                <section className="produto-detalhes">
                  <strong className="preco">{produto.price.toFixed(2)}€</strong>
                </section>
                <button onClick={() => removerCarrinho(produto)}>- Remover do cesto</button>
              </section>
            ))}
            <p className="total">Custo total: {calcularTotalCarrinho()}€</p>
          </section>
        ) : (
          <p className="empty-cart-message">O carrinho está vazio</p>
        )}
      </section>
    </section>
  );
};

export default ProdutosCarrinho;
