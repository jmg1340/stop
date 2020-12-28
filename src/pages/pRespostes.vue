<template>
  <q-page padding>
    <cmp_respostes></cmp_respostes>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';
import cmp_respostes from "components/respostes"
export default {
  // name: 'pageName',
	data () {
		return {}
	},

	created () {
		this.mMostrarFooter();
	},

	components: {
		cmp_respostes,
	},

	methods:{
		...mapActions('example',[
		    'actMostrarFooter',
		  ]),

		
		mMostrarFooter: function(){
			this.actMostrarFooter ("pRespostes");
		}
	}

}
</script>

<style>
</style>
