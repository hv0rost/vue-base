import {computed, ref} from 'vue'

export default function useSortedAndSearchedPosts(SortedPosts) {
    const searchQuery = ref('')

    const sortedAndSearchedPosts = computed(() => {
        return sortedPost.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery,
        sortedAndSearchedPosts
    }
}