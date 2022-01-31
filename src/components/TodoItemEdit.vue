<template>

    <form action="#" @submit.prevent="updateTodo">
        
        <div class="flex items-center box-border">
            
            <input 
            type="text" 
            v-model.trim="item.title"
            class="border block w-full focus:outline-none p-1 flex-grow">

            <span class="flex text-sm">
                
                <button 
                type="submit" 
                class="bg-dark-green text-white border border-dark-green hover:opacity-95 p-1 text-center transition ease-in duration-150 mx-0.5">
                    Edit
                </button>

                <button 
                class="bg-white text-dark-green border hover:opacity-95 p-1 text-center transition ease-in duration-150" 
                @click.prevent="setEditing({ edit: false })">
                    Cancel  
                </button>
            
            </span>
            
        </div>

    </form>

</template>

<script>

import { ref } from 'vue'
import { useStore } from 'vuex'

export default {

    setup() {

        const store = useStore()

        const item = ref({ ...store.getters.editingItem.item })

        const updateTodo = () => store.dispatch('updateTodo', item.value.title)
        const setEditing = (data) => store.commit('setItemEditing', data)

        return { 
            item,
            updateTodo,
            setEditing
        }

    }
}

</script>
