<template>
    <div>
        <h1>Post's page</h1>
        <my-input
            v-focus
            placeholder="Search"
            :model-value="searchQuery" 
            @update:model-value="setSearchQuery"
        />
        <div class="app_buttons">
            <my-button 
                
                @click="showDialog"
            >
                create post
            </my-button>
            <my-select
                :model-value="selectedSort"
                @update:model-value="setSortArgument"
                :options="sortOptions"
            />
        </div>

        <my-dialog style="margin : 10px" v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </my-dialog>
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
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
    components : {
        PostForm,
        PostList 
    },
    data() {
        return {
            dialogVisible : false,
        }
    },
    methods: {
        ...mapMutations({
            setPage : 'post/setPage',
            setSearchQuery : 'post/setSearchQuery',
            setSortArgument : 'post/setSortArgument'
        }),
        ...mapActions({
            loadPosts: 'post/loadPosts'
        }),
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
    },
    mounted() {
        this.loadPosts();
    },
    computed : {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading : state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            sortOptions : state => state.post.sortOptions,
            searchQuery : state => state.post.searchQuery,
            page : state => state.post.page,
            limit : state => state.post.limit,
            totalPage : state => state.post.totalPage,
        }),
        ...mapGetters({
            sortedPost : 'post/sortedPost',
            sortAndSearch : 'post/sortAndSearch',
        })  
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