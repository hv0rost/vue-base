<template>
    <div class="app">
        <h1>Post's page</h1>
        <div class="app_buttons">
            <my-button 
                @click="showDialog"
            >
                create post
            </my-button>
            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>

        <my-dialog style="margin : 10px" v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </my-dialog>
    <PostList 
        :posts="posts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Loading</div>
    </div>
</template>


<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import axios from 'axios'
export default {
    components : {
        PostForm,
        PostList 
    },
    data() {
        return {
            posts: [],
            dialogVisible : false,
            isPostsLoading : false,
            selectedSort: '',
            sortOptions : [
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By description'}
            ]
        }
    },
    methods: {
        createPost(event) {
            this.posts.push(event)
            this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id != post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        async fetchPosts() {
            try{
                this.isPostsLoading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                this.posts = response.data
            } catch(e) {
                console.log(e);
            } finally {
                this.isPostsLoading = false
            }
        },
    },
    mounted() {
        this.fetchPosts()
    },
    watch: {
        selectedSort(newValue) {
            this.posts.sort((post1, post2) => {
                return post1[newValue]?.localeCompare(post2[newValue])
            })
        }
    }
}
</script>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: black;
    color: white;
}

.app {
    padding: 20px;
}       

.app_buttons{
    display: flex;
    margin-top : 15px;
    justify-content: space-between;
}
</style>