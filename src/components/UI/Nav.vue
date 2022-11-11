<template>
    <div class="navbar">
        <div 
            style="background: rgb(54, 53, 53)"
            @click="$router.push('/')"
        >
            Base
        </div>
        <div class="nav_btns">
            <my-button 
                style="margin-right: 10px"
                @click="$router.push('/posts')"
            >
                Posts
            </my-button>
            <my-button 
                @click="$router.push('/about')" 
            >
                About
            </my-button>
        </div>
    </div>
</template>


<script>
export default{
    name: 'nav-bar'
}
</script>


<style scoped>
.navbar {
    height: 50px;
    background: rgb(54, 53, 53);
    box-shadow: 2px 2px 4px rgb(240, 29, 29);
    display: flex;
    align-items: center;
    padding: 15px;
}
.nav_btns{
    margin-left: auto;
}
</style>