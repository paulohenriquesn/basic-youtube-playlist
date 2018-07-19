adicionarVideo = () => {
	link = document.getElementById('url').value;
	playlist = document.getElementById('playlist').value;
	if(link === "" || playlist ===""){alert('Porfavor prencha todos campos!');}else{
	var Video = document.createElement('iframe');
	Video.width = "150";
	Video.height="150";

	if(link.substr(0,5) == "http:") {
	id = link.substr(31,link.lenght);
	Video.src = "https://www.youtube.com/embed/" + id;
	document.getElementById('div' + playlist).appendChild(Video);
	}else if(link.substr(0,5) == "https") {
	id = link.substr(32,link.lenght);
	Video.src = "https://www.youtube.com/embed/" + id;
	document.getElementById('div' + playlist).appendChild(Video);
	}
}
}

criarPlaylist = () => {
	nome = document.getElementById('playlist').value;
	var playlist = document.createElement('div');	
	playlist.id = "div" + nome;
	document.getElementById("centro").appendChild(playlist);
	var name = document.createElement('h1');
	var nameD = document.createTextNode(nome + " Playlist");
	name.appendChild(nameD);
	document.getElementById("div" + nome).appendChild(name);

}
