<template>
    <div class="post">
        <div><strong>Name: </strong> {{ post.title }} </div>
        <div><strong>Description: </strong> {{ post.body }} </div>
        <my-button
            @click="$emit('remove', post)"
        > Delete</my-button>
    </div>
</template>

<script>
export default {
    props : {
        post : {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.post {
    margin-top: 10px;
    padding: 15px;
    border: 2px solid rgb(233, 163, 233);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>