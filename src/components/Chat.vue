<template>
  <div id="chatContainer" class="centered">
      <Message
        v-for="{ id, text, userPhotoURL, userName, userId } in messages.slice().reverse()"
        :key="id"
        :name="userName"
        :photo-url="userPhotoURL"
        :sender="userId === user?.uid"
      >
        {{ text }}
      </Message>
  </div>
  <div id="sendContainer" class="centered">
    <form v-if="isLogin" @submit.prevent="send">
      <input v-model="message" placeholder="Message" required />
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuth, useChat } from '@/firebase'

import Message from './Message.vue'

export default {
  components: { Message },
  setup() {
    const { user, isLogin } = useAuth()
    const { messages, sendMessage, userLogon, userLogoff} = useChat()
    let counter = 0;

    const message = ref('')
    const send = () => {
      sendMessage(message.value)
      message.value = ''
    }
    const sendLogonMessage = () => {
      userLogon()
    }
    const sendLogoffMessage = () => {
      userLogoff()
    }

    return { user, isLogin, messages, message, send, counter, sendLogonMessage, sendLogoffMessage }
  },
  updated(){
    if (this.counter === 0){
      this.counter = 1;
      //this.sendLogonMessage()
      // console.log("logon")
    }
  },
  beforeUnmount(){
    //this.sendLogoffMessage()
    // console.log("logoff")
  }
}
</script>

<style scoped>
  #chatContainer {
    background-color: lightslategray;
    border: 5px solid rgba(17, 24, 39, var(--tw-bg-opacity));
    border-top: none;
    border-bottom: none;
    height: 14ch;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
  }

  #sendContainer{
    display: flex;
    border: 5px solid rgba(17, 24, 39, var(--tw-bg-opacity));
  }

  #sendContainer form{
    width: 100%;
  }

  #sendContainer input{
    width: 90%;
    padding-left: 5px;
  }

  #sendContainer button{
    width: 10%;
    border-left: 5px solid rgba(17, 24, 39, var(--tw-bg-opacity));
  }

  .centered {
    width: 1190px;
    margin-right: auto;
    margin-left: auto;
  }

  .submit-button{
    background-color: lightslategrey;
  }
</style>