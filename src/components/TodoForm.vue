<template>

    <form action="#" @submit.prevent="addItem">

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
    
    import { computed } from 'vue'
    import { useStore } from "vuex"

    export default {
        setup() {
            
            const store = useStore()

            const item = computed({
                get: () => store.getters.item,
                set: (value) => store.commit('setItem', value)
            })

            const addItem = () => store.commit('addItem')

            return {
                item,
                addItem,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>