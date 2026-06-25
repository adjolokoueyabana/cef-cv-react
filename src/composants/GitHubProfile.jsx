function GitHubProfile({ profil }) {
  return (
    <div className="card p-4">

      <img
        src={profil.avatar_url}
        alt={profil.name}
        width="150"
      />

      <h2>{profil.name}</h2>

      <p>{profil.bio}</p>

      <p>
        Dépôts : {profil.public_repos}
      </p>

      <p>
        Followers : {profil.followers}
      </p>

    </div>
  );
}

export default GitHubProfile;