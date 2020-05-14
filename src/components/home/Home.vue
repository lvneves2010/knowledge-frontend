<template>
  <div class="home">
      <PageTitle icon="fa fa-smile-o" main="Bem-vindo ao meu Blog" sub="Home" />
      <div class="stat">
        <h1>Olá!!!</h1>
        <hr>
        <h3> Aqui Você vai encontrar diversos artigos úteis
            tanto para as pessoas que estão buscando
            informações sobre técnicas de desenvolvimento de aplicações 
            como para quem quer aprender mais sobre desenvolvimento web
        </h3>
        <p>Utilize o menu lateral para encontrar os artigos divididos em seus tópicos</p>
      </div>
      <div v-if="user.admin" class="stats">
        <Stat title="Categorias" :value="stat.categories" icon="fa fa-folder" color="#d54d50" />
        <Stat title="Artigos" :value="stat.articles" icon="fa fa-file" color="#3bc480" />
        <Stat title="Usuários" :value="stat.users" icon="fa fa-user" color="#3282cd" />
      </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl} from '@/global'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
    computed: mapState([ 'user' ]),
    data() {
      return {
        stat: {}
      }
    },
    methods: {
      getStats() {
        axios.get( `${baseApiUrl}/stats` ).then( res => this.stat = res.data )
      }
    },
    mounted() {
      this.getStats()
    }

}
</script>

<style>
  .stat {
        flex: 1;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: transparent;
        color: rgb(88, 96, 118);
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }
  .stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>