/*
export function someAction (context) {
}
*/

// ========== CATEGORIES =========
export function actAfegirCategoria (context, categoria) {
	console.log("ACTION afegirCategoria. Categoria=" + categoria);
	context.commit("mutAfegirCategoria", categoria);
}


export function actEliminarCategoria (context, categoria) {
	context.commit("mutEliminarCategoria", categoria);
}

export function actPujarBaixarCategoria (context, payload) {
	console.log("ACTION PujarBaixarCategoria.");
	context.commit("mutPujarBaixarCategoria", payload);
}


// ========= ASSIGNACIO PUNTS =========
export function actCanviPuntuacio (context, punts, tipus){
	context.commit( "mutCanviPuntuacio", punts, tipus);
}

// ========= AFEGIR NOVA LLETRA =========
export function actAfegirObjLletra (context, novalletra){
	console.log("estic a ACT_AFEGIR_OBJ_LLETRA");

	var array = [];
	//console.log("context.state.categories.length: " + context.state.categories.length);
	for (var i=0; i < context.state.categories.length; i++) {
		var objCategoria = {
			nomCategoria: context.state.categories[i],
			resposta: "",
			punts: 0
		};
		array.push(objCategoria);
	}
	//console.log("array.length: " + array.length);

	var objLletra = {
		lletra: novalletra,
		categories: array
	}

	//console.log("JSON.stringify(objLletra): " + JSON.stringify(objLletra));

	context.commit( "mutAfegirNovaLletra", objLletra);
}


// ====== LLISTAT LLETRES ========
export function actIndexArrayLletres (context, index) {
	context.commit("mutIndexArrayLletres", index);
}


// ====== LLISTAT REPOSTA ========
export function actPosarPunts (context, payload) {
	console.log("Estic a la ACTION: actPosarPunts");

	switch (payload.tipusResposta) {
		case "resposta_unica":
			console.log('payload: ' + JSON.stringify(payload));
			payload.punts = context.state.assignacioPunts.resposta_unica;
			console.log('payload despres de afegir propiestat "punts": ' + JSON.stringify(payload));
			break;
		case "resposta_repetida":
			payload.punts = context.state.assignacioPunts.resposta_repetida;
			break;
		default:
			payload.punts = 0;
	}

	context.commit("mutPosarPunts", payload);
}




// ***************** mostrar o no mostrar FOOTER ****************

export function actMostrarFooter (context, pagina) {
	context.commit("mutMostrarFooter", pagina);
}