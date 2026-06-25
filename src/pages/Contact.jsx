function Contact() {
  return (
    <section
      style={{
        backgroundImage: "url('/img/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "50px 0"
      }}
    >
      <div className="container">

        <div className="bg-light p-5 rounded shadow">

          {/* Titre */}

          <h1 className="text-center display-4 mb-4">
            ME CONTACTER
          </h1>

          <p className="text-center fs-4">
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>

          <div
            className="bg-primary mx-auto mb-5"
            style={{
              width: "300px",
              height: "4px"
            }}
          ></div>

          <div className="row">

            {/* FORMULAIRE */}

            <div className="col-lg-6">

              <h2 className="mb-4 border-bottom border-primary pb-2">
                Formulaire de contact
              </h2>

              <form>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre adresse email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sujet"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Votre message"
                  ></textarea>
                </div>

                <div className="text-center">

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                  >
                    Envoyer
                  </button>

                </div>

              </form>

            </div>

            {/* COORDONNÉES */}

            <div className="col-lg-6">

              <h2 className="mb-4 border-bottom border-primary pb-2">
                Mes coordonnées
              </h2>

              <p className="fs-5 mb-1">
                📍 40 Rue Laure Diebold, 69009 Lyon, France
              </p>

              <p className="fs-5 mb-4">
                📱 06 20 30 40 50
              </p>

              {/* Google Maps */}

              <iframe
                title="Carte"
                src="https://www.google.com/maps?q=40+Rue+Laure+Diebold+69009+Lyon&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;