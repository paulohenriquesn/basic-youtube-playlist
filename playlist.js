try { 
var x = JSON.parse(decodeURI(window.location.search.substr(1)));
}
catch {}

playlists = [

]

$("#urlplaylist").text(window.location.href);


adicionarVideo = (link,playlist,type) => {

	if(playlists.length >0){
	save = 0;
	for(x=0;x<playlists.length;x++){
		if(playlists[x].title == playlist){
			save == x;
		}
	}
}

	if(link === "" || playlist ===""){alert('Porfavor prencha todos campos!');}else{
	if(link.substr(0,5) == "http:") {
	id = link.substr(31,link.length);
	$("#div" + playlist).append("<li><iframe src='https://www.youtube.com/embed/" + id + "'</iframe></li>");
	deletar = document.createElement("button");
	deletar.innerHTML = "Deletar";
	deletar.setAttribute('class','btn btn-danger');
	deletar.setAttribute('id','video' + id + 'btn');
	document.getElementById('div' + playlist).appendChild(deletar);
	
	try{
	playlists[save].links.push(id);
	$("#urlplaylist").text(decodeURI(window.location.href + "?" + JSON.stringify(playlists)));
	$("#urlplaylist").attr('href',decodeURI(window.location.href + "?" + JSON.stringify(playlists)));
	}catch{}

	$(document).ready(function(){
		$(document).ready(function(){
			$("button").click(function(event){
				
					$('#' + event.target.id).remove();
					$('#' + event.target.id.substr(0,16)).remove();
			});
		});
});

	
	}else if(link.substr(0,5) == "https") {
	id = link.substr(32,link.length);
	$("#div" + playlist).append("<li id='video" + id + "'><iframe src='https://www.youtube.com/embed/" + id + "'</iframe></li>");
	deletar = document.createElement("button");
	deletar.innerHTML = "Deletar";
	deletar.setAttribute('class','btn btn-danger');
	deletar.setAttribute('id','video' + id + 'btn');
	document.getElementById('div' + playlist).appendChild(deletar);
	
	try{
		playlists[save].links.push(id);
		$("#urlplaylist").text(decodeURI(window.location.href + "?" + JSON.stringify(playlists)));
		$("#urlplaylist").attr('href',decodeURI(window.location.href + "?" + JSON.stringify(playlists)));
		}catch{}

	$(document).ready(function(){
		$(document).ready(function(){
			$("button").click(function(event){
			
					$('#' + event.target.id).remove();
					$('#' + event.target.id.substr(0,16)).remove();
			});
		});
});

}

}
try{
	$("#urlplaylist").text(decodeURI(window.location.href + "?" + JSON.stringify(playlists)));
	$("#urlplaylist").attr('href',decodeURI(window.location.href + "?" + JSON.stringify(playlists)));
}catch{}
}

criarPlaylist = (nome,type) => {
	if(nome ==="") {alert('Porfavor prencha o nome da playlist!');}else{
	var playlist = document.createElement('div');	
	playlist.id = "div" + nome;
	playlist.style = "border:20px solid #2eb9ce;";
	document.getElementById("centro").appendChild(playlist);
	var name = document.createElement('h1');
	var nameD = document.createTextNode(nome + " Playlist");
	name.appendChild(nameD);
	document.getElementById("div" + nome).appendChild(name);
	if(type == 5){
	playlists.push({title: nome,links: []});
	}
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
		criarPlaylist(x[a].title,0);
	for(i=0; i< x[a].links.length;i++){
		adicionarVideo("https://www.youtube.com/watch?v=" + x[a].links[i],x[a].title);
	}
	}
}

} catch {}