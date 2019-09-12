<template>
    <v-card height="100%" class="ma-0">
        <v-layout column class="ma-0">
            <v-flex xs6 :style="{'background-image':item.Poster}" class="pa-0">
                <poster :imgSrc="item.Poster"></poster>
            </v-flex>

            <v-flex>
                <v-card-title class="pa-2" >
                    <div>
                        <h2 :class="{scaleTitle: $vuetify.breakpoint.xlAndDown}"> {{item.Title}}</h2><br>
                        <div :class="{scaleTitle: $vuetify.breakpoint.smAndDown}">Year: {{item.Year}}</div>
                        <div :class="{scaleTitle: $vuetify.breakpoint.smAndDown}">Type: {{item.Type}}</div>
                        <div :class="{scaleTitle: $vuetify.breakpoint.smAndDown}">IMDB-id: {{item.imdbID}}</div>
                    </div>
                </v-card-title>
            </v-flex>
            <v-flex>
                <v-card-actions class="justify-center pa-0">
                    <v-btn flat
                           color="green"
                           @click="singleMovie(item.imdbID)">View</v-btn>
                </v-card-actions>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
    import poster from '../components/Image'

    export default {
        name: "Card",
        props: {
            item : Object
        },
        methods: {
            singleMovie(imdbID) {
                this.$router.push('/movie/' + imdbID)
            }
        },
        components: {
            poster
        }
    }
</script>

<style scoped>
    .scaleTitle {
        font-size: .9 rem;
    }

    .scaleContent {
        font-size: .8 rem;
    }
</style>