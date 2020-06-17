<template>
<page>
  <!-- <ActionBar title="Custom Exercise" backgroundColor="#00A3FF">
  <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goback"/>
  </ActionBar> -->
    <StackLayout orientation="vertical" width="550" height="450" backgroundColor="">
        <TextField v-model="title" hint="Exercise Name" class="input"/> 
        <TextField v-model="prim" hint="Primary Muscle Worked" class="input"/>
        <TextField v-model="equip" hint="Equipment" class="input"/>
        <TextField v-model="ROM" hint="ROM" class="input"/>
        <Button text="Create" @tap="addCustom()" class="addCustomBtn"></Button>
        <Label :text="message"></Label>
    </StackLayout>
</page>
</template>


<script >
  export default {
    name: "CustomExercise",
    data() {
      return {
        title: '',
        prim: '',
        equip: '',
        ROM: '',
        message: ''
      }
    },
    methods:{
        addCustom(){
            // check title
            console.log(this.$store.getters);
            if (this.title === '') {
              this.message = "Title Cannot be blank";
            } else if (this.$store.getters.validateExTitle(this.title)) {
              this.message = "Title already exists. Make a new one";
            } else {
              // add entered data to database
              let pr = [];
              pr.push(this.prim);
              let eq = [];
              eq.push(this.equip);
              const item = {
                title: this.title,
                musclesWorked: [],
                primaryMusclesWorked: pr,
                equipment: eq,
                ROM: this.ROM,
                custom: true
              };
              console.log(this.$store.dispatch);
              this.$store.dispatch('addExercise', item);
              // go back to exercises component
              this.$emit('clicked','Exercises');
              console.log("emit firesd");
            }
        }
    }
  }
</script>


<style scoped>
</style>
