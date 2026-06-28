import { useEffect, useState } from "react";
import GitHubProfile from "../composants/GitHubProfile";



function Accueil() {

    {/* Récuperation des informations du profil GitHub via l'API.
        hooks (useState) : pour stocker le profil.
        hooks (useEffect) pour effectuer le chargement lors de l'ouverture de la page.*/}
    const [profil, setProfil] = useState(null);
    useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
        .then((response) => response.json())
        .then((data) => setProfil(data));
    }, []);

    const allerAPropos = () => {
        document.getElementById("apropos").scrollIntoView({
        behavior: "smooth"
    });
    };
    
  return (
    <>
      {/* HERO : image de fond + texte centré */}
      <section className="hero">
        <div className="overlay">

          <h1>Bonjour, je suis John Doe</h1>

          <h2>Développeur web full stack</h2>

          <button className="btn btn-primary btn-lg mt-3" onClick={allerAPropos}>
            En savoir plus
          </button>

        </div>
      </section>

      {/* Section À propos + Compétences */}
      <section id="apropos" className="container my-5">

        <div className="card shadow p-4">

          <div className="row">

            {/* TEXTE */}
            <div className="col-md-6">
              
              {/* Cette balise utilise plusieurs classes utilitaires Bootstrap pour mettre en forme le titre h2. */}
              <h2 className="mb-4 border-bottom border-primary pb-2">
                À propos
              </h2>

              <p>
                Passionné par l'informatique et les nouvelles technologies,
                j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
              </p>

              <p>
                Au cours de cette formation, j'ai acquis des bases solides
                pour travailler dans le domaine du <strong>développement web.</strong>
              </p>

              <p>
                Basé à Lyon, je suis en recherche d'une alternance afin
                de consolider ma formation de <strong>développeur web full stack.</strong>
              </p>

              <p>
                J'accorde une attention particulière à la qualité du code
                et aux bonnes pratiques du web.
              </p>

              {/* PROFIL GITHUB */}
              <h2 className="mb-4 border-bottom border-primary pb-2"> Profil GitHub </h2>
                {profil && <GitHubProfile profil={profil} />}

            </div>

            {/* IMAGE + COMPETENCES */}
            <div className="col-md-6">

              {/* IMAGE */}
              <img
                src="/img/john-doe-about.jpg"
                alt="John Doe"
                className="img-fluid rounded mb-3"
              />

              <h3>Mes compétences</h3>
              <p>HTML5 90%</p>

              {/* progress est une classe Bootstrap. Elle crée le conteneur de la barre de progression.
                  mb-3 = margin-bottom: 1rem; Cela ajoute un espace sous la barre.
                  progress-bar : crée la barre de progression;
                  bg-danger : la colore en rouge ;
                  bg-info   : la colore Bleu clair / Cyan;
                  bg-warning : la colore Jaune / Orange
                  width: "90%" : indique le niveau. */}
              <div className="progress mb-3"> 
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "90%" }}
                ></div>
              </div>

              <p>CSS3 80%</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-info"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <p>JAVASCRIPT 70%</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <p>PHP 60%</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "60%" }}
                ></div>
              </div>

              <p>REACT 50%</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "50%" }}
                ></div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Accueil;