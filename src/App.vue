<template>
  <Nav />
  <MainPage/>
</template>

<script>
import Nav from '@/components/Nav.vue'
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'App',
  components: { Nav, MainPage }
}
</script>
