<template>
    <div v-if="isLogin && activeUsers.indexOf(user.uid) >= 0">
        <MapList/>
        <Chat/>
    </div>
    <div v-else-if="isLogin" class="splah-screen-message">
        <div>Battle Wagon is in closed beta testing. Please contact the development team to gain access to this closed beta.</div>
    </div>
    <div v-else class="splah-screen-message">
        <div>Welcome to <b>Battle Wagon</b> <i>beta*</i></div>
    </div>
</template>

<script>

import MapList from '@/components/MapList.vue'
import Chat from '@/components/Chat.vue'
import { useAuth, getActivatedUsers } from '@/firebase'

export default {
    name: 'MainPage',
    components: { MapList, Chat },
    setup() {
        const { user, isLogin } = useAuth()
        const activeUsers = getActivatedUsers()

        return { isLogin, user, activeUsers }
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