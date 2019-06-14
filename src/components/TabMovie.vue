<template>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="movie in movies" :key="movie.id">
      <div class="card">
        <div class="card-image">
          <iframe
            :src="embedable(movie.url)"
            width="100%"
            height="200"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content">{{ movie.title }}</div>
        <div class="card-footer">
          <a
            @click="deleteMovie(movie)"
            class="card-footer-item button is-danger"
            >Delete</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "TabMovie",
  props: {
    category: String,
    categories: Array
  },
  data() {
    return {
      movies: []
    };
  },
  mounted() {
    if (this.$props.category === "Newest") {
      for (var i = 0; i < this.$props.categories.length; i++) {
        const categoryID = this.$props.categories[i].id;
        db.collection("categories")
          .doc(categoryID)
          .collection("movies")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(collection => {
              if (this.movies.length < 7) {
                this.movies.push({
                  title: collection.data().title,
                  url: collection.data().url,
                  id: collection.id,
                  category: categoryID
                });
              }
            });
          });
      }
    }
  },
  firestore() {
    if (this.$props.category !== "Newest") {
      return {
        movies: db
          .collection("categories")
          .doc(this.$props.category)
          .collection("movies")
      };
    }
  },
  methods: {
    embedable(url) {
      return "https://youtube.com/embed/" + url.split("=")[1];
    },
    deleteMovie(movie) {
      if (this.$props.category === "Newest") {
        db.collection("categories")
          .doc(movie.category)
          .collection("movies")
          .doc(movie.id)
          .delete();

        let index;

        for (let i = 0; i < this.movies.length; i++) {
          if (movie.id === this.movies[i].id) {
            index = i;

            break;
          }
        }
        this.movies.splice(index, 1);
      } else {
        db.collection("categories")
          .doc(this.$props.category)
          .collection("movies")
          .doc(movie.id)
          .delete();
      }
    }
  }
};
</script>
