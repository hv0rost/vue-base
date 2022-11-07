<template>
    <div>
        <form @submit.prevent>
            <h2>Creating post</h2>
            <input 
                v-model="post.title" 
                class="input" 
                type="text" 
                placeholder="Name"
            >
            <input 
                v-model="post.body" 
                class="input" 
                type="text" 
                placeholder="Body"
            >
            <my-button 
                @click="createPost"
                style="align-self: flex-end; margin-top: 15px"
            >Create post </my-button>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
           post : {
            id : 0,
            title : '',
            body : ''
           }
        }
    },
    methods : {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        },
    }
}
</script>

<style scoped>
    .input {
        width: 100%;
        border: 1px solid rgb(233, 163, 233);
        padding: 10px 15px;
        margin-top: 10px;
    }
</style>
