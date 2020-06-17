<template>
    <GridLayout rows="60, *">
        <Search row="0" :data="componentSettings" @filtered="save(filteredList)"></Search>
        <List row="1" :data="componentSettings" @go-to="goTo"></List>
    </GridLayout>
</template>


<script>
import Search from "../General/Search";
import List from "../General/List";

    export default{
        name: "Settings",
        data(){
            return{
                componentSettings: ["hey", "hi", "Asdf", "hey", "hi", "Asdf", "hey", "hi", "Asdf", "hey", "hi", "Asdf", "hey", "hi", "Asdf"],
                filteredList: this.componentSettings
            }
        },
        components: {
            Search, List
        },
        methods:{
            save(filteredList) {
                this.filteredList = filteredList;
            },
            goTo() {
                // go to individual exercise component
                this.$emit('go-to-setting');
                //this.$emit('clicked', 'ComponentSetting');
            }
        }
    }
</script>


<style scoped>
</style>