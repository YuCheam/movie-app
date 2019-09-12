<template>
    <v-layout offset-xs4>
        <v-flex>
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

            <v-container v-else-if="!movieResponse">
                <div class="text-xs-center">No Movies Found</div>
            </v-container>

            <v-container v-else grid-list-xl>
                <v-flex xs10 offset-xs1 xl8 offset-xl2>
                    <v-layout wrap row>
                        <v-flex xs6 sm4 xl3
                                v-for="(movie, index) in movieResponse"
                                :key="index"
                                mb-2>
                          <card :item="movie"></card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    import card from '../components/Card'

    export default {
        data () {
            return {
                movieResponse: [],
                loading: true
            }
        },
        mounted() {
            const url = 'http://www.omdbapi.com/?s='+ this.$route.params.name +'&apikey=a539c84d&page=1&type=movie&Content-Type=application/json'
            axios
                .get(url)
                .then(response => {
                    this.loading = false

                    if (response.data.Response) {
                        this.movieResponse = response.data.Search
                    } else {
                        this.movieResponse = false
                    }
                    //console.log(response.data)
                })
                .catch(error => {
                   // console.log(error)
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