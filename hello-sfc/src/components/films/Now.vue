<template>
  <v-layout row wrap>
            <v-flex xs3 v-for="item in items" :key="item.id">
      <v-card class="ma-3">
        <v-img :src="`https://image.tmdb.org/t/p/h632/${item.poster_path}`"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="subheading mb-0">{{item.title}}</h3>
            <span v-for="genre in item.genre_ids" :key="genre" class="mr-1">{{getGenerNameById(genre)}}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      items: null,
      genres: [
        // {id: 53, name: "Action"},
        // {id: 878, name: "Horror"},
        // {id: 18, name: "Dram"},
        // {id: 27, name: "Fantazy"},
      ]
    }
  },
  created() {
    this.getData();
    this.getGenre();
  },
  methods: {
    getData() {
      const axios = require('axios');
      axios
        .get('https://mate-academy.github.io/vue-program/data/movierise-data.json')
        .then(res => {
          this.items = res.data.results;
          this.items.map(i => {
            return {
              id: i.id,
              title: i.title,
              poster_path: i.poster_path,
              vote_average: i.vote_average,
              release_date: i.release_date,
              genre_ids: i.genre_ids
            }
          });
        });
    },
    getGenre() {
      const axios = require('axios');
      axios
        .get('https://mate-academy.github.io/vue-program/data/movierise-genres.json')
        .then(res => {
          this.genres = res.data.genres;
          this.genres.map(g => {
            return {
              id: g.id,
              name: g.name
            }
          });
        });
    },
    // genreFilm() {
    //   console.log(this.items);
    //   console.log(this.genres);
    //   this.items.map(i => {
    //     i.genre_ids.find(f => {
    //       if(f === this.genres.find(g => g.id)) 
    //       return {
    //         id: f.id,
    //         name: g.name
    //       }
    //     });
    //   });
    // },
    getGenerNameById(genre) {
      // id = this.items.map(i => i.genre_ids.map(gi => gi));
      let genreName = "";
      if (this.genres.find(g => g.id === genre)) {
        genreName = this.genres.find(g => g.name);
      }
      console.log(genreName);
      return genreName;
    }
  }
}
</script>

<style>

</style>
