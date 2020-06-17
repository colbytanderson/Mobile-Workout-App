<template>
<page>
    <StackLayout orientation="vertical">
        <Label class="lbl" :text="workout.title"/>
        <StackLayout orientation="horizontal"  width="550" height="auto">
            <Button text="Prev" @tap="prev()" class="nextPrevBtn" v-show="counter > 0"></Button>
            <Label :text="current"></Label>
            <Button text="Next" @tap="next()" class="nextPrevBtn" v-show="counter < exercisesAndRests.length-1"></Button>
        </StackLayout>
        <!-- <Button text="Exit Workout" @tap="exitWorkout()" class="addCustomBtn"></Button> -->
    </StackLayout>
</page>
</template>


<script>
// real line taken out
//   <ActionBar :title="workout.title" backgroundColor="#00A3FF">
//   </ActionBar>
// <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goback"/>

    export default{
        name: "WorkoutStart",
        data() {
            return {
                counter: 0
            }
        },
        methods:{
            prev() {
                if (this.counter > 0) {
                    this.counter--;
                }
            },
            next() {
                if (this.counter < this.exercisesAndRests.length) {
                    this.counter++;
                }
            },
            exitWorkout() {
                // go to Workouts component
                console.log("reached");
                this.$emit('clickApp', 'WorkoutView');
            }
        },
        computed: {
            current() {
                return this.exercisesAndRests[this.counter];
            },
            workout() {
                return this.$store.state.currentWorkout;
            },
            exercisesAndRests() {
                return this.$store.getters.getExerciseTitlesForWorkout;
            }
        }
    }
</script>


<style scoped>
    .lbl {
        text-align: center;
        font-size: 20;
        color: #333333;
        vertical-align: center;
        width: "550";
    }
    .nextPrevBtn {
        background-color: "#00A3FF";
        color: "white";
        width: "50";
    }
</style>