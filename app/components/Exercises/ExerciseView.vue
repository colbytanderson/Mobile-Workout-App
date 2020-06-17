<template>
  <page>
  <ActionBar :title="exercise.title" backgroundColor="#00A3FF">
  <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goback"/>
  </ActionBar>
        <GridLayout rows="*,60">
          <StackLayout row="0" orientation="vertical">
            <Description title="Muscles Worked" :info="musclesWorked"/>
            <Description title="Primary Muscles Worked" :info="primaryMusclesWorked"/>
            <Description title="ROM" :info="exercise.ROM"/>
            <Description title="Equipment" :info="equipment"/>
          </StackLayout>
        <StackLayout  row="1"  orientation="horizontal">
          <Button text="Add to workout" @tap="addToWorkout()" class="addCustomBtn"></Button>
          <Button v-if="custom" text="Edit" @tap="editCustom()" class="editBtn"></Button>
        </StackLayout>
        </GridLayout>
  </page>
</template>
 
  
<script>
import Description from "../General/Description";

    export default{
        name: "IndividualExercise",
        components: {
          Description
        },
        data(){
            return{
            }
        },
        methods:{
            addToWorkout() {
              // navigates to different component
            },
            editCustom() {
                // navigates to different component
            },
            goback(){
              this.$emit('gobck', 'goTodrawer');
            }
        },
        computed: {
          exercise() {
            // real use
            // return this.$store.state.currentExercise;
            // testing use
            const a = this.$store.state.currentExercise;
            console.log("tiiii", a);
            return a;
          },
          musclesWorked() {
            return this.exercise.musclesWorked.join(' and ');
          },
          primaryMusclesWorked() {
            return this.exercise.primaryMusclesWorked.join(' and ');
          },
          equipment() {
            return this.exercise.equipment.join(' or ');
          }
        }
    }
</script>


<style scoped>

</style>