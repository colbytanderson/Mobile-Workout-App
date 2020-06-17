<template>
    <StackLayout orientation="vertical">
        <Label :text="title" class="header"/>
        <Label :text="info" class="body"/>
    </StackLayout>
</template>


<script>

    export default{
        name: "Description",
        props: ["title", "info"]
    }
</script>


<style scoped>
    .header {
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .body {
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>