<template>

    <form action="#" @submit.prevent="addItem">

        <div class="card shadow-card p-4 text-black">
            
            <div class="flex">
                <input 
                type="text" 
                v-model.trim="item" 
                class="border block w-full focus:outline-none p-2" 
                :class="{ 'border-red-500': error }"
                placeholder="Add new Todo"
                @input="setError(null)"
                >
                    
                <button 
                type="submit"
                class="bg-dark-green text-white border border-dark-green hover:opacity-95 p-1 px-10 text-center transition ease-in duration-150 ml-1">
                    Add
                </button>
            </div>

            <span class="text-red-500 text-sm" v-show="error">{{ error }}</span>

        </div>

    </form>

</template>

<script>
    
    import { computed } from 'vue'
    import { useStore } from "vuex"

    export default {
        setup() {
            
            const store = useStore()

            const error = computed(() => store.getters.error)

            const item = computed({
                get: () => store.getters.item,
                set: (value) => store.commit('setItem', value)
            })

            const addItem = () => store.dispatch('addItem')

            const setError = (error) => store.commit('setError', error)

            return {
                item,
                error,
                setError,
                addItem,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>