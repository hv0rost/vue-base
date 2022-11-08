<template>
    <div>
        <form @submit.prevent>
            <h2>Creating post</h2>
            <my-input 
                v-model="post.title"
                type="text" 
                placeholder="Name"
            />
            <my-input 
                v-model="post.body" 
                type="text" 
                placeholder="Body"
            />
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

</style>
