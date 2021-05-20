<template>
  <Nav />
  <MainPage/>
  <!-- <Chat /> -->
</template>

<script>
import Nav from '@/components/Nav.vue'
import MainPage from '@/components/MainPage.vue'
// import Chat from '@/components/Chat.vue'

export default {
  name: 'App',
  components: { Nav, MainPage }
}
</script>
