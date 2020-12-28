<template>
	<div class="flex column">
		<h2>{{objLletra.lletra}}</h2>

		<div v-for="(obj, index) in objLletra.categories" class="flex justify-around items-center q-mb-md">
			<cmp_resposta :index="index"></cmp_resposta>
		</div>

	</div>
</template>

<script>
import { mapState } from 'vuex';
import cmp_resposta from "components/resposta";

export default {
  // name: 'ComponentName',
  	components: {
  		cmp_resposta
  	},

  	created () {
  		this.objLletra = this.lletres[this.indexArrayLletres]
  	},

	data () {
		return {
			objLletra: {}
		}
	},

	computed: {
	  	...mapState({
	    	lletres: state => state.example.lletres,
	    	indexArrayLletres: state => state.example.indexArrayLletres
		})
	},
}
</script>

<style>
	.clDiv {
		border: 1px solid gray;
	}
	h2 {
		border: 1px solid blue;
		text-align: center;
		font-weight: bolder;
		margin-top: 1px;
	}

</style>
