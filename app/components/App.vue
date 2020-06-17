<template>
    <page @navigatedTo="hello">
        <ActionBar :title="title" backgroundColor="#00A3FF">
        
        <ActionItem @tap="openSideBar()"
        ios.systemIcon="17" ios.position="left"
        android.systemIcon="ic_menu_share" android.position="actionBar"></ActionItem>
        </ActionBar>
        <component :is="currentCompo" :key="currentCompo" v-show="currentCompo != null" @gobck="goTodrawer" @clickApp="clickapp"/>
        <SideDrawer :open="sideBarOpen" @drawerreset="resetdrawer" v-show="currentCompo == null" @setnewcomp="setComp" @workout-view="workView" @exercise-view="exView"/>
    </page>
</template>
 


<script>
import SideDrawer from './General/SideDrawer';
import ExerciseView from './Exercises/ExerciseView';
import CustomExercise from './Exercises/CustomExercise';
import WorkoutView from './Workouts/WorkoutView';
import WorkoutStart from './Workouts/WorkoutStart';
import CustomWorkout from './Workouts/CustomWorkout';
import EditWorkout from './Workouts/EditWorkout';

export default {
    name: "App",
    components: {
        SideDrawer, ExerciseView, WorkoutView, WorkoutStart, CustomExercise, CustomWorkout, EditWorkout
    },
    data() {
        return {
            sideBarOpen: false,
            title: "Profile",
            currentCompo: null
        }
    }, 
    methods: {
        openSideBar() {
            if (this.sideBarOpen === false) {
                this.sideBarOpen = true;
            } else if (this.sideBarOpen === true) {
                this.sideBarOpen = false;
            }
        },
        setComp(comp){
            this.currentCompo =  comp;
            this.sideBarOpen = false;
        },
        resetdrawer(component){
            this.title = component;
            this.sideBarOpen = false;
        },
        goback(){
            this.currentCompo = null;
        },
        goTodrawer(){
            this.currentCompo = null;
        },
        clickapp(comp){
            this.currentCompo =  comp;
            this.sideBarOpen = false;
        },
        hello(){
            this.currentCompo = null;
            this.sideBarOpen = false;
        },
        exView(item) {
            console.log("app ex view");
            this.currentCompo =  'ExerciseView';
            this.sideBarOpen = false;
            this.title = "Exercises";
        },
        workView(item) {
            this.currentCompo =  'WorkoutView';
            this.sideBarOpen = false;
            this.title = "Workouts";
        }
    },
    created() {
        this.$store.dispatch('setData');
    }
}
</script>

    
<style scoped>
</style>