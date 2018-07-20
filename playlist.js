try { 
var x = JSON.parse(decodeURI(window.location.search.substr(1)));
}
catch {}

adicionarVideo = (link,playlist) => {
	if(link === "" || playlist ===""){alert('Porfavor prencha todos campos!');}else{
	if(link.substr(0,5) == "http:") {
	id = link.substr(31,link.length);
	$("#div" + playlist).append("<li><iframe src='https://www.youtube.com/embed/" + id + "'</iframe></li>");
	deletar = document.createElement("button");
	deletar.innerHTML = "Deletar";
	deletar.setAttribute('class','btn btn-danger');
	deletar.setAttribute('id','video' + id + 'btn');
	document.getElementById('div' + playlist).appendChild(deletar);

	deletar.onclick = () => {
		document.getElementById('video' + id).remove();
		document.getElementById('video' + id + 'btn').remove();
	}
	
	}else if(link.substr(0,5) == "https") {
	id = link.substr(32,link.length);
	$("#div" + playlist).append("<li id='video" + id + "'><iframe src='https://www.youtube.com/embed/" + id + "'</iframe></li>");
	deletar = document.createElement("button");
	deletar.innerHTML = "Deletar";
	deletar.setAttribute('class','btn btn-danger');
	deletar.setAttribute('id','video' + id + 'btn');
	document.getElementById('div' + playlist).appendChild(deletar);

	deletar.onclick = () => {
		document.getElementById('video' + id).remove();
		document.getElementById('video' + id + 'btn').remove();
	}


}
}
}

criarPlaylist = (nome) => {
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
try {
for(a=0;a<x.length;a++){
	if(x[a].title != ""){
		criarPlaylist(x[a].title);
	for(i=0; i< x[a].links.length;i++){
		adicionarVideo("https://www.youtube.com/watch?v=" + x[a].links[i],x[a].title);
	}
	}
}

} catch {}