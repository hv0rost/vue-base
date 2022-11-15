import axios from 'axios'
import {onMounted, ref} from 'vue'

export default function usePosts(limit) {
    const posts =  ref([])
    const totalPages = ref(0)
    const fetching = async () => {
        try{
            this.page += 1
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params : {
                    _page : 1,
                    _limit : limit
                }
            })
            valuetotalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = [...this.posts, ...response.data]
        } catch(e) {
            console.log(e);
        }
    } 

    onMounted(fetching)

    return {
        posts,
        totalPages
    }
}