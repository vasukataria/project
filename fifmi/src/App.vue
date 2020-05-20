<template>
  <div id="app">
      <Header> </Header>
      <router-link to="/"></router-link>
      <router-link to="/artical"></router-link>
      <router-link to="/About"></router-link>
    <router-view/>
    <Footer class="footer bg-primary text-center text-white"> </Footer>
     </div>
</template>



<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components:{
  Header,
  Footer
  }
}
</script>






<style>
#app {

}
</style>
