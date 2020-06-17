<template>
    <GridLayout rows="60, *,60">
        <Search row="0" :data="exercises" @filtered="save"></Search>
        <List row="1" :data="filteredList" @go-to="goTo"></List>
        <Button row="2" text="Add new exercise" @tap="createCustom()" class="addCustomBtn"></Button>
    </GridLayout>
</template>
 
 
<script>
    import Search from "../General/Search";
    import List from "../General/List";
    export default{
        name: "Exercises",
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
                this.$emit('clicked', 'CustomExercise');
            },   
            goTo(item) {
                const server = this.$store.state.server;
                const username = this.$store.state.username;
                const name = item.replace(/\s/g, '%20');
                // const name = item;
                const url = `${server}/exerciseByTitle/${username}/${name}`;
                console.log(url);
                let that = this;
                fetch(url, {method: "GET", body: null})
                .then( async function(response) {
                    const b = await response.json();
                    console.log(b);
                    that.$store.commit('setCurrentObjItem', b);
                    console.log("4", that.$store.state.currentExercise);
                    that.$emit('exercise-view', item);
                })
                .catch(e => console.error(e));
                // this.$store.dispatch('setCurrentObjItem', item).then((d) => {
                //     console.log("finished");
                //     this.$emit('exercise-view', item);
                // })
            },
            save(filtere) {
                this.filtered = filtere;
            }
        },
        computed: {
            exercises() {
                return this.$store.getters.exerciseTitles;
            },
            filteredList() {
                if (this.filtered.length === 0) {
                    return this.exercises;
                } else {
                    return this.filtered;
                }
            }
        }
    }
</script>


<style scoped>

</style>