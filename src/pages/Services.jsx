function Services() {
  return (
    <>
      {/* className=" py-5 " : p = padding; y = axe vertical (haut + bas); 5 = taille Bootstrap (48px) */}
      <section
        className="py-5 text-center text-white"
        style={{
          backgroundImage: "url('/img/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </section>

      {/* Services */}
      <section className="container py-3">

        <h1 className="text-center mb-3">
          MON OFFRE DE SERVICES
        </h1>

        <p className="text-center fs-5">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <div
        className="bg-primary mx-auto mb-4"
        style={{
            width: "300px",
            height: "3px"
        }}
        ></div>

        <div className="row g-4">

          {/* UX Design */}
          <div className="col-md-4">
            {/*Cette balise utilise plusieurs classes Bootstrap (et une classe personnalisée) 
                pour créer une carte de service.
                card : c'est une classe Bootstrap qui crée une carte.
                service-card : classe personnalisée pour tes effets CSS
                h-100 : les cartes occupent toute la hauteur disponible et restent alignées.
                shadow-sm : Ajoute une ombre légère.
                text-center : Centre horizontalement le texte.
                p-4 : ajoute du padding intérieur */}
            <div className="card service-card h-100 shadow-sm text-center p-4">

              <div className="mb-3">
                {/*avec Font Awesome, la balise <i> est surtout utilisée pour afficher des icônes.
                   fa-solid : Indique que l'on utilise une icône de la collection Solid de Font Awesome. 
                   fa-display : C'est le nom de l'icône.
                   fs-1 : Bootstrap propose plusieurs tailles (fs-1 = très grande; fs-2 = grande; ...)
                   text-primary : */}
                <i className="fa-solid fa-display fs-1 text-primary"></i>
              </div>

              <h3>UX Design</h3>

              <p>
                Création d'interfaces intuitives et ergonomiques
                afin d'offrir une expérience utilisateur optimale
                sur tous les supports.
              </p>

            </div>
          </div>

          {/* Développement Web
              col-md-4 : est une classe du système de grille de Bootstrap.
              col = colonne; md = écran moyen (medium); 4 = occupe 4 colonnes sur 12 
          */}
          <div className="col-md-4">
            <div className="card service-card h-100 shadow-sm text-center p-4">

              <div className="mb-3">
                <i className="fa-solid fa-code fs-1 text-primary"></i>
              </div>

              <h3>Développement Web</h3>

              <p>
                Conception de sites internet modernes,
                responsives et performants avec HTML,
                CSS, JavaScript, React et Bootstrap.
              </p>

            </div>
          </div>

          {/* SEO */}
          <div className="col-md-4">
            <div className="card service-card h-100 shadow-sm text-center p-4">

              <div className="mb-3">
                <i className="fa-solid fa-chart-line fs-1 text-primary"></i>
              </div>

              <h3>Référencement</h3>

              <p>
                Optimisation du contenu et de la structure
                des sites web pour améliorer leur visibilité
                sur les moteurs de recherche.
              </p>

            </div>
          </div>

        </div>

      </section>
    </>
  );
}

export default Services;