import Vuex from 'vuex'

export default Vuex.createStore({

    modules: {},

    state: {
        item: null,
        items: []
    },
    getters: {
        item: (state) => state.item,
        items: (state) => state.items,
    },
    mutations: {
        addTodo(state) {
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
        }

    },
    actions: {}

})
