<template>
    <div>
        <h1>Post's page</h1>
        <my-input
            v-focus
            placeholder="Search"
            v-model="searchQuery" 
        />
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
        <PostList 
            :posts="sortAndSearch"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else>Loading</div>
        <div v-intersection="loadPosts" class="observe"></div>
    </div>
</template>


<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import usePosts from "@/hooks/usePosts.js"
import useSortedPosts from "@/hooks/useSortedPosts.js"
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts.js"
import {ref} from 'vue'
export default {
    components : {
        PostForm,
        PostList 
    },
    data() {
        return {
            dialogVisible : false,
            sortOptions : [
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By description'}
            ],
        }
    },
    setup(props) {
        const {posts, totalPages} = usePosts(10)
        const {selectedSort, sortedPosts} = useSortedPosts(posts)
        const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

        return {
           posts,
           totalPages,
           selectedSort,
           sortedPosts,
           searchQuery,
           sortedAndSearchedPosts
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
.page_wrapper {
    display: flex;
    margin-top: 15px;
}
.page{
    border: 1px solid white;
    padding: 10px;
    margin: 5px;
}
.current-page {
    border: 2px solid purple;
}
</style>