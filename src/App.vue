<template>
    <div class="app">
    <PostForm @create="createPost"/>
    <PostList :posts="posts"/>
    </div>
</template>


<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
export default {
    components : {
        PostForm,
        PostList 
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'JavaScript',
                    body: 'description'
                },
                {
                    id: 2,
                    title: 'JavaScript2',
                    body: 'description'
                },
                {
                    id: 3,
                    title: 'JavaScript3',
                    body: 'description'
                },
            ],
        }
    },
    methods: {
        createPost(event) {
            this.posts.push(event)
        }
    }
}
</script>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}
</style>