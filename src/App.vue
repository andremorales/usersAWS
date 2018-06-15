<template>
<div id="app">
  <v-app>
      <v-toolbar dark>
        <v-toolbar-title>Cadastro de Usuarios</v-toolbar-title>
      </v-toolbar>
      <main>
        <v-container fluid>
            <v-fade-transition mode="out-in">
              <router-view></router-view>
            </v-fade-transition>
        </v-container>
      </main>      
  </v-app>
</div>
 </template>
<script>
export default {
  name: "App"
};
</script>
