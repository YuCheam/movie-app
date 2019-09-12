<template>
    <v-container v-if="loading">
        <div class="text-xs-center">
            <v-progress-circular
                indeterminate
                :size="150"
                :width="8"
                color="green">
            </v-progress-circular>
        </div>
    </v-container>
    <v-container v-else grid-list-lg>
        <v-flex xs10 offset-xs1 xl8 offset-xl2>
            <v-layout wrap row fill-height>
                <v-flex xs6 sm4 lg3
                        v-for="(movie,index) in wholeResponse"
                        :key="index"
                        mb-2>
                    <card v-bind:item="movie"></card>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import card from '../components/Card'

    export default {
        data() {
            return {
                wholeResponse: [],
                loading: true
            }
        },
        mounted () {
            axios
                .get('http://www.omdbapi.com/?s=world&apikey=a539c84d&page=1&type=movie&Content-Type=application/json')
                .then(response => {
                    console.log(response.data)
                    this.wholeResponse = response.data.Search
                    this.loading= false
                })
                .catch(error => {
                    console.log(error)
                })
        },
        components: {
            card
        }
    }
</script>

<style lang="stylus" scoped>
    .v-progress-circular
        margin: 1rem
</style>