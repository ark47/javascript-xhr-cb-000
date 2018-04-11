function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(this.response);

  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '"onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`

  document.getElementById("repositories").innerHTML = repoList;
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/ark47/repos');
  req.send();
}
