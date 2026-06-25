import { Helmet } from "react-helmet-async";

function MentionsLegales() {
  return (
    <section className="container py-5">
      <Helmet>
        <title>Mentions légales - John Doe</title>

        <meta
          name="description"
          content="Mentions légales du site John Doe."
        />

        <meta
          name="robots"
          content="noindex, nofollow"
        />
      </Helmet>

      <h1 className="text-center display-3">
        MENTIONS LÉGALES
      </h1>

      <div
        className="bg-primary mx-auto my-4"
        style={{
          width: "280px",
          height: "4px"
        }}
      ></div>

      <div
        className="accordion"
        id="accordionMentions"
      >

        {/* ÉDITEUR */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#editeur"
            >
              Éditeur du site
            </button>

          </h2>

          <div
            id="editeur"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionMentions"
          >

            <div className="accordion-body">

              <h2>John Doe</h2>

              <p className="mb-1">
                📍 40 Rue Laure Diebold
              </p>

              <p className="mb-3">
                69009 Lyon, France
              </p>

              <p className="mb-1">
                📱 06 20 30 40 50
              </p>

              <p>
                ✉️ john.doe@gmail.com
              </p>

            </div>

          </div>

        </div>

        {/* HÉBERGEUR */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#hebergeur"
            >
              Hébergeur
            </button>

          </h2>

          <div
            id="hebergeur"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >

            <div className="accordion-body">

              <h2>Always Data</h2>

              <p className="mb-1">
                91 rue du Faubourg Saint Honoré
              </p>

              <p className="mb-3">
                75008 Paris
              </p>

              <p>
                🌐
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noreferrer"
                  className="ms-2"
                >
                  www.alwaysdata.com
                </a>
              </p>

            </div>

          </div>

        </div>

        {/* CRÉDITS */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#credits"
            >
              Crédits
            </button>

          </h2>

          <div
            id="credits"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >

            <div className="accordion-body">

              <h3>Crédits</h3>

              <p>
                Ce site a été réalisé dans le cadre
                d'un exercice de formation au développement web.
              </p>

              <p>
                Les images utilisées sur ce site
                proviennent de :
              </p>

              <a
                href="https://pixabay.com/fr/"
                target="_blank"
                rel="noreferrer"
              >
                Pixabay
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MentionsLegales;