<template>
    <GridLayout rows="60, *,60">
        <Search row="0" :data="workouts" @filtered="save"></Search>
        <List row="1" :data="filteredList" @go-to="goTo"></List>
        <Button row="2" text="Add new workout" @tap="createCustom()" class="addCustomBtn"></Button>
    </GridLayout>
</template>


<script>
    import Search from "../General/Search";
    import List from "../General/List";
    export default{
        name: "Workouts",
        components: {
            Search, List
        },
        data(){
            return{
                filtered: []
            }
        },
        methods:{
            createCustom(){
                // go to custom exercise component
                this.$emit('clicked', 'CustomWorkout');
            },
            goTo(item) {
                const server = this.$store.state.server;
                const username = this.$store.state.username;
                const name = item.replace(/\s/g, '%20');
                const url = `${server}/workoutByTitle/${username}/${name}`;
                console.log(url);
                let that = this;
                fetch(url, {method: "GET", body: null})
                .then(function(response) {
                    response.json().then(function(parsedJson) {
                    that.$store.commit('setCurrentWorkoutItem', parsedJson);
                    that.$emit('workout-view', item);
                })})
                .catch(e => console.error(e));
            },
            save(filtered) {
                this.filtered = filtered;
            }
        },
        computed: {
            workouts() {
                return this.$store.getters.workoutTitles;
            },
            filteredList() {
                if (this.filtered.length === 0) {
                    return this.workouts;
                } else {
                    return this.filtered;
                }
            }
        }
    }
</script>
 

<style scoped>
</style>