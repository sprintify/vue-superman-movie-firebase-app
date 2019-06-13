<template>
  <div class="columns is-multiline">
    <div class="card column is-4" v-for="movie in movies" :key="movie.id">
      <div class="card-image">
        <iframe :src="embedable(movie.url)" width="100%" height="200"></iframe>
      </div>
      <div class="card-content">{{ movie.title }}</div>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "TabMovie",
  props: {
    category: String
  },
  data() {
    return {
      movies: []
    };
  },
  firestore() {
    return {
      movies: db
        .collection("categories")
        .doc(this.$props.category)
        .collection("movies")
    };
  },
  methods: {
    embedable(url) {
      return "https://youtube.com/embed" + url.split("=")[1];
    }
  }
};
</script>
aqa