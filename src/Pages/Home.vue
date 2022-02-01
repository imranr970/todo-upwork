<template>

    <div>

        <h1 class="text-5xl text-center font-bold py-3 pb-6">Vue Todo App</h1>    

        <TodoForm />    

        <TodoList />

    </div>

</template>

<script>

import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'

export default {

    name: 'Home',

    components: {
        TodoList,
        TodoForm
    }
    
}
</script>
