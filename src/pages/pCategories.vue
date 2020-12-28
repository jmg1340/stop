<template>
  <q-page padding class="flex items-start justify-center">
    <cmp_categories /> 
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';
import cmp_categories from "components/categories";

export default {
	name: 'pCategories',
	components: {cmp_categories},
	
	created () {
		this.mMostrarFooter();
	},

	methods:{
		...mapActions('example',[
		    'actMostrarFooter',
		  ]),

		
		mMostrarFooter: function(){
			this.actMostrarFooter ("categories");
		}
	}



  // name: 'PageName',
}
</script>

<style>
</style>
