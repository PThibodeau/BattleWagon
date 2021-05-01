<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: truck.id } }"
  >
    <div class="event-card">
      <span>{{ truck.time }} on {{ truck.date }}</span>
      <h4>{{ truck.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    truck: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}

.container {
  position: relative;
}
.truck{
  position: absolute;
  clip: rect(0, 35px, 60px, 0);
}
.st0{fill:#111111;}
.st1{fill:#0A3313;}
.st2{fill:#F98816;}
.st3{fill:#F91616;}
.st4{fill:#82F4E9;}
.st5{fill:#031106;}
.st6{fill:#2F683A;}
.st7{fill:none;stroke:#031106;stroke-width:3;stroke-miterlimit:10;}
.st8{fill:#FF0000;}
.st9{fill:#F72FD1;}
.st10{fill:#541F0D;}
.st11{fill:#000A02;}
.st12{fill:#FFE317;}
.st13{fill:none;stroke:#541F0D;stroke-width:3;stroke-miterlimit:10;}
.st14{fill:none;stroke:#0A3313;stroke-width:3;stroke-miterlimit:10;}
.st15{fill:none;stroke:#541F0D;stroke-width:2;stroke-miterlimit:10;}
.st16{fill:#282828;}
.st17{fill:#595959;}
.st18{fill:#176622;}
.st19{fill:#7FF495;}
.st20{fill:#68361A;}
.st21{fill:#877726;}
.st22{fill:#514812;}
.st23{fill:#826430;}
</style>
