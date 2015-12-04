var inicio = function(){
	var parametros="";

	var entrar = function(){
		
		var docente = $("#txtDocente").val();
		var clave   = $("#txtClave").val();
	//	var cadena= 'http://intertec.itculiacan.edu.mx/intertecmovil/entrada.php?cadena='+docente+'-'+clave;
		parametros = "cadena="+docente+"-"+clave;

		$.ajax({
		  beforeSend: function(){
		  	console.log(parametros);
		  },
		  type: "GET",
			dataType: "json",
			url: "http://intertec.itculiacan.edu.mx/intertecmovil/entrada.php",
			data: parametros,

		  success: function(data){
		  	
		     if(data.respuesta){
		     	alert("si existe");
		     	$(".entradaUsuario").hide("slow");
		     	$("#btnmuestragrupos").show("slow");
		     }else{
		     	alert("No existe");
		     }
		  }
		});
	}
	
	var vergrupos = function(){
		$(".gruposDocente").toggle("show");
		console.log("HEY");
		$.ajax({
		  beforeSend: function(){
		  	console.log(parametros);
		  },
		  type: "GET",
			dataType: "json",
			url: "http://intertec.itculiacan.edu.mx/intertecmovil/grupos.php?",
			data: parametros,

		  /*success: function(data){
		  	console.log(data)
		  	console.log(data[0].clavegrupo);
		    console.log(data[0].clavemateria);


		    response = $.parseJSON(data);

			$(function() {
			    $.each(response, function(i, item) {
			        var $tr = $('<tr>').append(
			            $('<td>').text(item.clavegrupo),
			            $('<td>').text(item.clavemateria),
			            $('<td>').text(item.nombrecorto)
			        ); //.appendTo('#records_table');
			        console.log($tr.wrap('<p>').html());
			    });
			});
		  }*/
		  success: function (response) {
		        var trHTML = '';
		        $.each(response, function (i, item) {
		            trHTML += '<tr><td>' + item.clavegrupo + '</td><td>' + item.clavemateria + '</td><td>'+ item.nombrecorto+'</td><td>'+ item.nombremateria +'</td><td>' + item.horalunes + '</td><td>'  + item.horamartes  + '</td><td>' + item.horamiercoles +'</td><td>' + item.horajueves + '</td><td>' + item.horaviernes + '</td></tr>';
		        });
		        $('#tablaGrupos').append(trHTML);
		    }
		});

	}



	$("#btnmuestragrupos").on("click",vergrupos);
	$("#btnEntrar").on("click",entrar);
}
$(document).on("ready",inicio);