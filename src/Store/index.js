import Vuex from 'vuex'

export default Vuex.createStore({

    modules: {},

    state: {
        item: null,
        items: [],
        editingItem: {
            item: {},
            edit: false
        }
    },
    getters: {
        item: (state) => state.item,
        items: (state) => state.items,
        editingItem: (state) => state.editingItem,
    },
    mutations: {

        addItem(state) {
            
            if(state.item == null || state.item == '') return false
            if(state.items.find(item => item.title.toLowerCase() == state.item.toLowerCase())) return false

            const item = {
                id: Math.random(1).toString().substring(1, 4),
                title: state.item,
                completed_at: null
            }
            state.items.unshift(item)
            state.item = null
        },

        setItem(state, item) {
            state.item = item
        },

        markCompleteItem(state, { id, checked }) {
            const itemIndex = state.items.findIndex(item => item.id == id)
            const item = state.items[itemIndex]
            checked ? item.completed_at = new Date() : item.completed_at = null
        },

        setItemEditing(state, { item, edit }) {
            state.editingItem = {
                item: item || {},
                edit
            }
        },

        updateTodo(state, {itemIndex, editedItem}) {
            state.items[itemIndex].title = editedItem
        }

    },
    actions: {
        updateTodo({ state, commit }, editedItem) {
            const itemIndex = state.items.findIndex(item => state.editingItem.item.id == item.id)
            commit('updateTodo', { itemIndex, editedItem })
            commit('setItemEditing', { edit: false })
        }
    }

})
