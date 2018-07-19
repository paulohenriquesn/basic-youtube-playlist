adicionarVideo = () => {
	link = document.getElementById('url').value;
	playlist = document.getElementById('playlist').value;
	if(link === "" || playlist ===""){alert('Porfavor prencha todos campos!');}else{
	var Video = document.createElement('iframe');
	Video.width = "150";
	Video.height="150";

	if(link.substr(0,5) == "http:") {
	id = link.substr(31,link.lenght);
	Video.id = "video" + id;
	Video.src = "https://www.youtube.com/embed/" + id;
	document.getElementById('div' + playlist).appendChild(Video);
	deletar = document.createElement("button");
	deletar.innerHTML = "Deletar";
	deletar.setAttribute('class','btn btn-danger');
	deletar.onclick = () => {
		document.getElementById('video' + id).remove();
	}
	}else if(link.substr(0,5) == "https") {
	id = link.substr(32,link.lenght);
	Video.id = "video" + id;
	Video.src = "https://www.youtube.com/embed/" + id;
	document.getElementById('div' + playlist).appendChild(Video);
	deletar = document.createElement("button");
	deletar.innerHTML = "Deletar";
	deletar.setAttribute('class','btn btn-danger');
	deletar.onclick = () => {
		document.getElementById('video' + id).remove();
		deletar.remove();
	}
	}
	document.getElementById('div' + playlist).appendChild(deletar);
}
}

criarPlaylist = () => {
	nome = document.getElementById("playlist").value;
	if(nome ==="") {alert('Porfavor prencha o nome da playlist!');}else{
	var playlist = document.createElement('div');	
	playlist.id = "div" + nome;
	playlist.style = "border:20px solid #2eb9ce;";
	document.getElementById("centro").appendChild(playlist);
	var name = document.createElement('h1');
	var nameD = document.createTextNode(nome + " Playlist");
	name.appendChild(nameD);
	document.getElementById("div" + nome).appendChild(name);
}
}

deletarPlaylist = () => {
	nome = document.getElementById("playlist").value;
	if(nome ==="") {alert('Porfavor prencha o nome da playlist!');}else{
		document.getElementById("div" + nome).remove();
	}
}