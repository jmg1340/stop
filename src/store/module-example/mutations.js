/*
export function someMutation (state) {
}
*/

// ========== CATEGORIES =========
export function mutAfegirCategoria (context, categoria) {
	console.log("MUTATION afegirCategoria. Categoria=" + categoria);
	context.categories.push( categoria );
}

export function mutEliminarCategoria (context, categoria) {
	console.log("MUTATION afegirCategoria. Categoria=" + categoria);
	context.categories.splice(categoria, 1);
}

export function mutPujarBaixarCategoria (context, payload) {
	console.log("MUTATION PujarBaixarCategoria.");
	var elementAMoure = context.categories.splice(payload.index, 1);
	if (payload.accio == 'pujar'){
		var elementADesplaçar = context.categories.splice(payload.index - 1, 1);
		context.categories.splice(payload.index -1, 0, elementAMoure[0]);
		context.categories.splice(payload.index, 0, elementADesplaçar[0]);

	} else {
		//[context.categories[payload.index], context.categories[payload.index+1]] = [context.categories[payload.index+1], context.categories[payload.index]];
		var elementADesplaçar = context.categories.splice(payload.index, 1);
		context.categories.splice(payload.index, 0, elementAMoure[0]);
		context.categories.splice(payload.index, 0, elementADesplaçar[0]);
	}

	console.log("\telementAMoure: " + elementAMoure[0]);
	console.log("\telementADesplaçar: " + elementADesplaçar[0]);
	console.log("\tcategories: " + context.categories);
}


// ========= ASSIGNACIO PUNTS =========
export function mutCanviPuntuacio (context, payload){
	console.log("tipus: " + payload.tipus);
	console.log("punts: " + payload.punts);
	context.assignacioPunts[payload.tipus] = payload.punts;
}

// ========= AFEGIR NOVA LLETRA =========
export function  mutAfegirNovaLletra(context, objLletra) {
	console.log("Estic a 'mutAfegirNovaLletra'");
	context.lletres.push(objLletra);
}

// ====== LLISTAT LLETRES ========
export function mutIndexArrayLletres (context, index) {
	context.indexArrayLletres = index;
}

// ====== RESPOSTA ========
export function mutResposta (context, payload) {
	context.lletres[payload.indexLletres].categories[payload.indexCategories].resposta = payload.resposta;
}

export function mutPosarPunts (context, payload) {
	context.lletres[payload.indexLletres].categories[payload.indexCategories].punts = payload.punts;
}




// ====== MOSTRAR / NO MOSTRAR FOOTER ========
export function mutMostrarFooter (context, pagina) {
	context.pagina = pagina;
}
