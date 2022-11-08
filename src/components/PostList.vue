<template>
    <div v-show="posts.length > 0">
        <h3 style="margin-top: 10px">List of posts</h3>
        <post-item 
            v-for="post in posts" 
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
         />
    </div>

    <h2 v-show="posts.length === 0"
        style="color : red; margin-top: 10px"
    >
        The list of posts is empty
    </h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
    components : {
        PostItem
    },
    props : {
        posts : {
            type : Array,
            required : true
        }
    }
}
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
}
</style>