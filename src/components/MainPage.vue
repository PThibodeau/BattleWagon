<template>
    <div v-if="handleLogon()">
        <MapList/>
        <!-- <Chat/> -->
    </div>
    <div v-else-if="isLogin" class="splah-screen-message">
        <div>
            <p><b>We're thrilled you're interested in Battle Wagon!</b></p>
            <span>Battle Wagon is currently in closed beta testing. Please contact the development team to gain access to this closed beta.</span>
        </div>
    </div>
    <div v-else class="splah-screen-message">
        <div>Welcome to <b>Battle Wagon</b> <i>beta*</i></div>
    </div>
</template>

<script>

import MapList from '@/components/MapList.vue'
// import Chat from '@/components/Chat.vue'
import { useAuth, getActivatedUsers } from '@/firebase'

export default {
    name: 'MainPage',
    components: { MapList },
    setup() {
        const { user, isLogin } = useAuth()
        const activeUsers = getActivatedUsers()

        return { isLogin, user, activeUsers }
    },
    methods: {
        handleLogon(){
            return this.isLogin && this.activeUsers.indexOf(this.user.uid) >= 0;
        }
    },
    props: { 
        'modelValue': String, 
    } 
}
</script>

<style scoped>
    .splah-screen-message {
        margin-top: 75px;
        background-color: lightslategray;
        border: 5px solid rgba(17, 24, 39, var(--tw-bg-opacity));
        padding: 10px;
        width: 1190px;
        margin-right: auto;
        margin-left: auto;
        user-select: none;
        font-size: 1.25rem;
        line-height: 1.75rem;
        text-align: center;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
</style>