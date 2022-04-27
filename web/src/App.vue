<template>
  <div id="app">
    <v-bottom-navigation :value="nav" color="#00BCD4" style="background-color: #ddd">
      <router-link to="/" custom v-slot="{ navigate }">
        <v-btn  value="Home" @click="navigate">
          <span>Home</span>
        </v-btn>
      </router-link>
      <router-link to="/clients" custom v-slot="{ navigate }">
        <v-btn value="Clients" @click="navigate">
          <span>Clientes</span>
        </v-btn>
      </router-link>
    </v-bottom-navigation>

    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return {
      nav: "Home"
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
