function Blog() {

  const articles = [
    {
      titre: "Coder son site en HTML/CSS",
      image: "/img/blog/coder.jpg",
      date: "Publié le 22 août 2022"
    },
    {
      titre: "Vendre ses produits sur le web",
      image: "/img/blog/croissance.jpg",
      date: "Publié le 20 août 2022"
    },
    {
      titre: "Se positionner sur Google",
      image: "/img/blog/google.jpg",
      date: "Publié le 1 août 2022"
    },
    {
      titre: "Coder en responsive design",
      image: "/img/blog/screens.jpg",
      date: "Publié le 31 juillet 2022"
    },
    {
      titre: "Techniques de référencement",
      image: "/img/blog/seo.jpg",
      date: "Publié le 30 juillet 2022"
    },
    {
      titre: "Apprendre à coder",
      image: "/img/blog/technos.png",
      date: "Publié le 12 juillet 2022"
    }
  ];

  return (
    <>
      {/* Bannière */}

      <section
        style={{
          backgroundImage: "url('/img/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100px"
        }}
      />

      {/* Titre */}

      <section className="container py-5">

        <h1 className="text-center display-4">
          BLOG
        </h1>

        <p className="text-center fs-4">
          Retrouvez ici quelques articles sur le développement web.
        </p>

        <div
          className="mx-auto bg-primary mb-5"
          style={{
            width: "300px",
            height: "4px"
          }}
        ></div>

        {/* Articles */}

        <div className="row g-4">

          {articles.map((article, index) => (

            <div key={index} className="col-md-4">

              <div className="card h-100">

                <img
                  src={article.image}
                  className="card-img-top"
                  alt={article.titre}
                />

                <div className="card-body">

                  <h3 className="card-title">
                    {article.titre}
                  </h3>

                  <p className="card-text">
                    Some quick example text to build on the
                    card title and make up the bulk of the
                    card's content.
                  </p>

                  <button className="btn btn-primary">
                    Lire la suite
                  </button>

                </div>

                <div className="card-footer">

                  <small className="text-muted">
                    {article.date}
                  </small>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}

export default Blog;