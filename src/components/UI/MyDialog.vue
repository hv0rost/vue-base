<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import ToggleMixin from '@/mixins/ToggleMixin';

export default{
    name : 'my-dialog',
    mixins : [ToggleMixin]
}
</script>

<style scoped>
.dialog {
    top : 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog_content{
    margin: auto;
    border: 1px solid rgb(233, 163, 233);
    border-radius: 12px;
    background: rgb(255, 255, 255);
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
    background: rgba(0, 0, 0);
}
</style>