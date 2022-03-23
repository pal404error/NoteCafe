/* eslint-disable indent */

<template>
	<div id="app">
			<Notebook @change-page="changePage" @new-page="newPage" :pages="pages" :activePage="index" />
			<Page @save-page="savePage" @delete-page="deletePage" :page="pages[index]" />
	</div>
</template>

<script>
import Notebook from './components/Notebook'
import Page from './components/Page'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBfI0LFYCN9AbtastKQ-XRCzdVW69_gb64",
  authDomain: "notee-eb942.firebaseapp.com",
  projectId: "notee-eb942",
  storageBucket: "notee-eb942.appspot.com",
  messagingSenderId: "1082831555961",
  appId: "1:1082831555961:web:0411ac19cd73c9237f73a8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default {
  name: 'app',
  components: {
    Notebook,
    Page
  },
  data: () => ({
    pages: [],
    index: 0
  }),
  mounted() {
    get('value', (pages) => {
      pages.forEach((page) => {
        this.pages.push({
          ref: page.ref,
          title: page.child('title').val(),
          content: page.child('content').val()
        })
      })
    })
  },
  methods: {
    newPage () {
      this.pages.push({
        title: '',
        content: ''
      })
      this.index = this.pages.length - 1
    },
    changePage (index) {
      this.index = index
    },
    savePage () {
      const page = this.pages[this.index]
      if (page.ref) {
        this.updateExistingPage(page)
      } else {
        this.insertNewPage(page)
      }
    },
    updateExistingPage (page) {
      page.ref.set({
        title: page.title,
        content: page.content
      })
    },
    insertNewPage (page) {
      page.ref = app.database.push().set(page)
    },
    deletePage () {
      const ref = this.pages[this.index].ref
      ref && ref.remove()
      this.pages.splice(this.index, 1)
      this.index = Math.max(this.index - 1, 0)
    }
  }
}
</script>

<style>
html, body, #app {
    height: 100%;
}

body {
    margin: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: row;
}
</style>
