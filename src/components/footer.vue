<template>
    <q-layout-footer v-model="mostrar" reveal class="flex justify-center clFooter">
		
		<div v-if="pagina == 'pIndex'" class="q-py-sm">
			Total punts: &nbsp; {{sumatoriPuntsTotal}}
		</div>

		<div v-if="pagina == 'pRespostes'" class="q-py-sm">
			Total punts lletra {{sumatoriPuntsLletra.lletra}}: &nbsp; {{sumatoriPuntsLletra.puntsLletra}}
		</div>

    </q-layout-footer></template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  // name: 'ComponentName',

	data () {
		return {
			//mostrar: null
		}
	},


	computed: {

	  	...mapState({
	    	pagina: state => state.example.pagina,
	    	indexArrayLletres: state => state.example.indexArrayLletres
		}),
		
		mostrar: function(){
			return (this.pagina = "pIndex" || this.pagina == "pRespostes") ? true : false;
		},


	  	...mapGetters('example',[
	  		'sumatorisPuntsLletres',
	  		'sumatoriPuntsLletra',
	  		'sumatoriPuntsTotal'
	  	])




	},


}
</script>

<style>
.clFooter{
  background-color: black;
  color: yellow;
}
</style>
