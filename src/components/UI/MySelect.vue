<template>
    <select v-model="modelValue" @change="chanheOption">
        <option class="select" disabled value="">Select sort value</option>
        <option
            class="select" 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
        >
            {{option.name}}
        </option>
    </select>
</template>

<script>
export default {
    name : 'my-select',
    props : {
        modelValue : {
            type : String
        },
        options : {
            type : Array,
            default: () => []
        }
    },
    methods: {
        chanheOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.select {
    color: white;
}
</style>