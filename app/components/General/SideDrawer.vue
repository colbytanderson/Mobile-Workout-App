<template>
    <RadSideDrawer ref="drawer">
        <StackLayout ~drawerContent>
            <Label text="Exercises" class="sidebarMenu" @tap="goTo('Exercises')"></Label>
            <Label text="Workouts" class="sidebarMenu" @tap="goTo('Workout')"></Label>
            <Label text="Profile" class="sidebarMenu" @tap="goTo('Profile')"></Label>
            <!-- <Label text="Settings" class="sidebarMenu" @tap="goTo('Settings')"></Label> -->
        </StackLayout>

        <StackLayout ~mainContent>
            <component v-for="component in componentsArray" v-if="component === currentComponent" :is="component" :key="component" @workout-view="workView" @exercise-view="exView" @clicked="goToComp"/>
        </StackLayout>
    </RadSideDrawer>
</template>


<script>
// import Home from '../Home/Home';
import Exercises from '../Exercises/Exercises';
import Workout from '../Workouts/Workout';
// import Settings from '../Settings/Settings';
import Profile from '../Profile/Profile';
 

    export default {
        name: "SideDrawer",
        components: {
            Exercises, Workout, Profile
        },
        props:["open"],
        data() {
            return {
                currentComponent: 'Profile',
                componentsArray: ['Exercises','Workout', 'Profile']
            }
        },
        methods: {
            goTo(component) {
                this.currentComponent  = component;
                this.$emit('drawerreset', component);
                this.$refs.drawer.nativeView.closeDrawer();
            },
            goToComp(comp){
                this.$emit('setnewcomp',comp);
            },
            exView(item) {
                console.log("exView handler in Side Drawer");
                this.$emit('exercise-view', item);
            },
            workView(item) {
                this.$emit('workout-view', item);
            }
        },
        watch:{
            open(){
                if (this.open == false) {
                    this.$nextTick(()=>{
                        this.$refs.drawer.nativeView.closeDrawer();
                    })
                    
                } else {
                    this.$nextTick(()=>{
                        this.$refs.drawer.nativeView.showDrawer();
                    })
                    
                }
            }
        }
    }
</script>


<style scoped>
.sidebarMenu {
    color: black;
    border-color: white;
    border-width: 3;
    font-size: 20;
    font-weight: bold;
    padding: 20 0;
}
</style>