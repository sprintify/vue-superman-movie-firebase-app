import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
// import VueFire from "vuefire";
import { firestorePlugin } from 'vuefire';
// import "firebase/firestore";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
// Vue.use(VueFire)

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAw0H8PEQY3BtGteGVAxzNXEzDq0CBMLCg",
  authDomain: "vuebulma.firebaseapp.com",
  databaseURL: "https://vuebulma.firebaseio.com",
  projectId: "vuebulma",
  storageBucket: "",
  messagingSenderId: "499893421625",
  appId: "1:499893421625:web:8c4466edb28d420a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// db.settings({ timestampsInSnapshots: true });

// export const db = firebase.firestore()
export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
