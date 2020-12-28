<template>
  <q-page class="flex items-start justify-center">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
	<div class="flex column">
		<cmp_novaLletra class="q-mb-md"></cmp_novaLletra>
		<cmp_llistatLletres></cmp_llistatLletres>
	</div>

	

  </q-page>
</template>

<style>
</style>

<script>
import { mapState, mapActions } from 'vuex';
import cmp_novaLletra from "components/novaLletra"
import cmp_llistatLletres from "components/llistatLletres"

export default {
	name: 'PageIndex',

	created () {
		this.mMostrarFooter();
	},

	components: {
		cmp_novaLletra,
		cmp_llistatLletres
	},

	data () {
		return {
			//nouObjLletra: {}
		}
	},

	computed: {
	  	...mapState({
	    	lletres: state => state.example.lletres,
	    	arrCategories: state => state.example.categories,
		})
	},

	methods:{
		...mapActions('example',[
		    'actMostrarFooter',
		  ]),


		mMostrarFooter: function(){
			this.actMostrarFooter ("pIndex");
		}
	}



}
</script>
