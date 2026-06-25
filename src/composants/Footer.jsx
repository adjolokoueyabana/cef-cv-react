import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-light py-5">

        <div className="container">

          <div className="row">

            {/* Coordonnées */}

            <div className="col-md-3">

              <h5 className="fw-bold">
                John Doe
              </h5>

              <p className="mb-1">
                40 Rue Laure Diebold
              </p>

              <p className="mb-1">
                69009 Lyon, France
              </p>

              <p>
                Téléphone : 06 20 30 40 50
              </p>

              <div className="d-flex gap-3 fs-2">

                <a href="#">
                  <i className="fa-brands fa-github text-dark"></i>
                </a>

                <a href="#">
                  <i className="fa-brands fa-twitter text-dark"></i>
                </a>

                <a href="#">
                  <i className="fa-brands fa-linkedin text-dark"></i>
                </a>

              </div>

            </div>

            {/* Liens utiles */}

            <div className="col-md-3">

              <h5 className="fw-bold">
                Liens utiles
              </h5>

              <ul className="list-unstyled">

                <li>
                  <Link to="/"> › Accueil</Link>
                </li>

                <li>
                  <Link to="/"> › À propos</Link>
                </li>

                <li>
                  <Link to="/services"> › Services</Link>
                </li>

                <li>
                  <Link to="/contact"> › Me contacter</Link>
                </li>

                <li>
                  <Link to="/mentions-legales">
                    › Mentions légales
                  </Link>
                </li>

              </ul>

            </div>

            {/* Réalisations */}

            <div className="col-md-3">

              <h5 className="fw-bold">
                Mes dernières réalisations
              </h5>

              <ul className="list-unstyled">

                <li> › CV en ligne </li>

                <li> › Cahier des charges </li>

                <li> › Espace commentaire </li>

              </ul>

            </div>

            {/* Articles */}

            <div className="col-md-3">

              <h5 className="fw-bold">
                Mes derniers articles
              </h5>

              <ul className="list-unstyled">

                <li>› Coder son site en HTML/CSS</li>

                <li>› Vendre ses produits sur le web</li>

                <li>› Se positionner sur Google</li>

              </ul>

            </div>

          </div>

        </div>

      </footer>

      {/* Barre du bas */}

      <div className="bg-dark text-white text-center py-3">

        © Designed by John Doe

      </div>
    </>
  );
}

export default Footer;