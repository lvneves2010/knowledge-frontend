<template>
  <div class="content">
      <router-view />
  </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content {
        grid-area: content;
        /* background-color: #efefef; */
        /* background-image: url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80); */
        background-image: url('../../assets/desktop.jpeg');
        background-size: cover;
        padding: 20px;
    }
</style>