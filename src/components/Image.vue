<template>
    <v-img aspect-ratio="1"
           :src="imgSrc"
           @mouseenter="hoverStatus"
           @mouseleave="hoverStatus">
        <transition name="fade">
            <v-img  aspect-ratio="1"
                    v-if="hover"
                    :src="imgSrc"
                    class="faded"
                    contain>
            </v-img>
        </transition>
    </v-img>
</template>

<script>
    export default {
        name: "Image",
        data() {
          return {
              hover: false
          }
        },
        props: ['imgSrc'],
        methods: {
            hoverStatus() {
                this.hover= !this.hover
            }
        }
    }
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-to {
        opacity: 1;
        transition: .3s;
    }

    .fade-leave-to {
        opacity:0;
        transition: .3s;
    }

    .faded {
        background-color: rgba(1,1,1,.65);
    }
</style>