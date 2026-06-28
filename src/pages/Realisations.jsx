import { useState } from "react";

function Realisations() {

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <>
      {/* Bannière */}
      <section
        className="py-5 text-center text-white"
        style={{
          backgroundImage: "url('/img/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80px"
        }}
      >
      </section>

      {/* Portfolio */}

      <section className="container py-3">
        {/* mb-4 : signifie margin-bottom, Cela laisse un espace entre le titre et le paragraphe situé en dessous.
            bg-primary : couleur bleue Bootstrap.
            mx-auto : centre la ligne.
            width: "300px" : longueur de la ligne.
            height: "4px" : épaisseur.*/}
        <h1 className="text-center mb-3">
            PORTFOLIO
        </h1>

        <p className="text-center fs-5">
          Voici quelques-unes de mes réalisations
        </p>
    
        <div
        className="bg-primary mx-auto mb-4"
        style={{
            width: "300px",
            height: "3px"
        }}
        ></div>

        <div className="row g-4">

          {/* Projet 1 */}

          <div className="col-md-4">

            <div className="card h-50 shadow-sm">

              <img
                src="/images/cv.png"
                className="card-img-top"
                alt="CV en ligne"
                style={{
                    height: "250px",
                    objectFit: "cover",
                }}
                />

              <div className="card-body mt-4 text-center">

                <h3 className="h5">
                  CV en ligne
                </h3>

                <p>
                  Création d'un CV numérique responsive présentant mon parcours
                  et mes compétences.
                </p>

              </div>

              <div className="card-footer text-center">

                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(true)}
                >
                  Voir le projet
                </button>

              </div>

            </div>

          </div>

          {/* Projet 2 */}

          <div className="col-md-4">

            <div className="card h-50 shadow-sm">

              <img
                src="/images/cdc.png"
                className="card-img-top"
                alt="Cahier des charges"
                style={{
                    height: "250px",
                    objectFit: "cover",
                }}
              />

              <div className="card-body mt-4 text-center">

                <h3 className="h5">
                  Cahier des charges
                </h3>

                <p>
                  Analyse des besoins et rédaction d'un cahier des charges
                  complet pour une entreprise fictive.
                </p>

              </div>

              <div className="card-footer text-center">

                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal2(true)}
                >
                  Voir le projet
                </button>

              </div>

            </div>

          </div>

          {/* Projet 3 */}

          <div className="col-md-4">

            <div className="card h-50 shadow-sm">

              <img
                src="/images/communaute.png"
                className="card-img-top"
                alt="Espace commentaire"
                style={{
                    height: "250px",
                    objectFit: "cover",
                }}
              />

              <div className="card-body mt-4 text-center">

                <h3 className="h5">
                  Espace commentaire
                </h3>

                <p>
                  Espace interactif permettant aux visiteurs
                  de publier et consulter des commentaires.
                </p>

              </div>

              <div className="card-footer text-center">

                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal3(true)}
                >
                  Voir le projet
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MODALE 1 */}

      {showModal && (
        <div
          className="modal-backdrop-custom"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-custom"
            onClick={(e) => e.stopPropagation()}
          >

            <h3>Devoir appliqué - CV en ligne</h3>

            <img
              src="/images/cv.png"
              alt="CV en ligne"
              className="img-fluid mb-3"
            />

            <p>
              <strong>Date :</strong> 29/10/2024
            </p>

            <p>
              <strong>Technologies :</strong> HTML, CSS
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Fermer
            </button>

          </div>
        </div>
      )}

      {/* MODALE 2 */}

      {showModal2 && (
        <div
          className="modal-backdrop-custom"
          onClick={() => setShowModal2(false)}
        >
          <div
            className="modal-custom"
            onClick={(e) => e.stopPropagation()}
          >

            <h3>
              Devoir appliqué - Cahier des charges
            </h3>

            <img
              src="/images/cdc.png"
              alt="Cahier des charges"
              className="img-fluid mb-3"
            />

            <p>
              Entreprise Socketterie spécialisée dans les chaussettes
              artisanales dépareillées.
            </p>

            <p>
              <strong>Date :</strong> 05/02/2026
            </p>

            <p>
              <strong>Compétence :</strong> Analyse et rédaction.
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => setShowModal2(false)}
            >
              Fermer
            </button>

          </div>
        </div>
      )}

      {/* MODALE 3 */}

      {showModal3 && (
        <div
          className="modal-backdrop-custom"
          onClick={() => setShowModal3(false)}
        >
          <div
            className="modal-custom"
            onClick={(e) => e.stopPropagation()}
          >

            <h3>
              Devoir appliqué - Espace commentaire
            </h3>

            <img
              src="/images/communaute.png"
              alt="Espace commentaire"
              className="img-fluid mb-3"
            />

            <p>
              <strong>Date :</strong> 10/03/2026
            </p>

            <p>
              <strong>Technologies :</strong> HTML, CSS, JavaScript
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => setShowModal3(false)}
            >
              Fermer
            </button>

          </div>
        </div>
      )}

    </>
  );
}

export default Realisations;