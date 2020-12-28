<template>
  <div class="">
	<h4 data-v-f3f3eg9 class="flex justify-center text-bold">Categories</h4>
	

		<div class="flex row no-wrap items-center justify-between q-mb-lg">
			<q-input v-model="novaCategoria" float-label="Nova categoria" clearable color="positive" class=""/>
			
			<q-btn label="afegir" rounded outline class="q-ml-md" color="positive" @click="mAfegirCategoria"/>
		
		</div>

		<div class="flex column">
			<div v-for="(categoria, index) in categories" :key="index" class="clCategoria q-pa-sm flex justify-between items-center">

				<div>
					{{categoria}}
				</div>
				<div class="flex row inline no-wrap ">
					<div class="flex row q-mr-md">
						<q-btn icon="arrow_drop_up" color="green" dense class="" @click="mPujarCategoria(index)"
							v-if="index > 0"/>
						<q-btn icon="arrow_drop_down" color="green"  dense class="q-ml-sm" @click="mBaixarCategoria(index)"
							v-if="index < (categories.length -1)"/>
					</div>

					<q-btn icon="cancel" color="deep-orange"  dense class="q-ml-md" @click="mEliminarCategoria(index)"/>
				</div>

			</div>
		</div>

  </div>
</template>




<script>
import { mapState, mapActions} from 'vuex';


export default {
  // name: 'ComponentName',
	data () {
		return {
			novaCategoria: ""
		}
	},
	computed: {
	  	...mapState({
	    	categories: state => state.example.categories
		})
	},

	methods: {
		...mapActions('example',[
		    'actAfegirCategoria',
		    'actEliminarCategoria',
		    'actPujarBaixarCategoria'
		  ]),
		mAfegirCategoria: function(){
			this.actAfegirCategoria(this.novaCategoria);
			this.novaCategoria = "";
		},
		mEliminarCategoria: function(categoria){
			this.actEliminarCategoria(categoria);
		},
		mPujarCategoria: function(index){
			this.actPujarBaixarCategoria({index: index, accio: "pujar"});
		},
		mBaixarCategoria: function(index){
			this.actPujarBaixarCategoria({index: index, accio: "baixar"});
		},

	}

/*
	    ...mapActions({
	      afegir: 'module-example/actions/afegirCategoria', // map `this.afegir()` to `this.$store.dispatch('agegirCategoria', categoria)`

	      // `mapActions` also supports payloads:
	      eliminar: 'actions/eliminarCategoria' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
	    }),

*/
	    //afegir: function(categoria) {this.afegirCategoria}
	

}
</script>

<style >
	h4[data-v-f3f3eg9] {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.clCategoria{
		border: 1px solid blue;
		/*background-color: lightblue;*/
	}

</style>
