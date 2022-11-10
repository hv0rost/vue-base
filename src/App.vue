<template>
    <div class="app">
        <h1>Post's page</h1>
        <my-input
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

        <my-dialog style="margin : 10px" v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </my-dialog>
    <PostList 
        :posts="sortAndSearch"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Loading</div>
    <div ref="observer" class="observe"></div>


<!--     <div class="page_wrapper">
        <div 
            v-for="pageNum in totalPage"
            :key="pageNum"
            class="page"
            :class="{
                'current-page' : page === pageNum
            }"
            @click="changePage(pageNum)"
        >
            {{pageNum}}
        </div>
    </div> -->
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
            ],
            searchQuery : '',
            page : 1,
            limit : 10,
            totalPage : 0,
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
        async loadPosts() {
            try{
                this.page += 1
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params : {
                        _page : this.page,
                        _limit : this.limit
                    }
                })
                this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data]
            } catch(e) {
                console.log(e);
            } 
        }
/*         changePage(pageNum) {
            this.page = pageNum
        } */
    },
    mounted() {
        this.loadPosts();
        const options = {
            rootMargin: '0px',
            threshold : 1.0
        }
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting && this.posts< this.totalPage) {
                this.loadPosts()
            }
        }
        const observer = new IntersectionObserver(callback, options)
        observer.observe(this.$refs.observer)
    },
    computed : {
        sortedPost() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        sortAndSearch() {
            return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
/*         page() {
            this.fetchPosts()
        } */
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
.observe {}
</style>