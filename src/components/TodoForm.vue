<template>

    <form action="#" @submit.prevent="addTodo">

        <div class="card shadow-card p-4 text-black flex">
        
            <input 
            type="text" 
            v-model.trim="item" 
            class="border block w-full focus:outline-none p-2" 
            placeholder="Add new Todo"
            >
                
            <button 
            type="submit"
            class="bg-dark-green text-white border border-dark-green hover:opacity-95 p-1 px-10 text-center transition ease-in duration-150 ml-1">
                Add
            </button>

        </div>

    </form>

</template>

<script>
    import { ref } from 'vue'
    export default {
        setup() {

            const item = ref(null)
            const addTodo = () => {}

            return {
                item,
                addTodo,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>