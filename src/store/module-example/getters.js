/*
export function someGetter (state) {
}
*/

export function sumatorisPuntsLletres (state) {
	var arrayPuntsLletra = [];

	for(var i=0; i <  state.lletres.length; i++) {
		var sumaPuntsLletra = 0;
		for (var j=0; j< state.lletres[i].categories.length; j++) {
			sumaPuntsLletra += state.lletres[i].categories[j].punts;
		}
		arrayPuntsLletra.push({lletra: state.lletres[i].lletra, puntsLletra: sumaPuntsLletra});
	}
	return arrayPuntsLletra;
}



/*
export function sumatoriPuntsLletra (state, getters) => (index) => {
	return getters.sumatorisPuntsLletres[index];
}
*/


export function sumatoriPuntsLletra (state, getters) {
	return getters.sumatorisPuntsLletres[state.indexArrayLletres]; 
} 
	




export function sumatoriPuntsTotal (state, getters) {
	var total = 0;
	for(var i=0; i <  getters.sumatorisPuntsLletres.length; i++) {
		total += getters.sumatorisPuntsLletres[i].puntsLletra;
	}
	return total;
}

