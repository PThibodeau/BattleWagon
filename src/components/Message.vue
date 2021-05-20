<template>
  <div class="message">
    <span :class="sender ? 'sender' : 'receiver'">{{ name }}: </span>
    <div class="text" :class="sender ? 'sender' : 'receiver'">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
  .message {
    display: flex;
    margin-left: 5px;
  }
  .message .text {
    padding-left: 5px;
  }
  .message .sender{
    color: rgb(196, 195, 195);
  }
  .message .receiver{
    color: black;
  }
</style>