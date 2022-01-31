<template>
 
  <ul class="m-0 p-0" v-if="list.length">

    <li 
    v-for="item in list"
    :key="item.id"
    class="card text-black my-4">
        
      <TodoItem :item="item" />

    </li>

  </ul>
  
  <p v-else class="w-1/3 mx-auto bg-white shadow-card p-4 text-black my-4">
    No todo items found.
  </p>

  <div class="w-1/3 mx-auto bg-white shadow-card p-4 text-black my-4" v-if="loading"> 
    <FontIcon icon="spinner" class="fa-spin" />
  </div>

</template>

<script>
  
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import TodoItem from './TodoItem'

  export default {

    components: {
      TodoItem,
    },

    setup() {

        const store = useStore()

        const loading = ref(false)

        const list = store.getters.items

        return { loading, list }

    }

  }

</script>
