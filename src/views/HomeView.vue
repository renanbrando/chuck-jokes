<template>
  <v-container>
    <v-row>
      <v-col align-self="center">
        <v-btn @click="addJoke">Get a new joke</v-btn>
      </v-col>
      <v-col align-self="center">
        <v-btn @click="removeAllJokes">Clear my jokes list</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="jokes.length > 0">
      <v-col>
        <v-list v-for="joke in jokes" :key="joke.id">
          <v-list-item :href="joke.url" target="_blank" rel="noopener noreferrer">
            {{ joke.value }}
            <v-btn variant="text" @click="deleteJoke(joke.id)" color="red"><v-icon>fa-solid fa-trash</v-icon></v-btn>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-row v-else>
      <h1>No jokes here!</h1>
    </v-row>
  </v-container>
</template>


<script lang="ts">

import axios from 'axios'

export default {
  data() {
    return {
      jokes: []
    }
  },
  methods: {
    async addJoke() {
      try {
        const res = await axios.get('https://api.chucknorris.io/jokes/random')
        this.jokes.push(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    deleteJoke(id: string) {
      this.jokes = this.jokes.filter(j => j.id !== id)
    },
    removeAllJokes() {
      this.jokes = []
    }
  }

}

</script>