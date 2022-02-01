<template>

  <template v-if="loading.id == 'items' && loading.stat == true">
      <div class="card text-black my-4">
          <FontIcon icon="circle-notch" class="fa-spin" />
      </div>
  </template>

  <template v-else>
    <ul class="m-0 p-0" v-if="list.length">
     
      <Draggable 
        v-model="list" 
        item-key="order">

        <template #item="{ element }">
          <li 
          :key="element.id"
          class="card text-black my-4">
              
            <TodoItem :item="element" />

          </li>
        </template>

      </Draggable>

    </ul>
    
    <p v-else class="w-1/3 mx-auto bg-white shadow-card p-4 text-black my-4">
      No todo items found.
    </p>

  </template>


  <div class="w-1/3 mx-auto bg-white shadow-card p-4 text-black my-4" v-if="loading.stat == true && loading.id == 'pagination'"> 
    <FontIcon icon="circle-notch" class="fa-spin" />
  </div>

</template>

<script>
  
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import Draggable from 'vuedraggable'
  import axios from '@/axios'

  import TodoItem from './TodoItem'

  export default {

    components: {
      TodoItem,
      Draggable
    },

    display: "Simple",
    order: 0,

    setup() {

        const store = useStore()

        store.dispatch('getItems')

        const sortItems = () => {
          axios.put('/sort-items', {
            items: list.value.map((item, index) => {
              return {
                id: item.id,
                order: index
              }
            })
          })

        }

        const loading = computed(() => store.getters.loading)
        const list = computed({
          get: () => {
            return store.getters.items
          },
          set: (Items) => {
            store.commit('setItems', Items)
            sortItems()
          }
        })

        return { 
          list,
          loading, 
          sortItems
        }

    }

  }

</script>
