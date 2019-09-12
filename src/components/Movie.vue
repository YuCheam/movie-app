<template>
    <v-container>
        <v-flex xs10 offset-xs1 md10 offset-md1>
            <v-card max-width="900"  style="margin:auto;">
                <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                        <v-img :src="singleMovie.Poster"></v-img>
                    </v-flex>
                    <v-flex xs12 sm6 md8>
                        <v-layout column fill-height>
                            <v-flex xs11>
                                <v-card-title class="ma-0">
                                    <div>
                                        <h2 class="headline mb-0"> {{singleMovie.Title}}-{{singleMovie.Year}}</h2>
                                        <p class="body-2 mb-0"> {{ singleMovie.Plot }}</p>
                                    </div>
                                </v-card-title>
                                <v-card-text class="ma-0">
                                    <h3 class="title">Actors:</h3>{{singleMovie.Actors}}
                                    <h3 class="title mt-3">Awards:</h3>{{singleMovie.Awards}}
                                    <p class="body-2">Genre: {{singleMovie.Genre}}</p>
                                </v-card-text>
                            </v-flex>
                            <v-flex xs1>
                                <v-card-actions>
                                    <v-btn flat color="blue" @click="back">back</v-btn>
                                    <v-spacer></v-spacer>
                                    <div class="text-xs-center">
                                        <v-dialog
                                                v-model="dialog"
                                                width="500">
                                            <v-btn  flat
                                                    slot="activator"
                                                    color="blue"
                                                    dark>
                                                View Ratings
                                            </v-btn>
                                            <v-card>
                                                <v-card-title
                                                        class="headline grey lighten-2"
                                                        primary-title
                                                >
                                                    Ratings
                                                </v-card-title>
                                                <v-card-text>
                                                    <table style="width:100%" border="1" >
                                                        <tr>
                                                            <th>Source</th>
                                                            <th>Ratings</th>
                                                        </tr>
                                                        <tr v-for="(rating,index) in this.ratings" :key="index">
                                                            <td align="center">{{ratings[index].Source}}</td>
                                                            <td align="center">{{ratings[index].Value}}</td>
                                                        </tr>
                                                    </table>
                                                </v-card-text>
                                                <v-divider></v-divider>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                            color="primary"
                                                            flat
                                                            @click="dialog = false"
                                                    >
                                                        OK
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </div>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        props: ['id'],
        data () {
            return {
                singleMovie: '',
                dialog: false,
                ratings: []
            }
        },
        mounted () {
            axios
                .get('http://www.omdbapi.com/?i='+ this.id +'&apikey=a539c84d&Content-Type=application/json')
                .then(response => {
                    this.singleMovie = response.data
                    this.ratings = this.singleMovie.Ratings
                    console.log(response.data)
                })
                .catch( error => {
                    console.log(error)
                })
        },
        methods: {
            back: function () {
                console.log(this.$router)
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>