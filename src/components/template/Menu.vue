<template>
  <aside class="menu" v-show="isMenuVisible" >Menu</aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Menu',
    computed: mapState([ 'isMenuVisible' ])
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #011a26, #011f3e);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>