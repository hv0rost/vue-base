import axios from 'axios'

export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading : false,
        selectedSort: '',
        sortOptions : [
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'}
        ],
        searchQuery : '',
        page : 0,
        limit : 10,
        totalPage : 0,
    }),
    mutations: {
        setPosts(state, posts){
            state.posts = posts
        },
        setLoading(state, isLoading){
            state.isPostsLoading = isLoading
        },
        setSortArgument(state, sortArg){
            state.selectedSort = sortArg
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery
        },
        setPage(state, page){
            state.page = page
        },
        setTotalPage(state, totalPage){
            state.totalPage = totalPage
        },
    },
    getters : {
        sortedPost(state) {
            return [...state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
        },
        sortAndSearch(state, getters) {
            return getters.sortedPost.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    actions : {
        async loadPosts({state, commit}) {
            try{
                commit('setPage', state.page += 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params : {
                        _page : state.page,
                        _limit : state.limit
                    }
                })
                commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch(e) {
                console.log(e);
            }
        }
    },
    namespaced : true
}