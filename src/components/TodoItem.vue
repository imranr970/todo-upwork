<template>

    <TodoItemEdit :item="item" v-if="isEditing" />
    <TodoItemView :item="item" v-else />

</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    import TodoItemEdit from './TodoItemEdit'
    import TodoItemView from './TodoItemView'
    
    export default {

        components: {
            TodoItemEdit,
            TodoItemView
        },

        props: {
            item: {
                required: true,
                type: Object
            }
        },

        setup(props) {

            const store = useStore()

            const isEditing = computed(() => {
                const editingItem = store.getters.editingItem
                return editingItem.item.id == props.item.id && editingItem.edit == true
            }) 

            return { 
                isEditing
            }

        }
    }

</script>
