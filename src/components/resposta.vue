<template>
  <div class="flex row inline no-wrap justify-between items-center q-mb-md clDiv">

	<div class="flex no-wrap items-center">
		<!-- <div class="q-pa-sm">{{obj.nomCategoria}}:</div> -->
		<div class="q-pa-sm"><q-input v-model="resposta" :stack-label="etiqueta" class="clInput q-px-sm" /></div>
	</div>
	<div class="flex column q-mr-sm" >
		<div class="clEtiqPunts">Punts:</div>
		<div class="">{{obj.punts}}</div>
	</div>
	<div>
		<div class="flex column clDiv">
			<q-btn label="unica" rounded outline color="positive" size="sm" @click="mPosarPunts('resposta_unica')"/>
			<q-btn label="repet." rounded outline color="orange" size="sm" @click="mPosarPunts('resposta_repetida')"/>
			<q-btn label="0 pts" rounded outline color="negative" size="sm" @click="mPosarPunts('zero_punts')"/>
		</div>
		
	</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';


export default {
  // name: 'ComponentName',
	props: [
		'index'   // index del array categories de l'objecte lletra
	],

  	created () {
  		this.obj = this.lletres[this.indexArrayLletres].categories[this.index]
  		this.etiqueta = this.lletres[this.indexArrayLletres].categories[this.index].nomCategoria;
  	},


	data () {
		return {
			obj: {},
			etiqueta: ""
		}
	},

	computed: {
	  	...mapState({
	    	lletres: state => state.example.lletres,
	    	indexArrayLletres: state => state.example.indexArrayLletres
		}),

		resposta: {
			get () {
				return this.$store.state.example.lletres[this.indexArrayLletres].categories[this.index].resposta
			},
 			set (value) {
				this.$store.commit('example/mutResposta', {indexLletres: this.indexArrayLletres, indexCategories: this.index, resposta: value})
			}
		}
	},

	methods:{
		...mapActions('example',[
		    'actPosarPunts',
		]),


		mPosarPunts: function(tipus_resposta){
			console.log("Estic al metode 'mPosarPunts'");
			this.actPosarPunts({indexLletres: this.indexArrayLletres, indexCategories: this.index, tipusResposta: tipus_resposta})
		}
	}
}
</script>

<style >
	.clInput {
		background-color: #ffeecc;
	}
	.clEtiqPunts {
		color: gray;
		font-size: 12px;
	}
</style>
