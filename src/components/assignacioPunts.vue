<template>
  <div class="flex justify-center">
	
	<div class="flex column">
		<h4>Assignacio punts</h4>
		
		<div class="flex row inline no-wrap items-center justify-around q-mb-md">
		  <div class="col-8 q-mr-md "> Punts resposta única</div>
		  <div>
		  	<q-input type="number" v-model = "respostaUnica" class="clInput "/>
		  </div>
		</div>

		<div class="flex row inline no-wrap items-center ">
		  <div class=" col-8 q-mr-md "> Punts resposta repetida</div>
		  <div class=" ">
		  	<q-input type="number" v-model="respostaRepetida" class="clInput "/>
		  </div>
		</div>
<!-- 
		<div class="flex row inline no-wrap items-center justify-around">
			<div>
				<q-btn label="canviar valors" rounded color="positive" push rounded class="" @click="mCanviPuntuacio"/>
			</div>
				<q-btn label="cancelar" rounded color="negative" push rounded class="" @click=""/>
			</div>
		</div>

 -->	</div>

  </div>
</template>

<script>
//import {mapState, mapActions} from 'vuex';

export default {
	// name: 'ComponentName',
	created () {
		//this.respostaUnica = objAssignacioPunts.resposta_unica;
		//this.respostaRepetida = objAssignacioPunts.resposta_repetida;
	},

	data () {
		return {
			//respostaUnica: 0,
			//respostaRepetida: 0
		}
	},
	computed: {
/*
	  	...mapState({
	    	objAssignacioPunts: state => state.example.assignacioPunts,
	    	valRespostaUnica: state => state.example.assignacioPunts.resposta_unica
		}),
*/
		respostaUnica: {
			get () {
				return this.$store.state.example.assignacioPunts.resposta_unica
			},
 			set (value) {
				this.$store.commit('example/mutCanviPuntuacio', {tipus: 'resposta_unica', punts: value})
			}
		},


		respostaRepetida: {
			get () {
				return this.$store.state.example.assignacioPunts.resposta_repetida
			},
 			set (value) {
				this.$store.commit('example/mutCanviPuntuacio', {tipus: 'resposta_repetida', punts: value})
			}
		},





	},
/*
	methods: {
		...mapActions('example', [
			"actCanviPuntuacio"
		]),

		mCanviPuntuacio: function(){
			//this.actCanviPuntuacio(this.respostaUnica, "resposta_unica");
			//this.actCanviPuntuacio(this.respostaRepetida, "resposta_repetida");
		}

	}
*/

}
</script>

<style scoped>
.clInput {
	width: 40%;
	text-align: center;
}
.clDiv{
	border: 1px solid blue;
	/*text-align: left;*/
}
</style>
