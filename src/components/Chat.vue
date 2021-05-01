<template>
  <div class="chatcontainer">
    <div id="output">
      <!-- <span class="outputText"><b>{{ message.username }}</b> {{ message.text }}</span> -->
      <span class="outputText"><b>User2:</b> qwer</span>
    </div>
    <form id="form" action="">
      <input id="input" autocomplete="off" /><button>Send</button>
    </form>
  </div>
</template>

<script>
// import EventService from '@/services/EventService.js'
export default {
  // props: ['id'],
  // data() {
  //   return {
  //     message: null
  //   }
  // },
  // created() {
  //   EventService.getMessage()
  //     .then(response => {
  //       this.message = response.data
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  #output {
    height: 85%;
    width: 100%;
    border: 1px solid black;
    text-align: left;
  }

  .outputText { 
    padding: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    display: block;
  }
  
  /* Form */
  #form {
    padding-top: 10px;
    height: 15%;
  }
  #form #input {
    width: 89%;
    float: left;
  }
  #form button {
    width: 10%;
    float: left;
  }
  /* Form end */

  .chatcontainer {
    height: 200px;
    display: block;
    /* border: 1px solid black; */
  }
</style>
