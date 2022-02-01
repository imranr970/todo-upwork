<template>

    <div>

        <h1 class="text-5xl text-center font-bold py-3 pb-6">Vue Todo App</h1>    

        <TodoForm />    

        <template v-if="loading">
            <div class="card text-black my-4">
                <FontIcon icon="circle-notch" class="fa-spin" />
            </div>
        </template>

        <template v-else>
            <TodoList />
        </template>

    </div>

</template>

<script>

import { ref } from 'vue'
import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'

export default {

    name: 'Home',
    components: {
        TodoList,
        TodoForm
    },

    setup() {
        
        const loading = ref(false)
        return {
            loading
        }
    }
  
}
</script>
