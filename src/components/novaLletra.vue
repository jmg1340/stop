<template>
  <div class="flex row inline items-center justify-center">
	<q-input v-model="novaLletra" float-label="Nova lletra" upper-case/>
	<q-btn label="Jugar" rounded outline class="q-ml-md" color="positive" @click="mAfegirObjLletra"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  	name: 'novaLletra',

	data () {
		return {
			novaLletra: ""
		}
	},

	computed: {
	  	...mapState({
	    	lletres: state => state.example.lletres,
	    	// indexArrayLletres: state => state.example.indexArrayLletres
		})
	},

	methods: {

		...mapActions('example',[
		    'actAfegirObjLletra',
		    'actIndexArrayLletres'
		  ]),


		mAfegirObjLletra: function(){
			this.actAfegirObjLletra(this.novaLletra);
			
			this.actIndexArrayLletres(this.lletres.length -1);
			this.$router.push("/respostes");

			this.novaLletra = "";
		}

	}

}
</script>

<style>
</style>
