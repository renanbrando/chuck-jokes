<template>
    <v-container>
        <v-row>
            <v-col>
                <v-chip v-for="(category, index) in categories" @click="toggleCategory(category)" :key="index">
                    {{ category }}
                </v-chip>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p> Selected category: {{ selectedCategory }}</p>
                <v-btn @click="addJoke" :disabled="!selectedCategory">Get a new joke from category</v-btn>
            </v-col>

        </v-row>

        <v-row v-if="jokes.length > 0">
            <v-list v-for="joke in jokes" :key="joke.id">
                <v-list-item :href="joke.url" target="_blank" rel="noopener noreferrer">
                    {{ joke.value }}
                    <v-btn @click="deleteJoke(joke.id)" color="primary">
                        <v-icon>fa-solid fa-trash</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list>
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
            selectedCategory: '',
            categories: [],
            jokes: []
        }
    },
    async beforeMount() {
        try {
            const res = await axios.get('https://api.chucknorris.io/jokes/categories')
            this.categories = res.data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        async addJoke() {
            try {
                const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${this.selectedCategory}`)
                this.jokes.push(res.data)
            } catch (error) {
                console.log(error)
            }
        },
        deleteJoke(id: string) {
            this.jokes = this.jokes.filter(j => j.id !== id)
        },
        toggleCategory(category: string) {
            this.selectedCategory = category
        }
    }

}

</script>
