import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Footer() {

  // État permettant d'afficher ou non le bouton "Retour en haut"
  const [showTop, setShowTop] = useState(false);

  // Détection du défilement de la page
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage lorsque le composant est détruit
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  // Remonte la page en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="bg-body-secondary py-5">

        <div className="container">

          <div className="row gy-4">

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

              <div className="d-flex gap-3 fs-3">

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

                <li><Link to="/">› Accueil</Link></li>

                {/* La section "À propos" étant sur la page d'accueil */}
                <li>
                  <a href="/#apropos">› À propos</a>
                </li>

                <li>
                  <Link to="/services">› Services</Link>
                </li>

                <li>
                  <Link to="/realisations">› Réalisations</Link>
                </li>

                <li>
                  <Link to="/blog">› Blog</Link>
                </li>

                <li>
                  <Link to="/contact">› Contact</Link>
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
                Mes réalisations
              </h5>

              <ul className="list-unstyled">

                <li>› CV en ligne</li>

                <li>› Cahier des charges</li>

                <li>› Espace commentaire</li>

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

      {/* Copyright */}
      <div className="bg-dark text-white text-center py-3">

        © 2026 John Doe - Tous droits réservés.

      </div>

      {/* Bouton retour en haut */}
      {showTop && (

        <button
          className="btn btn-primary rounded-circle shadow"
          onClick={scrollToTop}
          title="Retour en haut"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            width: "55px",
            height: "55px",
            zIndex: 1000
          }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>

      )}

    </>
  );
}

export default Footer;