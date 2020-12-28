<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="tertiary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          joc del STOP
          <!-- <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Opcions</q-list-header>
        <q-item to='/'>
          <q-item-side icon="home" />
          <q-item-main label="Inici" />
        </q-item>
        <q-item to="/categories">
          <q-item-side icon="list" />
          <q-item-main label="Categories" />
        </q-item>
        <q-item to='/assignacioPunts'>
          <q-item-side icon="chat" />
          <q-item-main label="Assignacio punts" />
        </q-item>
        <q-item>
          <q-item-side icon="chat" />
          <q-item-main label="Eliminar lletres (per fer)" />
        </q-item>
<!--         
        <q-item to='/respostes'>
          <q-item-side icon="chat" />
          <q-item-main label="Respostes" />
        </q-item>
 -->
<!-- 
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
 -->
        
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <cmp_footer></cmp_footer>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import cmp_footer from "components/footer"

export default {
  name: 'MyLayout',

  components: {
    cmp_footer
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>

</style>
