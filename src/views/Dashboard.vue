<template>
  <div>
    <h1>Dashboard</h1>

    <div class="tabs">
      <ul>
        <li :class="{ 'is-active': activeCategory === 'Newest' }">
          <a @click="setCategory('Newest')">Newest</a>
        </li>

        <li
          v-for="category in categories"
          :key="category.title"
          :class="{ 'is-active': activeCategory === category.title }"
        >
          <a @click="setCategory(category.title)">{{ category.title }}</a>
        </li>
      </ul>
    </div>
    <tab-movie
      category="Newest"
      v-if="activeCategory === 'Newest'"
      :categories="categories"
    ></tab-movie>

    <tab-movie
      v-for="category in categories"
      :key="category.id"
      :category="category.id"
      v-if="activeCategory === category.title"
    ></tab-movie>
  </div>
</template>

<script>
import { db } from "../main";
import TabMovie from "../components/TabMovie.vue";
export default {
  name: "dashboard",
  components: { TabMovie },
  data() {
    return {
      categories: [],
      activeCategory: "Newest"
      // categories: ["Thriller", "Comedy", "Action"]
    };
  },
  firestore() {
    return {
      categories: db.collection("categories")
    };
  },
  methods: {
    setCategory(title) {
      this.activeCategory = title;
    }
  }
};
</script>
