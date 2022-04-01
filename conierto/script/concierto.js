var opciones_conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
{nombre:"Barón Rojo", valor:"baron", precio:80},
{nombre:"Iron Butterfly", valor:"iron", precio:120}
]
function crearSelect(){
	var div1= document.getElementById("div1");
	var select = document.createElement("select");
	div1.appendChild(select);

	for(i=0;i<opciones_conciertos.length;i++){
		var opcion = document.createElement("option");
		select.appendChild(opcion);
		opcion.value=(opciones_conciertos[i].valor);
		opcion.innerHTML=(opciones_conciertos[i].nombre);
	}
	select.id="slt";
	select.addEventListener("change",cambiarParrafo);
}


function cambiarParrafo(){
	if(document.getElementsByTagName("p")[0]!=null){
	document.getElementsByTagName("p")[0].remove();	
	}


	var div2= document.getElementById("div2");
	
	var select=document.getElementById("slt");

	

	for(i=0;i<opciones_conciertos.length;i++){
		if(select.value==opciones_conciertos[i].valor){
			var parrafo = document.createElement("p");
				div2.appendChild(parrafo);
			parrafo.innerHTML=("El concierto de "+opciones_conciertos[i].nombre+" vale "+opciones_conciertos[i].precio+"€");	
				
			
		}
	}
	
	




}
