<template>
  <h1>Battle Wagon</h1>
  <div class="events">
    <EventCard v-for="truck in trucks" :key="truck.id" :truck="truck" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'TruckList',
  components: {
    EventCard
  },
  data() {
    return {
      trucks: null
    }
  },
  created() {
    EventService.getTrucks()
      .then(response => {
        this.trucks = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
