<template>
  <div class="page-title">
      <div class="titulo">
        <h1><i v-if="icon" :class="icon"></i>{{ main }}</h1>
        <h2>{{ sub }}</h2>
      </div>
      <div class="voltar">
        <router-link class="link" to="/">Início</router-link>
        <hr>
        <b-link href="https://leon-neves-resume.mybluemix.net/" class="link">Visitar Meu Perfil</b-link>
      </div>
      <hr>
  </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: [ 'icon', 'main', 'sub' ]
}
</script>

<style>
    .page-title {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 2rem;
    }
    .page-title h1 {
        margin: 0px;
        color: rgb(62, 105, 211);
        color: rgb(88, 96, 118);
    }

    .page-title h2 {
        color: rgb(62, 105, 211);
        color: rgb(88, 96, 118);
        margin-top: 5px;
        font-size: 1.3rem;
    }

    .titulo {
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    .voltar {
        width: 50%;
        text-align: end;
        display: flex;
        flex-direction: column;
    }

    /* .links {
        flex-direction: column;
        float: right;
    } */

    .link {
        text-decoration: none;
        color: rgb(88, 96, 118);
    }
    .link:hover {
        text-decoration: none;
        color: rgb(88, 96, 118);
    }
</style>