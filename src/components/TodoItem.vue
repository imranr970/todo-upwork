<template>

    <TodoItemEdit :item="item" v-if="isEditing()" />
    <TodoItemView :item="item" v-else />

</template>

<script>

    import { ref } from 'vue'

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

        setup() {

            const editing = ref(false)

            const isEditing = () => {
                return editing.value
            }

            return { 
                isEditing
            }

        }
    }

</script>
