<template>
  <q-page padding >
    <cmp_assignacioPunts /><!-- content -->
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';
import cmp_assignacioPunts from "components/assignacioPunts";

export default {
	name: 'pAssignacioPunts',
	components: {cmp_assignacioPunts},
	
	created () {
		this.mMostrarFooter();
	},

	methods:{
		...mapActions('example',[
		    'actMostrarFooter',
		  ]),

		
		mMostrarFooter: function(){
			this.actMostrarFooter ("assignacioPunts");
		}
	}


}
</script>

<style>
</style>
