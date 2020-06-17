<template>
    <StackLayout orientation="vertical">
        <Registered v-if="registered"/>
        <NotRegistered v-if="!registered"/>
    </StackLayout>
</template>


<script >
import Registered from './Registered';
import NotRegistered from './NotRegistered';
// registered will be true if the vuex store has a userid stored

  export default {
    name: "Profile",
    components: {
        Registered, NotRegistered
    },
    data() {
        return {
        }
    },
    computed: {
        registered() {
            return this.$store.state.isRegistered;
        }
    }
  }
</script>


<style scoped>
</style>
