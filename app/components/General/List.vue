<template>
    <ListView for="item in data" @itemTap="goTo" class="listClass">
        <v-template>
            <Label :text="item" :class="handleClass(item)"/>
        </v-template>
    </ListView>
</template>


<script>
    export default{
        name: "List",
        props: ["data"],
        data(){
            return{
                clickedArr:[]
            }
        },
        created(){
            if(this.$store.state.isEditingWorkout == true){
                this.clickedArr = this.$store.getters.getExerciseTitlesForWorkout;
            }
        },
        methods:{
            goTo(event) {
                if(this.clickedArr.indexOf(event.item)==-1){
                    this.clickedArr.push(event.item);
                }
                this.$emit('go-to', event.item);
                if(this.$store.state.isEditingWorkout == true){
                    let x = this.data;
                    this.data = [];
                    setTimeout(()=>{
                        this.data = x;
                    },100);
                }
            },
            handleClass(item){
                if(this.$store.state.isEditingWorkout == true){
                    if(this.clickedArr.indexOf(item)==-1){
                        return 'itemlbl';
                    }
                    else{
                        return 'itemlblselect';
                    }
                }
                else{
                   return 'itemlbl'; 
                }
            }
        }
    }
</script>

 
<style scoped>
    .listClass{
        margin-top: 70px;
        margin-bottom: 70px;
    }
    .itemlbl{
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .itemlblselect{
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: #ccc;
    }
</style>