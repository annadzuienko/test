<template>
    <div>
        <Header></Header>
        <Film></Film>
        <router-view></router-view>
        <footer>Socials</footer>
    </div>
</template>

<script>
import Header from './Header.vue';
import Film from './Film.vue';

export default {
    components: {
        Header,
        Film
    },
    data () {
      return {
        items: []
      }
    },
    mounted() {
        const axios = require('axios');
        axios
          .get('https://mate-academy.github.io/vue-program/data/movierise-data.json')
          .then(response => (this.items = response.data));
    }
}
</script>

<style>
    .link {
        margin: 10px;
        color: grey;
    }
    .link:hover {
        color: blue;
    }
</style>
