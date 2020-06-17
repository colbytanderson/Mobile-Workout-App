<template>
<page>
  <ActionBar :title="workout.title" backgroundColor="#00A3FF">
  <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goback"/>
  </ActionBar>
    <GridLayout rows="*,60">
        <List row="0" :data="exercisesAndRests"/>
        <StackLayout row="1" orientation="horizontal">
            <Button text="Start" @tap="startWorkout" class="addCustomBtn"></Button>
            <!-- <Button text="Edit" @tap="editWorkout" class="editBtn"></Button> -->
        </StackLayout>
    </GridLayout>
</page>
</template>


<script>
import List from "../General/List";

    export default{
        name: "IndividualWorkoutView",
        components: {
            List
        },
        data(){
            return{
            }
        },
        methods: {
            startWorkout(){
                this.$emit('clickApp', 'WorkoutStart');
            },
            editWorkout(){
                this.$emit('clickApp', 'EditWorkout');
                this.$store.commit('editWorkout',true);
            },
            goback() {
                this.$emit('gobck', '');
            }
        },
        computed: {
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
</style>