<template>
  <page>
    <ActionBar title="Custom Workout" backgroundColor="#00A3FF">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goback"/>
    </ActionBar>
    <StackLayout orientation="vertical">
      <Label text="Enter Workout Name"></Label>
      <TextField v-model="name" hint="Workout Name" class="input"></TextField>
      <Button text="Make Workout" @tap="goTo()" class="addCustomBtn"></Button>
      <Label :text="message"></Label>
    </StackLayout>
  </page>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        message: ""
      }
    },
    methods: {
      goTo() {
        console.log(this.name);
        // this.$store.getters.validateWorkoutTitle(this.name).then(function (res) {
        //   if (!res) {
        //   this.message = "This name is already taken. Choose a new one.";
        // } else {
        //   // TODO exercise title list
        //   let workout = this.$store.getters.getExerciseByTitle(this.name, []);
        //   this.$store.commit('addWorkout', workout);
        //   // this.$emit('go-to-edit-workout', 'EditWorkout');
        //   this.$emit('clicked', 'Workout');
        // }
        // });
        let that = this;
        fetch(`${this.$store.state.server}/validateWorkout/${this.$store.state.username}/${this.name}`, {method: "GET", body: null})
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        console.log("dfasdfasdfasdfasdfasdfasdfasdfasdfs");
                        const a = ((parsedJson === "true") || (parsedJson === true));
                        console.log(a);
                        if (!a) {
                          that.message = "This name is already taken. Choose a new one.";
                        } else {
                          // TODO exercise title list
                          console.log(that);
                          let workout = that.$store.getters.getExerciseByTitle(that.name, []);
                          that.$store.commit('upsertWorkout', workout);
                          // this.$emit('go-to-edit-workout', 'EditWorkoutht');
                          console.log("reachedddd");
                          that.$emit('clicked', 'Workout');
                        }
                    })
                })
          .catch(e => console.error(e));






        // const a = this.$store.getters.validateWorkoutTitle(this.name);
        // console.log(a, "Asdfasdfasdf");
        // if (!a) {
        //   this.message = "This name is already taken. Choose a new one.";
        // } else {
        //   // TODO exercise title list
        //   let workout = this.$store.getters.getExerciseByTitle(this.name, []);
        //   this.$store.commit('addWorkout', workout);
        //   // this.$emit('go-to-edit-workout', 'EditWorkout');
        //   this.$emit('clicked', 'Workout');
        // }
      }
    }
  }
</script>

<style scoped>
</style>
