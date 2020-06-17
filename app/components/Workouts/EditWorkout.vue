<template>
<page>
  <ActionBar title="Workout Edit" backgroundColor="#00A3FF">
  <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goback"/>
  </ActionBar>
    <GridLayout rows="60, *,60">
        <Button row="0" text="Save Workout" @tap="saveWorkout()" class="addCustomBtn"></Button>
        <List row="1" :data="exercisesAndRests" @go-to="goTo" v-show="addExeFlg"/>
        <StackLayout row="2" orientation="horizontal">
            <Button text="Add Exercise" @tap="addExercise()" class="addCustomBtn"></Button>
            <!-- <Button text="Add Rest" @tap="addRest()" class="addCustomBtn"></Button> -->
        </StackLayout>
    </GridLayout>
  </page>
</template>


<script >
import List from "../General/List";

  export default {
    name: "EditWorkout",
    props: ["workout"],
    components: {
      List
    },
    data() {
      return {
        selectedExe: [],
        addExeFlg:false
      }
    },
      methods: {
          addExercise() {
              //
              this.addExeFlg = true;
          },
          addRest() {
              // 
          },
          saveWorkout() {
            if(this.$store.state.username === 'default'){
              alert("You must have profile to save changes");
            }
            else{
              this.$store.commit('saveWorkoutEdit',this.selectedExe);
              this.$emit('clickApp', 'WorkoutView');
            }
          },
          goTo(item){
            if(this.selectedExe.indexOf(item) == -1){
              this.selectedExe.push(item);
            }
          }
      },
      created() {
        this.selectedExe = this.$store.getters.getExerciseTitlesForWorkout;
      //this.exercisesAndRests=this.$srote.getters.exerciseTitles;
          // get exercises and rests from workout prop
      },
      beforeDestroy(){
        this.$store.commit('editWorkout',false);
      },
      computed: {
            exercisesAndRests() {
                return this.$store.getters.exerciseTitles;
            }
        }
  }
</script>


<style scoped>
</style>
