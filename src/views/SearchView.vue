<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field v-model="search" label="Buscar por piada" @click:append="searchJoke"
                    append-icon="fa-solid fa-magnifying-glass" />
            </v-col>
        </v-row>

        <v-progress-circular color="primary" model-value="20" :size="100" :width="12"
            indeterminate></v-progress-circular>

        <v-row v-if="jokes.length > 0">
            <v-list v-for="joke in jokes" :key="joke.id">
                <v-list-item :href="joke.url" target="_blank" rel="noopener noreferrer">
                    {{ joke.value }}
                    <span>[{{ joke.categories.toString() }}]</span>
                    <v-btn @click="deleteJoke(joke.id)" color="blue">
                        <v-icon>fa-solid fa-trash</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-row>
        <v-row v-else>
            <p>No jokes here!</p>
        </v-row>
    </v-container>
</template>


<script lang="ts">

import axios from 'axios'

export default {
    data() {
        return {
            search: '',
            jokes: []
        }
    },
    methods: {
        async searchJoke() {
            try {
                const res = await axios.get(`https://api.chucknorris.io/jokes/search?query=${this.search}`)
                this.jokes = res.data.result
            } catch (error) {
                console.log(error)
            }
        },
        deleteJoke(id: string) {
            this.jokes = this.jokes.filter(j => j.id !== id)
        },
    }

}

</script>