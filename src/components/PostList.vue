<template>
    <div v-show="posts.length > 0">
        <h3 style="margin-top: 10px">List of posts</h3>
        <transition-group name="post-list">
            <post-item 
            v-for="post in posts" 
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
         />
        </transition-group>
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
.post-list {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.post-list-move {
    transition: transform 0.6s ease;
}

</style>