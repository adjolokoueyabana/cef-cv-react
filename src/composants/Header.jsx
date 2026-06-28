import { Link } from "react-router-dom";

function Header() {
  return (
    /* barre de navigation Bootstrap : <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       navbar : crée une barre de navigation Bootstrap
       navbar-expand-lg : menu horizontal sur PC, hamburger sur mobile
       navbar-dark : texte clair adapté aux fonds sombres
       bg-dark : fond sombre
    */
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          JOHN DOE
        </Link>
        {/* Bouton hamburger
            data-bs-toggle="collapse" : Cette instruction dit à Bootstrap quand on clique sur ce bouton,
            exécute le système Collapse. Le composant Collapse sert à afficher ou masquer un élément caché ou visible. 
            data-bs-target="#menu" : signifie que quand on clique sur le bouton, ouvre ou ferme l'élément ayant l'id menu.
        */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          {/* <span></span> : est vide mais Bootstrap lui applique automatiquement
           une image de hamburger ☰ à 3 traits verticals*/}
          <span className="navbar-toggler-icon"></span> 
        </button>

        {/* Menu caché sur mobile : <div className="collapse navbar-collapse" id="menu">*/}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto text-uppercase">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            {/*className="nav-item : est une classe Bootstrap qui gérer correctement l'espacement entre les liens*/}
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/realisations">
                Réalisations
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;