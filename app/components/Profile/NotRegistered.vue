<template>
        <StackLayout orientation="vertical" width="250" height="450" backgroundColor="">
          <TextField hint="Email" v-model="email" class="input"/> 
          <TextField hint="Username" v-model="username" class="input"/>
          <TextField hint="Password" v-model="password1" secure class="input"/>
          <TextField hint="Confirm Password" v-model="password2" secure class="input"/>
          <Button text="Signup" @tap="signUp()" width="250" height="50" backgroundColor="#00A3FF" color="white"></Button>
          <Label :text="text"></Label>
        </StackLayout>
</template>

<script >
const appSettings = require("tns-core-modules/application-settings");
  export default {
    name: "NotRegistered",
    data() {
      return {
        email: '',
        username: '',
        password1: '',
        password2: '',
        text: ''
      }
    },
    methods: {
      signUp() {
        // check fields before submitting data
        if ((this.password1 === '') || (this.username === '')) {
          this.text = "Username and/or password can't be blank";
        } else if (this.password1 != this.password2) {
          this.text = "Passwords do not match";
        } else {
            this.$store.dispatch('setUsername', this.username);
            appSettings.setString("username", this.username);
            appSettings.setString("password", this.password1);
            this.text = 'Account Created';
          }
        }
      }
    }
</script>

<style scoped>
</style>
