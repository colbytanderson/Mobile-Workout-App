<template>
    <StackLayout row="0" orientation="horizontal" width="550" height="auto">
        <TextField hint="Search here" @textChange="filterList()" v-model="searchedText" color="black" backgroundColor="white" width="250" height="50"/>
    </StackLayout>
</template>


<script>
    export default{
        name: "Search",
        props: ["data"],
        data(){
            return{
                searchedText: ""
            }
        },
        methods: {
            filterList() {
                this.$emit('filtered', this.data.filter(word => word.toLowerCase().startsWith(this.searchedText.toLowerCase())));
            }
        }
    }
</script>


<style scoped>
    .lbl {
        text-align: center;
        font-size: 20;
        color: #333333;
    }
    .listClass{
        margin-top: 70px;
        margin-bottom: 70px;
    }
    .itemlbl{
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>