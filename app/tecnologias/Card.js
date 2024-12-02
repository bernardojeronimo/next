const tecnologias = ({
  tecno,
}) => {
  return (
    <section>
      {/* tec */}
      <section className="pCont">
        {tecno.map((tec,index) => (
          <article key={index} className="produto">
            <figure>
              <img
                src={tec.image}
                alt={tec.title}
              />
            </figure>
            <section className="produto-info">
              <h2>{tec.title}</h2>
              <p className="descricao">{tec.description}</p>
            </section>
            <section className="produto-detalhes">
              <span className="rating">★ {tec.rating}</span>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};

export default tecnologias;
