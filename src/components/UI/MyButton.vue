<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default{
    name : 'my-button'
}
</script>

<style scoped>
    .btn {
        padding: 10px 15px;
        background: none;
        color: rgb(233, 163, 233);
        border: 1px solid rgb(233, 163, 233);
    }
</style>