import Main from '@/pages/Main.vue'
import PostPage from '@/pages/PostPage.vue'
import PostPageStore from '@/pages/PostPageStore.vue'
import PostPageCompositionApi from '@/pages/PostPageCompositionApi.vue'
import About from '@/pages/About.vue'
import Post from '@/pages/Post.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path : '/',
        component : Main
    },
    {
        path : '/posts',
        component : PostPage
    },
    {
        path : '/about',
        component : About
    },
    {
        path : '/posts/:id',
        component : Post
    },
    {
        path : '/store',
        component : PostPageStore
    },
    {
        path : '/composition',
        component : PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history : createWebHistory(import.meta.env.BASE_URL)
})

export default router;