$(function(){
	$('#enviar-cotizacion').on("click", function(){
		var data = {
			"nombreCompleto": $('#nombre-completo').val(),
			"rut": $('#rut').val(),
			"correo": $('#correo').val(),
			"fechaNacimiento": $('#fecha-nacimiento').val(),
			"sexo": $('input[name=sexo]:checked').val(),
			"numeroCargas": $('#numero-cargas').val(),
			"detalleCargas": $('#cargas-detalle').val(),
			"renta": $('#renta').val(),
			"comuna": $('#comuna').val(),
			"telefono": $('#telefono').val(),
			"celular": $('#celular').val(),
			"isapreActual": $('#isapre-actual').val(),
			"cotizacionActual": $('#cotizacion-actual').val(),
			"cotizacionActualMoneda": $('input[name=cotizacion-moneda]:checked').val(),
			"isaprePreferencia": $('input[name=isapre-preferencia]:checked').val(),
			"clinicaPreferencia": $('input[name=clinica-preferencia]:checked').val(),
			"beneficioPreferencia": $('input[name=beneficio-preferencia]:checked').val() 
		}

		var proceed = true;
		var error = "sin errores";
		
		if (data.isapreActual == "-1"){
			$('#isapre-actual').focus();
			proceed = false;
			error = "Debe seleccionar a que isapre pertenece en la actualidad";
		}

		if (data.telefono == "" && data.celular == ""){
			$('#telefono').focus();
			proceed = false;
			error = "Debe ingresar un teléfono y/o celular de contacto";
		}

		if (data.comuna == ""){
			$('#comuna').focus();
			proceed = false;
			error = "Debe ingresar su comuna";
		}

		if (data.renta == ""){
			$('#renta').focus();
			proceed = false;
			error = "Debe ingresar su renta imponible";
		}

		if (data.fechaNacimiento == ""){
			$('#fecha-nacimiento').focus();
			proceed = false;
			error = "Debe ingresar su fecha de nacimiento"
		}

		if (data.correo == ""){
			$('#correo').focus();
			proceed = false;
			error = "Debe ingresar su correo electrónico";
		}

		//TODO: validacion mas profunda rut
		if (data.rut == ""){
			$('#rut').focus();
			proceed = false;
			error = "Debe ingresar su rut sin puntos y con guión";
		}

		if (data.nombreCompleto == ""){
			$('#nombre-completo').focus();
			proceed = false;
			error = "Debe ingresar su nombre completo";
		}

		if (!proceed)
			alert(error);
		else{
			$('#cotizacion-resumen-nombre').text(data.nombreCompleto);
			$('#cotizacion-resumen-rut').text(data.rut);
			$('#cotizacion-resumen-correo').text(data.correo);
			$('#cotizacion-resumen-fecha-nacimiento').text(data.fechaNacimiento);
			$('#cotizacion-resumen-sexo').text(data.sexo);
			$('#cotizacion-resumen-numero-cargas').text(data.numeroCargas);
			$('#cotizacion-resumen-detalle-cargas').text(data.detalleCargas);
			$('#cotizacion-resumen-renta').text(data.renta);
			$('#cotizacion-resumen-comuna').text(data.comuna);
			$('#cotizacion-resumen-telefono').text(data.telefono);
			$('#cotizacion-resumen-celular').text(data.celular);
			$('#cotizacion-resumen-isapre-actual').text(data.isapreActual);
			$('#cotizacion-resumen-cotizacion-actual').text(data.cotizacionActual);
			$('#cotizacion-resumen-cotizacion-actual-moneda').text(data.cotizacionActualMoneda);
			$('#cotizacion-resumen-isapre-preferencia').text(data.isaprePreferencia);
			$('#cotizacion-resumen-clinica-preferencia').text(data.clinicaPreferencia);
			$('#cotizacion-resumen-beneficio-preferencia').text(data.beneficioPreferencia);

			$('#cotizacion-resumen').modal('show');
		}
	});
});

function sendFormCotizacion(){
	var data = {
		"nombreCompleto": $('#nombre-completo').val(),
		"rut": $('#rut').val(),
		"correo": $('#correo').val(),
		"fechaNacimiento": $('#fecha-nacimiento').val(),
		"sexo": $('input[name=sexo]:checked').val(),
		"numeroCargas": $('#numero-cargas').val(),
		"detalleCargas": $('#cargas-detalle').val(),
		"renta": $('#renta').val(),
		"comuna": $('#comuna').val(),
		"telefono": $('#telefono').val(),
		"celular": $('#celular').val(),
		"isapreActual": $('#isapre-actual').val(),
		"cotizacionActual": $('#cotizacion-actual').val(),
		"cotizacionActualMoneda": $('input[name=cotizacion-moneda]:checked').val(),
		"isaprePreferencia": $('input[name=isapre-preferencia]:checked').val(),
		"clinicaPreferencia": $('input[name=clinica-preferencia]:checked').val(),
		"beneficioPreferencia": $('input[name=beneficio-preferencia]:checked').val() 
	}

	
	console.log(data);

	$.post("./send_cotizacion.php", data, function(response){
		alert(response.msg);
	}, "json");
}

function sendFormContacto(){
	var data = {
		"nombreCompleto": $('#contacto-nombre-completo').val(),
		"rut": $('#contacto-rut').val(),
		"correo": $('#contacto-correo').val(),
		"fechaNacimiento": $('#contacto-fecha-nacimiento').val(),
		"sexo": $('input[name=contacto-sexo]:checked').val()
	}

	var proceed = true;
	var error = "sin errores";

	if (data.fechaNacimiento == ""){
		$('#contacto-fecha-nacimiento').focus();
		proceed = false;
		error = "Debe ingresar su fecha de nacimiento";
	}

	if (data.correo == ""){
		$('#contacto-correo').focus();
		proceed = false;
		error = "Debe ingresar su correo electrónico"
	}

	if (data.rut == ""){
		$('#contacto-rut').focus();
		proceed = false;
		error = "Debe ingresar su rut sin puntos y con guión";
	}

	if (data.nombreCompleto == ""){
		$('#contacto-nombre-completo').focus();
		proceed = false;
		error = "Debe ingresar su nombre completo";
	}

	//console.log(data);

	
	if (!proceed)
		alert(error);
	else{
		$.post("./send_contacto.php", data, function(response){
			alert(response.msg);
		}, "json");
	}
}