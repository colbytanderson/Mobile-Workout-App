<template>
    <ActionBar :title="title" backgroundColor="#00A3FF">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goback" />
      <ActionItem @tap="openSideBar()"
      ios.systemIcon="17" ios.position="left"
      android.systemIcon="ic_menu_share" android.position="actionBar"></ActionItem>
    </ActionBar>
</template>


<script>

    export default{
        name: "Description",
        props: ["title"],
        methods: {
            openSideBar() {
                this.$emit('open-sideBar', '');
            },
            goback(){
                
            }
        }
    }
</script>


<style scoped>
</style>