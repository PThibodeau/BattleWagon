<template>
  <div v-if="truck">
    <h1>{{ truck.title }}</h1>
    <p>{{ truck.time }} on {{ truck.date }} @ {{ truck.location }}</p>
    <p>{{ truck.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      truck: null
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.truck = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
