<template>
	
	<div class="flex column ">

		<div class="flex row inline justify-around items-center">
			<div >Lletra</div>
			<div >Punts</div>
		</div>
		<!-- <div v-for="(objLletra, index) in lletres" class="flex row inline justify-around items-center"> -->
		<div v-for="(objLletra, index) in sumatorisPuntsLletres" class="flex row inline justify-around items-center">
			<div class="col-6 q-pa-sm clDiv"  @click="mostrarObjLletra(index)" >{{objLletra.lletra}}</div>
			<div class="col-6 q-pa-sm clDiv">{{objLletra.puntsLletra}}</div>
		</div>

	</div>

</template>

<script>
import { mapState, mapGetters, mapActions} from 'vuex';


export default {
  // name: 'ComponentName',
	data () {
		return {}
	},

	computed: {
/*
	  	...mapState({
	    	lletres: state => state.example.lletres
		}),
*/		
	  	...mapGetters('example',[
	  		'sumatorisPuntsLletres'
	  	])


	},

	methods: {
		...mapActions('example',[
		    'actIndexArrayLletres',
		]),


		mostrarObjLletra: function(indexLletra) {
			this.actIndexArrayLletres(indexLletra);
			this.$router.push("/respostes");
		}
	}
}
</script>

<style>
	.clDiv {
		border: 1px solid gray;
		text-align: center;
	}
</style>
